package com.kaiqiu.lms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaiqiu.lms.dao.CourseDAO;
import com.kaiqiu.lms.entity.Course;
import com.kaiqiu.lms.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDAO courseDAO;
	
	
	@Override
	@Transactional
	public List<Course> getCourses() {
		
		return courseDAO.getCourses();
	}


	@Override
	@Transactional
	public void saveCourse(Course theCourse) {
		
		courseDAO.saveCourse(theCourse);
		
	}


	@Override
	@Transactional
	public Course getCourse(int theId) {
		
		return courseDAO.getCourse(theId);
	}


	@Override
	@Transactional
	public void deleteCourse(int theId) {
		
		courseDAO.deleteCourse(theId);
		
	}

}
