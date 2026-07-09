package com.smartcommute.controller;

import com.smartcommute.service.RouteService;
import com.smartcommute.entity.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/route")
public class RoutePageController {

    @Autowired
    private RouteService routeService;

    @GetMapping("/direction")
    public String showDirectionPage(@RequestParam("id") Long id, Model model) {
        Route route = routeService.getRouteById(id).orElse(null);
        model.addAttribute("route", route);
        return "direction"; // Loads templates/direction.html
    }
}
