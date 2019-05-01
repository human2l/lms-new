package com.kaiqiu.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kaiqiu.lms.entity.Course;
import com.kaiqiu.lms.service.CourseService;

@RestController
@RequestMapping("/courses")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	// GET /courses - get all courses
	@GetMapping
	public List<Course> getCourses(){
		
		return courseService.getCourses();
		
	}
	
	// GET /courses/{courseId} get one course by ID
	@GetMapping("/{courseId}")
	public Course getCourse(@PathVariable int courseId) {
		//TODO: check courseId valid
//		Course theCourse = courseService.getCourse(courseId);
//		if(theCourse == null) {
//			throw new CourseNotFoundException("Course id not found - " + courseId);
//		}
		Course theCourse = courseService.getCourse(courseId);
		return theCourse;
	}
	
	// add mapping for POST /courses - add one new course
	@PostMapping
	public Course addCourse(@RequestBody Course theCourse) {
		
		// set id to 0 will force hibernate to save as a new item instead of update
		theCourse.setId(0);
		
		courseService.saveCourse(theCourse);
		
		return theCourse;
	}
	
	// PUT /courses update existing course
	@PutMapping
	public Course updateCourse(@RequestBody Course theCourse) {
		courseService.saveCourse(theCourse);
		return theCourse;
	}
	
	// DELETE /courses/{courseId} delete one course
	@DeleteMapping("/{courseId}")
	public String deleteCourse(@PathVariable int courseId) {
		//TODO: check course exist
//		Course theCourse = courseService.getCourse(courseId);
//		if(theCourse == null) {
//			throw new CourseNotFoundException("Course id not found - " + courseId);
//		}
		courseService.deleteCourse(courseId);
		return "Course with id: " + courseId + " deleted.";
	}
}
