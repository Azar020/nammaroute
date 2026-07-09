    package com.smartcommute.controller;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PathVariable;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcommute.entity.User;
import com.smartcommute.service.UserService;

import jakarta.validation.Valid;

    @RestController
    @RequestMapping("/api/users")
    public class UserController {
        
        @Autowired
        private UserService userService;
        
        @PostMapping("/register")
        public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
            if (userService.existsByEmail(user.getEmail())) {
                return ResponseEntity.badRequest().body("Email already exists!");
            }
            
            User savedUser = userService.saveUser(user);
            return ResponseEntity.ok(savedUser);
        }
        
        @GetMapping("/{email}")
        public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
            return userService.findByEmail(email)
                    .map(user -> ResponseEntity.ok(user))
                    .orElse(ResponseEntity.notFound().build());
        }
    }
