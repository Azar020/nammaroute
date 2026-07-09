package com.smartcommute.controller;

import com.smartcommute.entity.Route;
import com.smartcommute.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routes")
public class RouteController {

    @Autowired
    private RouteService routeService;

    @GetMapping("/all")
    public ResponseEntity<List<Route>> getAllMatchingRoutes(
            @RequestParam String origin,
            @RequestParam String destination) {
        List<Route> routes = routeService.findAllRoutesByOriginAndDestination(origin, destination);
        return ResponseEntity.ok(routes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Route> getRouteById(@PathVariable Long id) {
        return routeService.getRouteById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/search")
    public ResponseEntity<List<Route>> searchRoutes(
            @RequestParam String origin,
            @RequestParam String destination,
            @RequestParam(defaultValue = "balanced") String preference) {
        List<Route> routes = routeService.findRoutes(origin, destination, preference);
        return ResponseEntity.ok(routes);
    }

    @GetMapping
    public ResponseEntity<List<Route>> getAllRoutes() {
        List<Route> routes = routeService.getAllRoutes();
        return ResponseEntity.ok(routes);
    }

    @PostMapping
    public ResponseEntity<Route> createRoute(@RequestBody Route route) {
        Route savedRoute = routeService.saveRoute(route);
        return ResponseEntity.ok(savedRoute);
    }
}
