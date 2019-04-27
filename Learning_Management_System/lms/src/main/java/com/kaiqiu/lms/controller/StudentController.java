package com.kaiqiu.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kaiqiu.lms.dao.StudentDAO;
import com.kaiqiu.lms.entity.Student;
import com.kaiqiu.lms.service.StudentService;

@Controller
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/list")
	public String listCustomers(Model theModel) {
		
		List<Student> theStudents = studentService.getStudents();
		
		theModel.addAttribute("students", theStudents);
		
		return "list-students";	
	}
}
