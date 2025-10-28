package com.example.car_market_place.dto;

import java.math.BigDecimal;
import java.util.List;

public record CarDetailDto(
        Long id,
        String make,
        String model,
        Integer year,
        BigDecimal price,
        Integer mileage,
        String fuelType,
        String transmission,
        String location,
        String image,
        List<String> images
) {}
