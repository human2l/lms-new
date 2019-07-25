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

import com.kaiqiu.lms.entity.Lesson;
import com.kaiqiu.lms.service.LessonService;

@RestController
@RequestMapping("/lessons")
public class LessonController {
	
	@Autowired
	private LessonService lessonService;
	
	// GET /lessons - get all lessons
	@GetMapping
	public List<Lesson> getLessons(){
		
		return lessonService.getLessons();
		
	}
	
	// GET /lessons/{lessonId} get one lesson by ID
	@GetMapping("/{lessonId}")
	public Lesson getLesson(@PathVariable int lessonId) {
		//TODO: check lessonId valid
//		Lesson theLesson = lessonService.getLesson(lessonId);
//		if(theLesson == null) {
//			throw new LessonNotFoundException("Lesson id not found - " + lessonId);
//		}
		Lesson theLesson = lessonService.getLesson(lessonId);
		return theLesson;
	}
	
	// add mapping for POST /lessons - add one new lesson
	@PostMapping
	public Lesson addLesson(@RequestBody Lesson theLesson) {
		
		// set id to 0 will force hibernate to save as a new item instead of update
		theLesson.setId(0);
		
		lessonService.saveLesson(theLesson);
		
		return theLesson;
	}
	
	// PUT /lessons update existing lesson
	@PutMapping
	public Lesson updateLesson(@RequestBody Lesson theLesson) {
		lessonService.saveLesson(theLesson);
		return theLesson;
	}
	
	// DELETE /lessons/{lessonId} delete one lesson
	@DeleteMapping("/{lessonId}")
	public String deleteLesson(@PathVariable int lessonId) {
		//TODO: check lesson exist
//		Lesson theLesson = lessonService.getLesson(lessonId);
//		if(theLesson == null) {
//			throw new LessonNotFoundException("Lesson id not found - " + lessonId);
//		}
		lessonService.deleteLesson(lessonId);
		return "Lesson with id: " + lessonId + " deleted.";
	}
}
