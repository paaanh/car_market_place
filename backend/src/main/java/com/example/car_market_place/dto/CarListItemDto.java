package com.example.car_market_place.dto;

import java.math.BigDecimal;

public record CarListItemDto(
        Long id,
        String image,
        String make,
        String model,
        Integer year,
        BigDecimal price,
        Integer mileage,
        String fuelType,
        String transmission,
        Boolean featured
) {}
