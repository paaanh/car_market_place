package com.example.car_market_place.web;

import com.example.car_market_place.domain.Booking;
import com.example.car_market_place.domain.Payment;
import com.example.car_market_place.dto.PaymentDto;
import com.example.car_market_place.repo.BookingRepository;
import com.example.car_market_place.service.PaymentService;
import com.example.car_market_place.service.MapperService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
@CrossOrigin
public class PaymentController {
    private final PaymentService paymentService;
    private final BookingRepository bookingRepository;
    private final MapperService mapperService;

    @GetMapping
    public List<PaymentDto> getAll() {
        return paymentService.getAll()
                .stream()
                .map(mapperService::toPaymentDto)
                .collect(Collectors.toList());
    }

    @PostMapping
    public PaymentDto create(@RequestBody PaymentDto paymentDto) {
        Booking booking = bookingRepository.findById(paymentDto.getBookingId()).orElseThrow();
        Payment payment = Payment.builder()
                .booking(booking)
                .amount(paymentDto.getAmount())
                .method(paymentDto.getMethod())
                .status(paymentDto.getStatus())
                .paymentDate(paymentDto.getPaymentDate())
                .build();

        Payment saved = paymentService.create(payment);
        return mapperService.toPaymentDto(saved);
    }
}
