package com.kaiqiu.lms.service;

import java.util.List;

import com.kaiqiu.lms.entity.Course;

public interface CourseService {

	public List<Course> getCourses();

	public void saveCourse(Course theCourse);

	public Course getCourse(int theId);

	public void deleteCourse(int theId);
}
