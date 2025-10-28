package com.example.car_market_place.web;

import com.example.car_market_place.dto.CarDetailDto;
import com.example.car_market_place.dto.CarListItemDto;
import com.example.car_market_place.service.CarService;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
public class CarController {

    private final CarService carService;

    @GetMapping
    public Page<CarListItemDto> list(
            @RequestParam(required = false) String make,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) Integer minYear,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) String transmission,
            @RequestParam(required = false) Boolean featured,
            @RequestParam(required = false, name = "q") String quickSearch,
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "12") @Min(1) int size,
            @RequestParam(defaultValue = "id,asc") String sort
    ) {
        String[] parts = sort.split(",");
        Sort s = (parts.length == 2)
                ? Sort.by(Sort.Direction.fromString(parts[1]), parts[0])
                : Sort.by("id").ascending();

        Pageable pageable = PageRequest.of(page, size, s);

        return carService.findAll(
                make, model, minYear, maxPrice, fuelType, transmission, featured, quickSearch, pageable
        );
    }

    @GetMapping("/{id}")
    public CarDetailDto detail(@PathVariable Long id) {
        return carService.findById(id);
    }
}
