package com.kaiqiu.lms.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kaiqiu.lms.dao.LessonDAO;
import com.kaiqiu.lms.entity.Lesson;

@Repository
public class LessonDAOImpl implements LessonDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Lesson> getLessons() {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query<Lesson> theQuery = 
				currentSession.createQuery("from Lesson", Lesson.class);
		
		List<Lesson> lessons = theQuery.getResultList();
		
		return lessons;
	}

	@Override
	public void saveLesson(Lesson theLesson) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		currentSession.saveOrUpdate(theLesson);
		
	}

	@Override
	public Lesson getLesson(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Lesson theLesson = currentSession.get(Lesson.class, theId);
		
		return theLesson;
	}

	@Override
	public void deleteLesson(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query theQuery = currentSession.createQuery("delete from Lesson where id=:theLessonId");
		
		theQuery.setParameter("theLessonId", theId);
		
		theQuery.executeUpdate();
		
	}

}
