package com.example.car_market_place.service;

import com.example.car_market_place.domain.Car;
import com.example.car_market_place.dto.CarDetailDto;
import com.example.car_market_place.dto.CarListItemDto;
import com.example.car_market_place.repo.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

import static com.example.car_market_place.service.CarSpecifications.*;

@Service
@RequiredArgsConstructor
public class CarService {
    private final CarRepository carRepository;

    public Page<CarListItemDto> findAll(
            String make,
            String model,
            Integer minYear,
            BigDecimal maxPrice,
            String fuelType,
            String transmission,
            Boolean featured,
            String q,
            Pageable pageable
    ) {
        Specification<Car> spec = Specification.where(hasMake(make))
                .and(hasModel(model))
                .and(minYear(minYear))
                .and(maxPrice(maxPrice))
                .and(fuelType(fuelType))
                .and(transmission(transmission))
                .and(featured(featured))
                .and(quickSearch(q));

        return carRepository.findAll(spec, pageable)
                .map(c -> new CarListItemDto(
                        c.getId(), c.getImage(), c.getMake(), c.getModel(), c.getYear(),
                        c.getPrice(), c.getMileage(), c.getFuelType(), c.getTransmission(), c.getFeatured()
                ));
    }

    public CarDetailDto findById(Long id) {
        Car c = carRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Car not found: " + id));
        return new CarDetailDto(
                c.getId(), c.getMake(), c.getModel(), c.getYear(), c.getPrice(),
                c.getMileage(), c.getFuelType(), c.getTransmission(), c.getLocation(),
                c.getImage(), c.getImages()
        );
    }
}
