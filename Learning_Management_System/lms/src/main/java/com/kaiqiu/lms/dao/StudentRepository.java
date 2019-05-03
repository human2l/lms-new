package com.kaiqiu.lms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaiqiu.lms.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
