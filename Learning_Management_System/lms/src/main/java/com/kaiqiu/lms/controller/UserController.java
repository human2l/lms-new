package com.kaiqiu.lms.controller;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kaiqiu.lms.dao.UserRepository;
import com.kaiqiu.lms.entity.User;

@RestController
public class UserController {
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping(value="/updateUser")
	@ResponseBody
	public User updateUser(@RequestBody User user, @RequestParam String email) {
		System.out.println(user);
		User foundUser = userRepository.findByEmail(email);
		if (foundUser == null) {
			throw new ResourceNotFoundException();
		}
		foundUser.setFirstName(user.getFirstName());
		foundUser.setLastName(user.getLastName());
		foundUser.setEmail(user.getEmail());
		foundUser.setMobile(user.getMobile());
		String userPassword = user.getPassword();
		if(userPassword != "" && !userPassword.equals(foundUser.getPassword()) ) {
			foundUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		}
		System.out.println(foundUser);
		return userRepository.save(foundUser);
		
	}
}
