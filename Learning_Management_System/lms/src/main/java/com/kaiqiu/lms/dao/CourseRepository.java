package com.kaiqiu.lms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaiqiu.lms.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}
