// Main JavaScript functionality for SmartCommute

// Global variables
const currentPreference = "balanced"

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeEventListeners()
})

// Initialize event listeners
function initializeEventListeners() {
  // Quick planner form submission
  const originInput = document.getElementById("origin")
  const destinationInput = document.getElementById("destination")

  if (originInput && destinationInput) {
    originInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        planRoute()
      }
    })

    destinationInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        planRoute()
      }
    })
  }
}

// Plan route function for home page
function planRoute() {
  const origin = document.getElementById("origin").value.trim()
  const destination = document.getElementById("destination").value.trim()

  if (!origin || !destination) {
    alert("Please enter both origin and destination")
    return
  }

  // Redirect to route planner page with parameters
  window.location.href = `/route-planner?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`
}

// Utility function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
  const results = regex.exec(location.search)
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
}

// Format currency
function formatCurrency(amount) {
  return `₹${amount}`
}

// Format duration
function formatDuration(minutes) {
  if (minutes < 60) {
    return `${minutes} min`
  } else {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Style the notification
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "error" ? "#dc2626" : "#059669"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `

  // Add to document
  document.body.appendChild(notification)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Add CSS animations
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
