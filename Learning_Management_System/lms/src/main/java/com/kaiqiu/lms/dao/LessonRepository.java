package com.kaiqiu.lms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaiqiu.lms.entity.Lesson;

public interface LessonRepository extends JpaRepository<Lesson, Integer> {

}
