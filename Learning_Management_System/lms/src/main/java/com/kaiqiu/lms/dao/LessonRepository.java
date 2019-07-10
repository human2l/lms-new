package com.kaiqiu.lms.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaiqiu.lms.entity.Lesson;

public interface LessonRepository extends JpaRepository<Lesson, Integer> {
	Lesson findById(int Id);

	List<Lesson> findByTutor_Id(int tutorId);

	List<Lesson> findByStudents_Id(int studentId);
}
