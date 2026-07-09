package com.smartcommute.repository;

import com.smartcommute.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {

    List<Route> findByOriginAndDestination(String origin, String destination);

    @Query("SELECT r FROM Route r WHERE r.origin = :origin AND r.destination = :destination ORDER BY r.durationMinutes ASC")
    List<Route> findFastestRoutes(@Param("origin") String origin, @Param("destination") String destination);

    @Query("SELECT r FROM Route r WHERE r.origin = :origin AND r.destination = :destination ORDER BY r.cost ASC")
    List<Route> findCheapestRoutes(@Param("origin") String origin, @Param("destination") String destination);

    @Query("SELECT r FROM Route r WHERE r.origin = :origin AND r.destination = :destination AND r.safetyRating = 'High' ORDER BY r.durationMinutes ASC")
    List<Route> findSafestRoutes(@Param("origin") String origin, @Param("destination") String destination);

    List<Route> findByTransportType(String transportType);
}
