package com.kaiqiu.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kaiqiu.lms.dao.LessonRepository;
import com.kaiqiu.lms.entity.Lesson;

@RestController
public class LessonController {
	@Autowired
	private LessonRepository lessonRepository;
	
	
	@GetMapping(value="/lms/lessons")
	@ResponseBody
	public List<Lesson> getAllLessons() {
		return lessonRepository.findAll();
	}
	
	@GetMapping(value="/lms/lessons",params = {"role","roleId"})
	@ResponseBody
	public List<Lesson> getCurrentLessons(@RequestParam String role, @RequestParam int roleId) {
		//TODO: admin
		switch (role) {
		case "tutor":
			return this.lessonRepository.findByTutor_Id(roleId);
		case "student":
			return this.lessonRepository.findByStudents_Id(roleId);

		default:
			return null;
		}
	}
}
