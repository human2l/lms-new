package com.kaiqiu.lms.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kaiqiu.lms.dao.TutorDAO;
import com.kaiqiu.lms.entity.Tutor;

@Repository
public class TutorDAOImpl implements TutorDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Tutor> getTutors() {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query<Tutor> theQuery = 
				currentSession.createQuery("from Tutor", Tutor.class);
		
		List<Tutor> tutors = theQuery.getResultList();
		
		return tutors;
	}

	@Override
	public void saveTutor(Tutor theTutor) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		currentSession.saveOrUpdate(theTutor);
		
	}

	@Override
	public Tutor getTutor(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Tutor theTutor = currentSession.get(Tutor.class, theId);
		
		return theTutor;
	}

	@Override
	public void deleteTutor(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query theQuery = currentSession.createQuery("delete from Tutor where id=:theTutorId");
		
		theQuery.setParameter("theTutorId", theId);
		
		theQuery.executeUpdate();
		
	}

}
