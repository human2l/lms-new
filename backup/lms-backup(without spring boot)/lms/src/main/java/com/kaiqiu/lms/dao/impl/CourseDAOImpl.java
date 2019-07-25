package com.kaiqiu.lms.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kaiqiu.lms.dao.CourseDAO;
import com.kaiqiu.lms.entity.Course;

@Repository
public class CourseDAOImpl implements CourseDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Course> getCourses() {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query<Course> theQuery = 
				currentSession.createQuery("from Course", Course.class);
		
		List<Course> courses = theQuery.getResultList();
		
		return courses;
	}

	@Override
	public void saveCourse(Course theCourse) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		currentSession.saveOrUpdate(theCourse);
		
	}

	@Override
	public Course getCourse(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Course theCourse = currentSession.get(Course.class, theId);
		
		return theCourse;
	}

	@Override
	public void deleteCourse(int theId) {
		
		Session currentSession = sessionFactory.getCurrentSession();
		
		Query theQuery = currentSession.createQuery("delete from Course where id=:theCourseId");
		
		theQuery.setParameter("theCourseId", theId);
		
		theQuery.executeUpdate();
		
	}

}
