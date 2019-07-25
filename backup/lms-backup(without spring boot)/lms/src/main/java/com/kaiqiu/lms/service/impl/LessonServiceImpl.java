package com.kaiqiu.lms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaiqiu.lms.dao.LessonDAO;
import com.kaiqiu.lms.entity.Lesson;
import com.kaiqiu.lms.service.LessonService;

@Service
public class LessonServiceImpl implements LessonService {

	@Autowired
	private LessonDAO lessonDAO;
	
	
	@Override
	@Transactional
	public List<Lesson> getLessons() {
		
		return lessonDAO.getLessons();
	}


	@Override
	@Transactional
	public void saveLesson(Lesson theLesson) {
		
		lessonDAO.saveLesson(theLesson);
		
	}


	@Override
	@Transactional
	public Lesson getLesson(int theId) {
		
		return lessonDAO.getLesson(theId);
	}


	@Override
	@Transactional
	public void deleteLesson(int theId) {
		
		lessonDAO.deleteLesson(theId);
		
	}

}
