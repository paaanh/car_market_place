// repo/PaymentRepository.java
package com.example.car_market_place.repo;

import com.example.car_market_place.domain.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {}
