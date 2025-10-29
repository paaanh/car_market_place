package com.example.car_market_place.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double amount;
    private String method; // CASH, CREDIT, BANK_TRANSFER
    private String status; // SUCCESS, FAILED, PENDING

    private LocalDateTime paymentDate;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
}
