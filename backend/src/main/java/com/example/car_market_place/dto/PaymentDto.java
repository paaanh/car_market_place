package com.example.car_market_place.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PaymentDto {
    private Long id;
    private Long bookingId;
    private double amount;
    private String method;
    private String status;
    private LocalDateTime paymentDate;
}
