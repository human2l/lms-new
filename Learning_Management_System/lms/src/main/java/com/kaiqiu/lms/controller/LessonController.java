package com.kaiqiu.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kaiqiu.lms.dao.CourseRepository;
import com.kaiqiu.lms.dao.LessonRepository;
import com.kaiqiu.lms.dao.TutorRepository;
import com.kaiqiu.lms.entity.Course;
import com.kaiqiu.lms.entity.Lesson;
import com.kaiqiu.lms.entity.Tutor;

@RestController
public class LessonController {
	@Autowired
	private LessonRepository lessonRepository;
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private TutorRepository tutorRepository;

	@GetMapping(value = "/lms/lessons")
	@ResponseBody
	public List<Lesson> getAllLessons() {
		return lessonRepository.findAll();
	}

	@GetMapping(value = "/lms/lessons", params = { "role", "roleId" })
	@ResponseBody
	public List<Lesson> getCurrentLessons(@RequestParam String role, @RequestParam int roleId) {
		switch (role) {
		case "tutor":
			return this.lessonRepository.findByTutor_Id(roleId);
		case "student":
			return this.lessonRepository.findByStudents_Id(roleId);

		default:
			return null;
		}
	}

	@PostMapping(value = "/lms/lessons", params = { "courseTitle", "tutorId" })
	@ResponseBody
	public Lesson addOrUpdateLesson(@RequestBody Lesson submitLesson, @RequestParam String courseTitle,
			@RequestParam int tutorId) {
		Course foundCourse = courseRepository.findByTitle(courseTitle);
		Tutor foundTutor = tutorRepository.findById(tutorId);
		if (foundCourse == null || foundTutor == null) {
			throw new ResourceNotFoundException();
		}
		Lesson foundLesson = lessonRepository.findById(submitLesson.getId());
		if (foundLesson == null && submitLesson.getId() != 0) {
			throw new ResourceNotFoundException();
		}
		submitLesson.setCourse(foundCourse);
		submitLesson.setTutor(foundTutor);
		return lessonRepository.save(submitLesson);
	}
}
