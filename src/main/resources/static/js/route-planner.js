// Route Planner JavaScript functionality

let currentPreference = "balanced"

// Initialize route planner page
document.addEventListener("DOMContentLoaded", () => {
  initializeRoutePlanner()
  loadUrlParameters()
})
async function fetchAllRoutes() {
  const origin = document.getElementById("routeOrigin").value.trim()
  const destination = document.getElementById("routeDestination").value.trim()

  if (!origin || !destination) {
    showNotification("Please enter both origin and destination", "error")
    return
  }

  showLoading(true)
  hideRoutes()

  try {
    const response = await fetch(`/api/routes/all?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`)

    if (!response.ok) {
      throw new Error("Failed to fetch all routes")
    }

    const routes = await response.json()
    showLoading(false)
    displayRoutes(routes)
  } catch (error) {
    console.error("Error fetching all routes:", error)
    showLoading(false)
    showNotification("Error loading all routes. Please try again.", "error")
  }
}


// Initialize route planner functionality
function initializeRoutePlanner() {
  // Initialize preference tabs
  const tabButtons = document.querySelectorAll(".tab-button")
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")
      // Update current preference
      currentPreference = this.dataset.preference
    })
  })

  // Initialize form submission
  const originInput = document.getElementById("routeOrigin")
  const destinationInput = document.getElementById("routeDestination")

  if (originInput && destinationInput) {
    originInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchRoutes()
      }
    })

    destinationInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchRoutes()
      }
    })
  }
}

// Load URL parameters if present
function loadUrlParameters() {
  const origin = getUrlParameter("origin")
  const destination = getUrlParameter("destination")

  if (origin) {
    document.getElementById("routeOrigin").value = origin
  }
  if (destination) {
    document.getElementById("routeDestination").value = destination
  }

  // Auto-search if both parameters are present
  if (origin && destination) {
    searchRoutes()
  }
}

// Search for routes
async function searchRoutes() {
  const origin = document.getElementById("routeOrigin").value.trim()
  const destination = document.getElementById("routeDestination").value.trim()

  if (!origin || !destination) {
    showNotification("Please enter both origin and destination", "error")
    return
  }

  // Show loading
  showLoading(true)
  hideRoutes()

  try {
    // Make API call to search routes
    const response = await fetch(
      `/api/routes/search?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&preference=${currentPreference}`,
    )

    if (!response.ok) {
      throw new Error("Failed to fetch routes")
    }

    const routes = await response.json()

    // Hide loading
    showLoading(false)

    // Display routes
    displayRoutes(routes)
  } catch (error) {
    console.error("Error searching routes:", error)
    showLoading(false)
    showNotification("Error searching routes. Please try again.", "error")
  }
}

// Show/hide loading indicator
function showLoading(show) {
  const loading = document.getElementById("loading")
  if (show) {
    loading.classList.remove("hidden")
  } else {
    loading.classList.add("hidden")
  }
}

// Hide routes container
function hideRoutes() {
  const routesContainer = document.getElementById("routesContainer")
  routesContainer.classList.add("hidden")
}

// Display routes
function displayRoutes(routes) {
  const routesContainer = document.getElementById("routesContainer")
  const routesList = document.getElementById("routesList")

  if (routes.length === 0) {
    routesList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3>No routes found</h3>
                <p>Try different locations or check your spelling.</p>
            </div>
        `
  } else {
    routesList.innerHTML = routes.map((route) => createRouteCard(route)).join("")
  }

  routesContainer.classList.remove("hidden")
}

// Create route card HTML
function createRouteCard(route) {
  const steps = route.steps ? route.steps.split("|") : []
  const safetyClass = route.safetyRating === "High" ? "safety-high" : "safety-medium"

  return `
        <div class="route-card">
            <div class="route-header">
                <div class="route-info">
                    <h3>
                        <i class="fas fa-${getTransportIcon(route.transportType)}"></i>
                        ${route.transportType}
                    </h3>
                    <div class="route-details">
                        <span><i class="fas fa-clock"></i> ${route.durationMinutes} min</span>
                        <span><i class="fas fa-rupee-sign"></i> ${route.cost}</span>
                    </div>
                </div>
                <div class="route-badges">
                    <span class="badge ${safetyClass}">
                        <i class="fas fa-shield-alt"></i> ${route.safetyRating} Safety
                    </span>
                    <span class="badge environmental">${route.environmentalRating}</span>
                </div>
            </div>
            
            <div class="route-steps">
                ${steps
                  .map(
                    (step) => `
                    <div class="step">
                        <div class="step-dot"></div>
                        <span>${step}</span>
                    </div>
                `,
                  )
                  .join("")}
            </div>
            
            <button class="select-route-btn" onclick="selectRoute(${route.id})">
                Select This Route
            </button>
        </div>
    `
}

// Get transport icon based on type
function getTransportIcon(transportType) {
  const type = transportType.toLowerCase()
  if (type.includes("metro") || type.includes("train")) {
    return "train"
  } else if (type.includes("bus")) {
    return "bus"
  } else if (type.includes("auto") || type.includes("car")) {
    return "car"
  } else {
    return "route"
  }
}

// Select route
function selectRoute(routeId) {
  showNotification("Route selected! Navigation will start shortly.", "success");

  // Redirect to controller that serves the direction.html view
  window.location.href = `/route/direction?id=${routeId}`;
}


// Utility function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
  const results = regex.exec(location.search)
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
}

// Show notification function (same as main.js)
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "error" ? "#dc2626" : type === "success" ? "#059669" : "#2563eb"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}
