package com.kaiqiu.lms.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.kaiqiu.lms.entity.Lesson;

//@RepositoryRestResource(collectionResourceRel = "lessons", path = "lessons")
public interface LessonRepository extends JpaRepository<Lesson, Integer> {
//	List<Lesson> findByTitle(@Param("title") String title);
}
