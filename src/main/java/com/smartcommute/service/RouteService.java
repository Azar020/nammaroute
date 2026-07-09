package com.smartcommute.service;

import com.smartcommute.entity.Route;
import com.smartcommute.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    private RouteRepository routeRepository;

    public List<Route> findRoutes(String origin, String destination, String preference) {
        switch (preference.toLowerCase()) {
            case "fastest":
                return routeRepository.findFastestRoutes(origin, destination);
            case "cheapest":
                return routeRepository.findCheapestRoutes(origin, destination);
            case "safest":
                return routeRepository.findSafestRoutes(origin, destination);
            default:
                return routeRepository.findByOriginAndDestination(origin, destination);
        }
    }
    public Optional<Route> getRouteById(Long id) {
        return routeRepository.findById(id);
    }

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Route saveRoute(Route route) {
        return routeRepository.save(route);
    }

    public void initializeDefaultRoutes() {
        if (routeRepository.count() == 0) {
            // Add sample routes
            routeRepository.save(new Route("Connaught Place", "Cyber City", "Metro + Bus",
                32, 45.0, "High", "Excellent", "Walk to Metro Station (5 min)|Blue Line to Central (18 min)|Bus 45A to Destination (9 min)"));

            routeRepository.save(new Route("Connaught Place", "Cyber City", "Direct Bus",
                45, 25.0, "Medium", "Good", "Walk to Bus Stop (3 min)|Bus 120 Direct Route (42 min)"));

            routeRepository.save(new Route("Connaught Place", "Cyber City", "Auto + Metro",
                28, 85.0, "High", "Good", "Auto to Metro Station (8 min)|Green Line Express (20 min)"));
        }
    }
    public List<Route> findAllRoutesByOriginAndDestination(String origin, String destination) {
        return routeRepository.findByOriginAndDestination(origin, destination);
    }

}
