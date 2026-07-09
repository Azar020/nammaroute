# NammaRoute — Smart Urban Commute Planner

A full-stack route-planning platform that helps commuters find the safest, fastest, or cheapest route across metro, bus, train, and auto options — built with a focus on safety-conscious urban travel, especially for women commuters.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📸 Screenshots

### 🏠 Home Screen
<img width="1763" alt="Home Screen" src="https://github.com/user-attachments/assets/71b42b54-ca27-4d94-b550-4e265e86ddab" />

### 🗺️ Route Planner
<img width="1763" alt="Route Planner" src="https://github.com/user-attachments/assets/cf09287a-a354-44e2-81bf-7fbce0a3373a" />

### 🛡️ Safety Features
<img width="1763" alt="Safety Features" src="https://github.com/user-attachments/assets/f9c342b4-12a5-4eea-98a9-5a2765a1232e" />
<!-- Replace with an actual screenshot or GIF before publishing -->

## Why I Built This

Urban commuters juggle multiple apps to compare metro, bus, and auto options, with little visibility into route safety — a real concern for many travelers, especially at night. NammaRoute unifies these into a single platform, letting users compare routes by time, cost, and safety rating, and view live map directions for their chosen route.

## Features

- **Multi-modal route search** — compare metro, bus, train, and auto options in one place
- **Preference-based filtering** — sort results by fastest, cheapest, safest, or balanced
- **Live map directions** — real routing and geocoding via OSRM and OpenStreetMap/Nominatim
- **Safety & environmental ratings** — each route is scored to support informed decisions
- **Safety resource hub** — emergency contacts and recommended safety apps for travelers
- **Fare estimation** — approximate cost breakdown by transport mode

## Tech Stack

**Backend**
- Java 17, Spring Boot
- Spring Data JPA / Hibernate
- Bean Validation (Jakarta Validation)

**Frontend**
- Thymeleaf (server-rendered views)
- Vanilla JavaScript, HTML/CSS
- Leaflet.js for interactive maps

**External APIs**
- [OSRM](http://project-osrm.org/) — route calculation
- [Nominatim](https://nominatim.org/) — geocoding

**Database**
- Relational database via Spring Data JPA (configurable — MySQL/PostgreSQL/H2)

## Architecture

```
Controller → Service → Repository → Entity
```

A standard layered Spring Boot architecture:
- **Controllers** handle HTTP requests and page routing
- **Services** contain business logic (route filtering, defaults)
- **Repositories** handle data access via Spring Data JPA
- **Entities** model `Route` and `User` data

## Getting Started

### Prerequisites
- Java 17+
- Maven
- A configured database (see `application.properties`)

### Run locally

```bash
git clone https://github.com/YOUR_USERNAME/nammaroute-smart-commute.git
cd nammaroute-smart-commute
mvn spring-boot:run
```

The app will be available at `http://localhost:8080`.

## Project Structure

```
src/main/java/com/smartcommute/
├── controller/     # Web & REST controllers
├── entity/         # JPA entities (Route, User)
├── repository/     # Spring Data repositories
├── service/        # Business logic
└── SmartCommuteApplication.java

src/main/resources/
├── static/         # CSS & JS
└── templates/      # Thymeleaf HTML views
```

## Roadmap / Next Steps

- [ ] Add authentication with Spring Security + password hashing (BCrypt)
- [ ] Connect user accounts to saved/favorite routes
- [ ] Unit and integration tests (JUnit, Mockito)
- [ ] Dockerize for easier deployment
- [ ] CI pipeline for automated builds/tests

## Contact

Feedback and suggestions welcome — feel free to open an issue.

## License

This project is licensed under the MIT License.
