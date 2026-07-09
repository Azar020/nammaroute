-- Create SmartCommute Database
CREATE DATABASE IF NOT EXISTS smartcommute_db;
USE smartcommute_db;

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    safety_preference VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Routes Table
CREATE TABLE IF NOT EXISTS routes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    origin VARCHAR(200) NOT NULL,
    destination VARCHAR(200) NOT NULL,
    transport_type VARCHAR(100) NOT NULL,
    duration_minutes INT NOT NULL,
    cost DECIMAL(10,2) NOT NULL,
    safety_rating VARCHAR(20),
    environmental_rating VARCHAR(20),
    steps TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for better performance
CREATE INDEX idx_routes_origin_destination ON routes(origin, destination);
CREATE INDEX idx_routes_transport_type ON routes(transport_type);
CREATE INDEX idx_routes_safety_rating ON routes(safety_rating);
CREATE INDEX idx_users_email ON users(email);

-- Insert sample data
INSERT INTO routes (origin, destination, transport_type, duration_minutes, cost, safety_rating, environmental_rating, steps) VALUES
('Connaught Place', 'Cyber City', 'Metro + Bus', 32, 45.00, 'High', 'Excellent', 'Walk to Metro Station (5 min)|Blue Line to Central (18 min)|Bus 45A to Destination (9 min)'),
('Connaught Place', 'Cyber City', 'Direct Bus', 45, 25.00, 'Medium', 'Good', 'Walk to Bus Stop (3 min)|Bus 120 Direct Route (42 min)'),
('Connaught Place', 'Cyber City', 'Auto + Metro', 28, 85.00, 'High', 'Good', 'Auto to Metro Station (8 min)|Green Line Express (20 min)'),
('India Gate', 'Gurgaon', 'Metro + Bus', 55, 60.00, 'High', 'Excellent', 'Walk to Central Secretariat Metro (8 min)|Yellow Line to Huda City Centre (35 min)|Bus to Gurgaon (12 min)'),
('India Gate', 'Gurgaon', 'Direct Bus', 75, 40.00, 'Medium', 'Good', 'Walk to Bus Stop (5 min)|Express Bus to Gurgaon (70 min)'),
('Karol Bagh', 'Noida', 'Metro', 42, 55.00, 'High', 'Excellent', 'Blue Line to Rajiv Chowk (15 min)|Blue Line to Noida City Centre (27 min)'),
('Karol Bagh', 'Noida', 'Bus + Metro', 50, 35.00, 'Medium', 'Good', 'Bus to Kashmere Gate (20 min)|Red Line to Noida (30 min)'),
('Dwarka', 'Faridabad', 'Metro + Bus', 65, 70.00, 'High', 'Good', 'Blue Line to Rajiv Chowk (25 min)|Violet Line to Badarpur (25 min)|Bus to Faridabad (15 min)'),
('Rohini', 'Ghaziabad', 'Metro', 48, 50.00, 'High', 'Excellent', 'Red Line to Kashmere Gate (20 min)|Red Line to Ghaziabad (28 min)'),
('Lajpat Nagar', 'Aerocity', 'Metro', 35, 45.00, 'High', 'Excellent', 'Pink Line to Durgabai Deshmukh South Campus (10 min)|Airport Express to Aerocity (25 min)');

-- Insert sample users
INSERT INTO users (name, email, phone_number, safety_preference) VALUES
('Priya Sharma', 'priya.sharma@email.com', '+91-9876543210', 'High'),
('Rahul Kumar', 'rahul.kumar@email.com', '+91-9876543211', 'Medium'),
('Anjali Singh', 'anjali.singh@email.com', '+91-9876543212', 'High'),
('Vikash Gupta', 'vikash.gupta@email.com', '+91-9876543213', 'Medium'),
('Sneha Patel', 'sneha.patel@email.com', '+91-9876543214', 'High');
