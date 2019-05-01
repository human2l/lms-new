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

import com.kaiqiu.lms.entity.Student;
import com.kaiqiu.lms.service.StudentService;

@RestController
@RequestMapping("/api")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	// GET /students - get all students
	@GetMapping("/students")
	public List<Student> getStudents(){
		
		return studentService.getStudents();
		
	}
	
	// GET /students/{studentId} get one student by ID
	@GetMapping("/students/{studentId}")
	public Student getStudent(@PathVariable int studentId) {
		//TODO: check studentId valid
//		Student theStudent = studentService.getStudent(studentId);
//		if(theStudent == null) {
//			throw new StudentNotFoundException("Student id not found - " + studentId);
//		}
		Student theStudent = studentService.getStudent(studentId);
		return theStudent;
	}
	
	// add mapping for POST /students - add one new student
	@PostMapping("/students")
	public Student addStudent(@RequestBody Student theStudent) {
		
		// set id to 0 will force hibernate to save as a new item instead of update
		theStudent.setId(0);
		
		studentService.saveStudent(theStudent);
		
		return theStudent;
	}
	
	// PUT /students update existing student
	@PutMapping("/students")
	public Student updateStudent(@RequestBody Student theStudent) {
		studentService.saveStudent(theStudent);
		return theStudent;
	}
	
	// DELETE /students/{studentId} delete one student
	@DeleteMapping("/students/{studentId}")
	public String deleteStudent(@PathVariable int studentId) {
		//TODO: check student exist
//		Student theStudent = studentService.getStudent(studentId);
//		if(theStudent == null) {
//			throw new StudentNotFoundException("Student id not found - " + studentId);
//		}
		studentService.deleteStudent(studentId);
		return "Student with id: " + studentId + " deleted.";
	}
}
