package com.kaiqiu.lms.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaiqiu.lms.dao.TutorDAO;
import com.kaiqiu.lms.entity.Tutor;
import com.kaiqiu.lms.service.TutorService;

@Service
public class TutorServiceImpl implements TutorService {

	@Autowired
	private TutorDAO tutorDAO;
	
	
	@Override
	@Transactional
	public List<Tutor> getTutors() {
		
		return tutorDAO.getTutors();
	}


	@Override
	@Transactional
	public void saveTutor(Tutor theTutor) {
		
		tutorDAO.saveTutor(theTutor);
		
	}


	@Override
	@Transactional
	public Tutor getTutor(int theId) {
		
		return tutorDAO.getTutor(theId);
	}


	@Override
	@Transactional
	public void deleteTutor(int theId) {
		
		tutorDAO.deleteTutor(theId);
		
	}

}
