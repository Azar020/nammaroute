package com.smartcommute.controller;

import com.smartcommute.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    
    @Autowired
    private RouteService routeService;
    
    @GetMapping("/")
    public String home(Model model) {
        routeService.initializeDefaultRoutes();
        return "index";
    }
    
    @GetMapping("/route-planner")
    public String routePlanner() {
        return "route-planner";
    }
    
    @GetMapping("/safety")
    public String safety() {
        return "safety";
    }
    
    @GetMapping("/about")
    public String about() {
        return "about";
    }
}
