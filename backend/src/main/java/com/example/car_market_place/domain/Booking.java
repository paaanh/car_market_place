package com.example.car_market_place.domain;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String customerEmail;

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    private LocalDateTime bookingDate;
    private String status;
}
