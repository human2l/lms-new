package com.kaiqiu.lms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaiqiu.lms.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
