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

import com.kaiqiu.lms.entity.Tutor;
import com.kaiqiu.lms.service.TutorService;

@RestController
@RequestMapping("/tutors")
public class TutorController {
	
	@Autowired
	private TutorService tutorService;
	
	// GET /tutors - get all tutors
	@GetMapping
	public List<Tutor> getTutors(){
		
		return tutorService.getTutors();
		
	}
	
	// GET /tutors/{tutorId} get one tutor by ID
	@GetMapping("/{tutorId}")
	public Tutor getTutor(@PathVariable int tutorId) {
		//TODO: check tutorId valid
//		Tutor theTutor = tutorService.getTutor(tutorId);
//		if(theTutor == null) {
//			throw new TutorNotFoundException("Tutor id not found - " + tutorId);
//		}
		Tutor theTutor = tutorService.getTutor(tutorId);
		return theTutor;
	}
	
	// add mapping for POST /tutors - add one new tutor
	@PostMapping
	public Tutor addTutor(@RequestBody Tutor theTutor) {
		
		// set id to 0 will force hibernate to save as a new item instead of update
		theTutor.setId(0);
		
		tutorService.saveTutor(theTutor);
		
		return theTutor;
	}
	
	// PUT /tutors update existing tutor
	@PutMapping
	public Tutor updateTutor(@RequestBody Tutor theTutor) {
		tutorService.saveTutor(theTutor);
		return theTutor;
	}
	
	// DELETE /tutors/{tutorId} delete one tutor
	@DeleteMapping("/{tutorId}")
	public String deleteTutor(@PathVariable int tutorId) {
		//TODO: check tutor exist
//		Tutor theTutor = tutorService.getTutor(tutorId);
//		if(theTutor == null) {
//			throw new TutorNotFoundException("Tutor id not found - " + tutorId);
//		}
		tutorService.deleteTutor(tutorId);
		return "Tutor with id: " + tutorId + " deleted.";
	}
}
