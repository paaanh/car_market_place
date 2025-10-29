package com.example.car_market_place.domain;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "cars")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String make;          // Hãng (Mercedes-Benz)
    private String model;         // Dòng (C-Class)
    private Integer year;         // Năm
    private BigDecimal price;     // Giá USD (đồng bộ với frontend)
    private Integer mileage;      // Số km (int)

    private String fuelType;      // Petrol/Diesel/Electric/Hybrid
    private String transmission;  // Automatic/Manual

    private Boolean featured;     // Nổi bật
    private String location;      // "Hà Nội, Việt Nam"

    private String image;         // Ảnh chính ("/placeholder.svg")

    @ElementCollection
    @CollectionTable(name = "car_images", joinColumns = @JoinColumn(name = "car_id"))
    @Column(name = "url")
    private List<String> images;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Booking> bookings;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Favorite> favorites;// Thư viện ảnh
}
