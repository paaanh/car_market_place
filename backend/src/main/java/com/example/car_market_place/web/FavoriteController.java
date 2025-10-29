package com.example.car_market_place.web;

import com.example.car_market_place.domain.Car;
import com.example.car_market_place.domain.Favorite;
import com.example.car_market_place.dto.FavoriteDto;
import com.example.car_market_place.repo.CarRepository;
import com.example.car_market_place.service.FavoriteService;
import com.example.car_market_place.service.MapperService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/favorites")
@RequiredArgsConstructor
@CrossOrigin
public class FavoriteController {
    private final FavoriteService favoriteService;
    private final CarRepository carRepository;
    private final MapperService mapperService;

    @GetMapping("/{userId}")
    public List<FavoriteDto> getFavorites(@PathVariable Long userId) {
        return favoriteService.getByUser(userId)
                .stream()
                .map(mapperService::toFavoriteDto)
                .collect(Collectors.toList());
    }

    @PostMapping
    public FavoriteDto add(@RequestBody FavoriteDto favoriteDto) {
        Car car = carRepository.findById(favoriteDto.getCarId()).orElseThrow();
        Favorite favorite = Favorite.builder()
                .userId(favoriteDto.getUserId())
                .car(car)
                .build();

        Favorite saved = favoriteService.addFavorite(favorite);
        return mapperService.toFavoriteDto(saved);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id) {
        favoriteService.removeFavorite(id);
    }
}
