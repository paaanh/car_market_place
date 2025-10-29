package com.example.car_market_place.dto;

import lombok.Data;

@Data
public class FavoriteDto {
    private Long id;
    private Long userId;
    private Long carId;
}
