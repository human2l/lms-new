package com.kaiqiu.lms.service;

import java.util.List;

import com.kaiqiu.lms.entity.Tutor;

public interface TutorService {

	public List<Tutor> getTutors();

	public void saveTutor(Tutor theTutor);

	public Tutor getTutor(int theId);

	public void deleteTutor(int theId);
}
