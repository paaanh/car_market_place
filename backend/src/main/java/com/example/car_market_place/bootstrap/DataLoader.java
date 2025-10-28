package com.example.car_market_place.bootstrap;

import com.example.car_market_place.domain.Car;
import com.example.car_market_place.repo.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final CarRepository carRepository;

    @Override
    public void run(String... args) {
        if (carRepository.count() > 0) return;

        carRepository.saveAll(List.of(
                Car.builder()
                        .make("Mercedes-Benz").model("C-Class").year(2023)
                        .price(new BigDecimal("45000")).mileage(5000)
                        .fuelType("Petrol").transmission("Automatic")
                        .featured(true).location("Hà Nội, Việt Nam")
                        .image("/placeholder.svg")
                        .images(List.of("/placeholder.svg","/placeholder.svg","/placeholder.svg","/placeholder.svg"))
                        .build(),
                Car.builder()
                        .make("BMW").model("3 Series").year(2023)
                        .price(new BigDecimal("42000")).mileage(8000)
                        .fuelType("Diesel").transmission("Automatic")
                        .featured(false).location("TP.HCM, Việt Nam")
                        .image("/placeholder.svg").images(List.of("/placeholder.svg"))
                        .build(),
                Car.builder()
                        .make("Audi").model("A4").year(2022)
                        .price(new BigDecimal("38000")).mileage(12000)
                        .fuelType("Petrol").transmission("Automatic")
                        .featured(true).location("Đà Nẵng, Việt Nam")
                        .image("/placeholder.svg").images(List.of("/placeholder.svg"))
                        .build(),
                Car.builder()
                        .make("Tesla").model("Model 3").year(2023)
                        .price(new BigDecimal("48000")).mileage(3000)
                        .fuelType("Electric").transmission("Automatic")
                        .featured(false).location("Hà Nội, Việt Nam")
                        .image("/placeholder.svg").images(List.of("/placeholder.svg"))
                        .build(),
                Car.builder()
                        .make("Porsche").model("Cayenne").year(2023)
                        .price(new BigDecimal("75000")).mileage(2000)
                        .fuelType("Petrol").transmission("Automatic")
                        .featured(true).location("TP.HCM, Việt Nam")
                        .image("/placeholder.svg").images(List.of("/placeholder.svg"))
                        .build(),
                Car.builder()
                        .make("Lexus").model("RX 350").year(2022)
                        .price(new BigDecimal("52000")).mileage(15000)
                        .fuelType("Hybrid").transmission("Automatic")
                        .featured(false).location("Hải Phòng, Việt Nam")
                        .image("/placeholder.svg").images(List.of("/placeholder.svg"))
                        .build()
        ));
    }
}
