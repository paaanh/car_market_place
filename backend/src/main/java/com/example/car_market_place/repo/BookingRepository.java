package com.example.car_market_place.repo;

import com.example.car_market_place.domain.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {}