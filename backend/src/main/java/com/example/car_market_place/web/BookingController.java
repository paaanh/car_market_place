package com.example.car_market_place.web;

import com.example.car_market_place.domain.Booking;
import com.example.car_market_place.domain.Car;
import com.example.car_market_place.dto.BookingDto;
import com.example.car_market_place.repo.CarRepository;
import com.example.car_market_place.service.BookingService;
import com.example.car_market_place.service.MapperService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
@CrossOrigin
public class BookingController {
    private final BookingService bookingService;
    private final CarRepository carRepository;
    private final MapperService mapperService;

    @GetMapping
    public List<BookingDto> getAll() {
        return bookingService.getAll()
                .stream()
                .map(mapperService::toBookingDto)
                .collect(Collectors.toList());
    }

    @PostMapping
    public BookingDto create(@RequestBody BookingDto bookingDto) {
        Car car = carRepository.findById(bookingDto.getCarId()).orElseThrow();
        Booking booking = Booking.builder()
                .car(car)
                .customerName(bookingDto.getCustomerName())
                .customerEmail(bookingDto.getCustomerEmail())
                .bookingDate(bookingDto.getBookingDate())
                .status(bookingDto.getStatus())
                .build();

        Booking saved = bookingService.create(booking);
        return mapperService.toBookingDto(saved);
    }
}
