package com.example.car_market_place.service;

import com.example.car_market_place.domain.Booking;
import com.example.car_market_place.repo.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final BookingRepository bookingRepository;

    public List<Booking> getAll() {
        return bookingRepository.findAll();
    }

    public Booking create(Booking booking) {
        return bookingRepository.save(booking);
    }
}
