package com.example.car_market_place.service;

import com.example.car_market_place.domain.*;
import com.example.car_market_place.dto.*;
import org.springframework.stereotype.Component;

@Component
public class MapperService {

    public BookingDto toBookingDto(Booking booking) {
        BookingDto dto = new BookingDto();
        dto.setId(booking.getId());
        dto.setCarId(booking.getCar().getId());
        dto.setCustomerName(booking.getCustomerName());
        dto.setCustomerEmail(booking.getCustomerEmail());
        dto.setBookingDate(booking.getBookingDate());
        dto.setStatus(booking.getStatus());
        return dto;
    }

    public PaymentDto toPaymentDto(Payment payment) {
        PaymentDto dto = new PaymentDto();
        dto.setId(payment.getId());
        dto.setBookingId(payment.getBooking().getId());
        dto.setAmount(payment.getAmount());
        dto.setMethod(payment.getMethod());
        dto.setStatus(payment.getStatus());
        dto.setPaymentDate(payment.getPaymentDate());
        return dto;
    }

    public FavoriteDto toFavoriteDto(Favorite favorite) {
        FavoriteDto dto = new FavoriteDto();
        dto.setId(favorite.getId());
        dto.setUserId(favorite.getUserId());
        dto.setCarId(favorite.getCar().getId());
        return dto;
    }
}
