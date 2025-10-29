package com.example.car_market_place.service;

import com.example.car_market_place.domain.Favorite;
import com.example.car_market_place.repo.FavoriteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavoriteService {
    private final FavoriteRepository favoriteRepository;

    public List<Favorite> getByUser(Long userId) {
        return favoriteRepository.findByUserId(userId);
    }

    public Favorite addFavorite(Favorite favorite) {
        return favoriteRepository.save(favorite);
    }

    public void removeFavorite(Long id) {
        favoriteRepository.deleteById(id);
    }
}
