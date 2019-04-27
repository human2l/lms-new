package com.kaiqiu.lms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaiqiu.lms.dao.StudentDAO;
import com.kaiqiu.lms.entity.Student;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentDAO studentDAO;
	
	
	@Override
	@Transactional
	public List<Student> getStudents() {
		
		return studentDAO.getStudents();
	}

}
