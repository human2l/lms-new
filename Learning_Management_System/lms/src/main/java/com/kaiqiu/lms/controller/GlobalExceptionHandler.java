package com.kaiqiu.lms.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.kaiqiu.lms.exception.PasswordIncorrectException;
import com.kaiqiu.lms.exception.ResourceAlreadyExistException;
import com.kaiqiu.lms.exception.UserNotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler
	public ResponseEntity<Map<String, String>> notFoundHandler(ResourceNotFoundException e) {
		Map<String, String> response = new HashMap<String, String>();
		response.put("message", "Not Found");
		return new ResponseEntity<Map<String, String>>(response, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler
	public ResponseEntity<Map<String, String>> userNotFoundHandler(UserNotFoundException e) {
		Map<String, String> response = new HashMap<String, String>();
		response.put("message", "User Not Found");
		return new ResponseEntity<Map<String, String>>(response, HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler
	public ResponseEntity<Map<String, String>> passwordIncorrectHandler(PasswordIncorrectException e) {
		Map<String, String> response = new HashMap<String, String>();
		response.put("message", "Password Incorrect");
		return new ResponseEntity<Map<String, String>>(response, HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler
	public ResponseEntity<Map<String, String>> resourceAlreadyExistHandler(ResourceAlreadyExistException e) {
		Map<String, String> response = new HashMap<String, String>();
		response.put("message", "Resource Already Exist");
		return new ResponseEntity<Map<String, String>>(response, HttpStatus.CONFLICT);
	}
}
