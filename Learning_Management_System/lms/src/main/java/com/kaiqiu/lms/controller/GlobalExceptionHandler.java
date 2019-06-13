package com.kaiqiu.lms.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler
	public ResponseEntity<Map<String, String>> notFoundHandler(ResourceNotFoundException e) {
		 Map<String, String> response = new HashMap<String, String>();
	        response.put("message", "Not Found");
	        return new ResponseEntity<Map<String, String>>(response, HttpStatus.NOT_FOUND);
	}
}
