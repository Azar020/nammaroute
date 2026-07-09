package com.smartcommute.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "routes")
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Origin is required")
    @Column(nullable = false)
    private String origin;
    
    @NotBlank(message = "Destination is required")
    @Column(nullable = false)
    private String destination;
    
    @NotBlank(message = "Transport type is required")
    @Column(name = "transport_type", nullable = false)
    private String transportType;
    
    @NotNull(message = "Duration is required")
    @Column(nullable = false)
    private Integer durationMinutes;
    
    @NotNull(message = "Cost is required")
    @Column(nullable = false)
    private Double cost;
    
    @Column(name = "safety_rating")
    private String safetyRating;
    
    @Column(name = "environmental_rating")
    private String environmentalRating;
    
    @Column(columnDefinition = "TEXT")
    private String steps;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
    
    // Constructors
    public Route() {}
    
    public Route(String origin, String destination, String transportType, 
                Integer durationMinutes, Double cost, String safetyRating, 
                String environmentalRating, String steps) {
        this.origin = origin;
        this.destination = destination;
        this.transportType = transportType;
        this.durationMinutes = durationMinutes;
        this.cost = cost;
        this.safetyRating = safetyRating;
        this.environmentalRating = environmentalRating;
        this.steps = steps;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getOrigin() { return origin; }
    public void setOrigin(String origin) { this.origin = origin; }
    
    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }
    
    public String getTransportType() { return transportType; }
    public void setTransportType(String transportType) { this.transportType = transportType; }
    
    public Integer getDurationMinutes() { return durationMinutes; }
    public void setDurationMinutes(Integer durationMinutes) { this.durationMinutes = durationMinutes; }
    
    public Double getCost() { return cost; }
    public void setCost(Double cost) { this.cost = cost; }
    
    public String getSafetyRating() { return safetyRating; }
    public void setSafetyRating(String safetyRating) { this.safetyRating = safetyRating; }
    
    public String getEnvironmentalRating() { return environmentalRating; }
    public void setEnvironmentalRating(String environmentalRating) { this.environmentalRating = environmentalRating; }
    
    public String getSteps() { return steps; }
    public void setSteps(String steps) { this.steps = steps; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
