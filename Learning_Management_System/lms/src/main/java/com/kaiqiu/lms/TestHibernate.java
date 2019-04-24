package com.kaiqiu.lms;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.kaiqiu.lms.model.Admin;
import com.kaiqiu.lms.model.Course;
import com.kaiqiu.lms.model.Student;
import com.kaiqiu.lms.model.Tutor;;

public class TestHibernate {

	public static void main(String[] args) {
		
		SessionFactory factory = new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Admin.class)
				.addAnnotatedClass(Course.class)
				.addAnnotatedClass(Student.class)
				.addAnnotatedClass(Tutor.class)
				.buildSessionFactory();
		
		
		try {
			Session session = factory.getCurrentSession();
			
			session.beginTransaction();
			
			//test functions here
//			Admin admin2 = new Admin("a","b","c","d");
			
//			Course course1 = new Course("Programming Fundamental","essential course for programming");
//			Course course2 = new Course("Database Fundamental","essential course for database programming");
//			
//			
//			Student student1 = new Student("Michael","Jackson","MJ@mj.com","mj","000001");
//			Student student2 = new Student("Donald","Trump","DT@dt.com","dt","000002");
//			Student student3 = new Student("Jackie","Chan","JC@jc.com","jc","000003");
			
//			session.save(admin2);
//			session.save(course1);
//			session.save(course2);
//			session.save(student1);
//			session.save(student2);
//			session.save(student3);
			
			
			
			
			
			
			
			
			
			session.getTransaction().commit();
		}
		finally {
			factory.close();
		}
		
	}
	

}
