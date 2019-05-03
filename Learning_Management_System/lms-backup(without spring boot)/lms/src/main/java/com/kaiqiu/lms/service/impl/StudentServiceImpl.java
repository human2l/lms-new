package com.kaiqiu.lms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaiqiu.lms.dao.StudentDAO;
import com.kaiqiu.lms.entity.Student;
import com.kaiqiu.lms.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentDAO studentDAO;
	
	
	@Override
	@Transactional
	public List<Student> getStudents() {
		
		return studentDAO.getStudents();
	}


	@Override
	@Transactional
	public void saveStudent(Student theStudent) {
		
		studentDAO.saveStudent(theStudent);
		
	}


	@Override
	@Transactional
	public Student getStudent(int theId) {
		
		return studentDAO.getStudent(theId);
	}


	@Override
	@Transactional
	public void deleteStudent(int theId) {
		
		studentDAO.deleteStudent(theId);
		
	}

}
