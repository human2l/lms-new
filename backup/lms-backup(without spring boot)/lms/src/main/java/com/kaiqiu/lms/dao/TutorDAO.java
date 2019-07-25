package com.kaiqiu.lms.dao;

import java.util.List;

import com.kaiqiu.lms.entity.Tutor;

public interface TutorDAO {

	public List<Tutor> getTutors();

	public void saveTutor(Tutor theTutor);

	public Tutor getTutor(int theId);

	public void deleteTutor(int theId);
}
