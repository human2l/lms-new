package com.kaiqiu.lms.service;

import java.util.List;

import com.kaiqiu.lms.entity.Lesson;

public interface LessonService {

	public List<Lesson> getLessons();

	public void saveLesson(Lesson theLesson);

	public Lesson getLesson(int theId);

	public void deleteLesson(int theId);
}
