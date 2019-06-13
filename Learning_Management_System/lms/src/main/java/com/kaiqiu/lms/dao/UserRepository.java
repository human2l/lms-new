package com.kaiqiu.lms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaiqiu.lms.entity.User;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByEmail(String email);
}
