package com.example.car_market_place.service;

import com.example.car_market_place.domain.Car;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;

public class CarSpecifications {

    public static Specification<Car> hasMake(String make) {
        return (root, q, cb) -> make == null || make.isBlank()
                ? null
                : cb.like(cb.lower(root.get("make")), "%" + make.toLowerCase() + "%");
    }

    public static Specification<Car> hasModel(String model) {
        return (root, q, cb) -> model == null || model.isBlank()
                ? null
                : cb.like(cb.lower(root.get("model")), "%" + model.toLowerCase() + "%");
    }

    public static Specification<Car> minYear(Integer minYear) {
        return (root, q, cb) -> minYear == null ? null : cb.greaterThanOrEqualTo(root.get("year"), minYear);
    }

    public static Specification<Car> maxPrice(BigDecimal maxPrice) {
        return (root, q, cb) -> maxPrice == null ? null : cb.lessThanOrEqualTo(root.get("price"), maxPrice);
    }

    public static Specification<Car> fuelType(String fuelType) {
        return (root, q, cb) -> fuelType == null || fuelType.isBlank() ? null
                : cb.equal(cb.lower(root.get("fuelType")), fuelType.toLowerCase());
    }

    public static Specification<Car> transmission(String transmission) {
        return (root, q, cb) -> transmission == null || transmission.isBlank() ? null
                : cb.equal(cb.lower(root.get("transmission")), transmission.toLowerCase());
    }

    public static Specification<Car> featured(Boolean featured) {
        return (root, q, cb) -> featured == null ? null : cb.equal(root.get("featured"), featured);
    }

    public static Specification<Car> quickSearch(String qStr) {
        if (qStr == null || qStr.isBlank()) return null;
        final String like = "%" + qStr.toLowerCase() + "%";
        return (root, q, cb) -> cb.or(
                cb.like(cb.lower(root.get("make")), like),
                cb.like(cb.lower(root.get("model")), like),
                cb.like(cb.lower(root.get("fuelType")), like),
                cb.like(cb.lower(root.get("transmission")), like),
                cb.like(cb.lower(root.get("location")), like)
        );
    }
}
