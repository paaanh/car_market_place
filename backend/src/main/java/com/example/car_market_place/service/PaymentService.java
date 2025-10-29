package com.example.car_market_place.service;

import com.example.car_market_place.domain.Payment;
import com.example.car_market_place.repo.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRepository paymentRepository;

    public List<Payment> getAll() {
        return paymentRepository.findAll();
    }

    public Payment create(Payment payment) {
        return paymentRepository.save(payment);
    }
}
