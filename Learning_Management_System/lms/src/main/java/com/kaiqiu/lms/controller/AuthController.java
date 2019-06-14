package com.kaiqiu.lms.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kaiqiu.lms.dao.AdminRepository;
import com.kaiqiu.lms.dao.RoleRepository;
import com.kaiqiu.lms.dao.StudentRepository;
import com.kaiqiu.lms.dao.TutorRepository;
import com.kaiqiu.lms.dao.UserRepository;
import com.kaiqiu.lms.entity.Admin;
import com.kaiqiu.lms.entity.Role;
import com.kaiqiu.lms.entity.Student;
import com.kaiqiu.lms.entity.Tutor;
import com.kaiqiu.lms.entity.User;

@RestController
public class AuthController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private TutorRepository tutorRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
		
	@PostMapping(value="/registration")
	@ResponseBody
	public Object registration(@RequestBody User newUser, @RequestParam String role) {
		newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
		Set<Role> roles = new HashSet();
		//TODO: return error page
		Role foundRole = roleRepository.findByRole(role); 
		if(foundRole == null) {
			return null;
		}
		//TODO: check already exist
		roles.add(foundRole);
		
		newUser.setRoles(roles);
		newUser.setActive(1);
		switch(role) {
		case "Admin":
			Admin newAdmin = new Admin();
			newAdmin.setUser(newUser);
			return adminRepository.save(newAdmin);
		case "Tutor":
			Tutor newTutor = new Tutor();
			newTutor.setUser(newUser);
			return tutorRepository.save(newTutor);
		case "Student":
			Student newStudent = new Student();		
			newStudent.setUser(newUser);
			return studentRepository.save(newStudent);
		}
		return null;
		
	}
	
	@PostMapping(value="/login")
	@ResponseBody
	public User login(@RequestBody User loginUser) {
		User foundUser = userRepository.findByEmail(loginUser.getEmail());
		if(foundUser!=null) {
			if(bCryptPasswordEncoder.matches(loginUser.getPassword(), foundUser.getPassword())){
				return foundUser;
			}else {
				return null;
			}
		}else {
			return null;
			//TODO: user does not exist
		}
	}
}
