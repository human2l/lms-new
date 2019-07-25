package com.kaiqiu.lms.dao;

import java.util.List;

import com.kaiqiu.lms.entity.Course;

public interface CourseDAO {

	public List<Course> getCourses();

	public void saveCourse(Course theCourse);

	public Course getCourse(int theId);

	public void deleteCourse(int theId);
}
