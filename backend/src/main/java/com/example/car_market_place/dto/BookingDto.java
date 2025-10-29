package com.example.car_market_place.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BookingDto {
    private Long id;
    private Long carId;
    private String customerName;
    private String customerEmail;
    private LocalDateTime bookingDate;
    private String status;
}
