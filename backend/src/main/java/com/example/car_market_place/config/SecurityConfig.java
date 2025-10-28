package com.example.car_market_place.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // Tắt CSRF để cho phép frontend gửi POST/PUT/DELETE
                .csrf(csrf -> csrf.disable())

                // Quy định quyền truy cập
                .authorizeHttpRequests(auth -> auth
                        // Cho phép toàn bộ các API (React, Postman, v.v.)
                        .requestMatchers("/api/**").permitAll()

                        // Các file static như index.html, JS, CSS cũng được mở
                        .requestMatchers("/", "/index.html", "/static/**", "/css/**", "/js/**", "/images/**").permitAll()

                        // Các request còn lại cần login
                        .anyRequest().authenticated()
                )

                // Cho phép form login mặc định
                .formLogin(Customizer.withDefaults())

                // Cho phép logout (Spring Security có sẵn)
                .logout(Customizer.withDefaults());

        return http.build();
    }
}
