-- ===================================
-- DATABASE SCHEMA FOR CAR DEALERSHIP WEBSITE
-- MySQL Version
-- ===================================

-- Create database
CREATE DATABASE IF NOT EXISTS car_market_place CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE car_dealership;

-- ===================================
-- USERS TABLE
-- ===================================
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- USER PROFILES TABLE
-- ===================================
CREATE TABLE user_profiles (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL UNIQUE,
    full_name VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    avatar_url VARCHAR(500),
    date_of_birth DATE,
    driver_license VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- CARS TABLE
-- ===================================
CREATE TABLE cars (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    price DECIMAL(15, 2) NOT NULL,
    mileage INT,
    fuel_type ENUM('Xăng', 'Dầu diesel', 'Điện', 'Hybrid') DEFAULT 'Xăng',
    transmission ENUM('Số tự động', 'Số sàn', 'CVT') DEFAULT 'Số tự động',
    body_type ENUM('Sedan', 'SUV', 'Hatchback', 'Coupe', 'Truck', 'Van') DEFAULT 'Sedan',
    color VARCHAR(50),
    seats INT DEFAULT 5,
    engine_capacity VARCHAR(20),
    description TEXT,
    features JSON,
    image_url VARCHAR(500),
    gallery_urls JSON,
    status ENUM('available', 'sold', 'reserved', 'maintenance') DEFAULT 'available',
    condition_type ENUM('new', 'used') DEFAULT 'used',
    location VARCHAR(255),
    seller_id VARCHAR(36),
    views INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_brand (brand),
    INDEX idx_price (price),
    INDEX idx_year (year),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- FAVORITES TABLE
-- ===================================
CREATE TABLE favorites (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    car_id VARCHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_car (user_id, car_id),
    INDEX idx_user_id (user_id),
    INDEX idx_car_id (car_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- BOOKINGS TABLE (Test Drive Appointments)
-- ===================================
CREATE TABLE bookings (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    car_id VARCHAR(36) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    notes TEXT,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_car_id (car_id),
    INDEX idx_booking_date (booking_date),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- ORDERS TABLE
-- ===================================
CREATE TABLE orders (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    car_id VARCHAR(36) NOT NULL,
    total_amount DECIMAL(15, 2) NOT NULL,
    payment_method ENUM('credit_card', 'bank_transfer', 'cash', 'financing') NOT NULL,
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    order_status ENUM('pending', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
    delivery_address TEXT,
    delivery_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_car_id (car_id),
    INDEX idx_payment_status (payment_status),
    INDEX idx_order_status (order_status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- PAYMENTS TABLE
-- ===================================
CREATE TABLE payments (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id VARCHAR(36) NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    transaction_id VARCHAR(255),
    card_number VARCHAR(4),
    status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    INDEX idx_order_id (order_id),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- FINANCING OPTIONS TABLE
-- ===================================
CREATE TABLE financing_options (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id VARCHAR(36) NOT NULL,
    down_payment DECIMAL(15, 2) NOT NULL,
    loan_amount DECIMAL(15, 2) NOT NULL,
    interest_rate DECIMAL(5, 2) NOT NULL,
    loan_term_months INT NOT NULL,
    monthly_payment DECIMAL(15, 2) NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    INDEX idx_order_id (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- REVIEWS TABLE
-- ===================================
CREATE TABLE reviews (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    car_id VARCHAR(36) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_car_id (car_id),
    INDEX idx_rating (rating)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- CAR IMAGES TABLE
-- ===================================
CREATE TABLE car_images (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    car_id VARCHAR(36) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE,
    INDEX idx_car_id (car_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- SAMPLE DATA
-- ===================================

-- Sample Users
INSERT INTO users (id, email, password_hash, phone) VALUES
('user-001', 'admin@cardealership.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '0901234567'),
('user-002', 'customer1@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '0907654321');

-- Sample User Profiles
INSERT INTO user_profiles (user_id, full_name, phone, city) VALUES
('user-001', 'Quản Trị Viên', '0901234567', 'Hà Nội'),
('user-002', 'Nguyễn Văn A', '0907654321', 'Hồ Chí Minh');

-- Sample Cars
INSERT INTO cars (id, brand, model, year, price, mileage, fuel_type, transmission, body_type, color, seats, description, image_url, status) VALUES
('car-001', 'Toyota', 'Camry', 2023, 1200000000, 5000, 'Xăng', 'Số tự động', 'Sedan', 'Trắng', 5, 'Toyota Camry 2023 sang trọng, tiết kiệm nhiên liệu', '/placeholder.svg', 'available'),
('car-002', 'Honda', 'CR-V', 2022, 1100000000, 15000, 'Xăng', 'Số tự động', 'SUV', 'Đen', 7, 'Honda CR-V 2022 rộng rãi, phù hợp gia đình', '/placeholder.svg', 'available'),
('car-003', 'Mazda', 'CX-5', 2023, 950000000, 3000, 'Dầu diesel', 'Số tự động', 'SUV', 'Đỏ', 5, 'Mazda CX-5 2023 thiết kế thể thao, vận hành mạnh mẽ', '/placeholder.svg', 'available'),
('car-004', 'Hyundai', 'Tucson', 2022, 880000000, 20000, 'Xăng', 'Số tự động', 'SUV', 'Xanh', 5, 'Hyundai Tucson 2022 công nghệ hiện đại', '/placeholder.svg', 'available'),
('car-005', 'VinFast', 'VF e34', 2023, 690000000, 1000, 'Điện', 'Số tự động', 'SUV', 'Xám', 5, 'VinFast VF e34 xe điện thân thiện môi trường', '/placeholder.svg', 'available');

-- ===================================
-- VIEWS FOR REPORTING
-- ===================================

-- Active cars view
CREATE VIEW active_cars AS
SELECT 
    c.*,
    u.email as seller_email,
    COUNT(DISTINCT f.id) as favorite_count,
    AVG(r.rating) as avg_rating,
    COUNT(DISTINCT r.id) as review_count
FROM cars c
LEFT JOIN users u ON c.seller_id = u.id
LEFT JOIN favorites f ON c.id = f.car_id
LEFT JOIN reviews r ON c.id = r.car_id
WHERE c.status = 'available'
GROUP BY c.id;

-- User orders summary
CREATE VIEW user_orders_summary AS
SELECT 
    u.id as user_id,
    u.email,
    up.full_name,
    COUNT(o.id) as total_orders,
    SUM(o.total_amount) as total_spent,
    MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN user_profiles up ON u.id = up.user_id
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- ===================================
-- STORED PROCEDURES
-- ===================================

DELIMITER //

-- Procedure to create a new order
CREATE PROCEDURE create_order(
    IN p_user_id VARCHAR(36),
    IN p_car_id VARCHAR(36),
    IN p_payment_method VARCHAR(50),
    IN p_delivery_address TEXT
)
BEGIN
    DECLARE v_car_price DECIMAL(15, 2);
    DECLARE v_order_id VARCHAR(36);
    
    -- Get car price
    SELECT price INTO v_car_price FROM cars WHERE id = p_car_id;
    
    -- Generate order ID
    SET v_order_id = UUID();
    
    -- Insert order
    INSERT INTO orders (id, user_id, car_id, total_amount, payment_method, delivery_address)
    VALUES (v_order_id, p_user_id, p_car_id, v_car_price, p_payment_method, p_delivery_address);
    
    -- Update car status
    UPDATE cars SET status = 'reserved' WHERE id = p_car_id;
    
    SELECT v_order_id as order_id;
END //

DELIMITER ;

-- ===================================
-- TRIGGERS
-- ===================================

DELIMITER //

-- Update car views count
CREATE TRIGGER increment_car_views
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE cars 
    SET views = views + 1 
    WHERE id = NEW.car_id;
END //

-- Update order status when payment completed
CREATE TRIGGER update_order_on_payment
AFTER UPDATE ON payments
FOR EACH ROW
BEGIN
    IF NEW.status = 'completed' AND OLD.status != 'completed' THEN
        UPDATE orders 
        SET payment_status = 'paid', order_status = 'processing'
        WHERE id = NEW.order_id;
    END IF;
END //

DELIMITER ;

-- ===================================
-- INDEXES FOR PERFORMANCE
-- ===================================

-- Additional indexes for better query performance
CREATE INDEX idx_cars_composite ON cars(status, price, year);
CREATE INDEX idx_orders_composite ON orders(user_id, order_status, created_at);
CREATE INDEX idx_bookings_composite ON bookings(booking_date, status);

-- ===================================
-- END OF SCHEMA
-- ===================================