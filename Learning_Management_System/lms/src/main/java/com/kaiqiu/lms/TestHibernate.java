package com.kaiqiu.lms;
import java.text.ParseException;
import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.kaiqiu.lms.entity.Admin;
import com.kaiqiu.lms.entity.Course;
import com.kaiqiu.lms.entity.Lesson;
import com.kaiqiu.lms.entity.Student;
import com.kaiqiu.lms.entity.Tutor;
import com.kaiqiu.lms.utils.DateUtils;;

public class TestHibernate {

	public static void main(String[] args) {
		
		SessionFactory factory = new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Admin.class)
				.addAnnotatedClass(Course.class)
				.addAnnotatedClass(Student.class)
				.addAnnotatedClass(Tutor.class)
				.addAnnotatedClass(Lesson.class)
				.buildSessionFactory();
		
		
		Session session = factory.getCurrentSession();
		try {

			
			session.beginTransaction();
			
			//test functions here
			
			//create data
//			createData(session);
//			createAdvancedData(session);
			Student a = session.get(Student.class, 1);
			System.out.println(a);
			
			
			
			
			
			
			
			
			
			
			
			
			session.getTransaction().commit();
		}catch(Exception e) {
			e.printStackTrace();
		}
		finally {
			session.close();
			factory.close();
		}
		
	}

	private static void createAdvancedData(Session session) {
		Student student1 = session.get(Student.class, 1);
		Lesson lesson1 = session.get(Lesson.class, 1);
		lesson1.addStudent(student1);
	}

	private static void createData(Session session) throws ParseException {
		Admin admin2 = new Admin("a","b","c","d");
		session.save(admin2);
		
		Course course1 = new Course("Computer Science in Information Technology","for IT students");
		Course course2 = new Course("Computer Science in User Interface Design","for UI design students");
		session.save(course1);
		session.save(course2);
		
		
		Student student1 = new Student("Michael","Jackson","MJ@mj.com","mj","000001");
		Student student2 = new Student("Donald","Trump","DT@dt.com","dt","000002");
		Student student3 = new Student("Jackie","Chan","JC@jc.com","jc","000003");
		

		session.save(student1);
		session.save(student2);
		session.save(student3);
		
		Date lessonStartDate = DateUtils.parseDate("01/01/2019");
		Date lessonEndDate = DateUtils.parseDate("01/04/2019");
		Lesson lesson1 = new Lesson("Programming Fundamental", "essential course for programming",lessonStartDate,lessonEndDate);
		Lesson lesson2 = new Lesson("Database Fundamental", "essential course for database programming",lessonStartDate,lessonEndDate);
		session.save(lesson1);
		session.save(lesson2);
	}
	
//	student 3:1 course done
//	course 1:3 lesson done
//	lesson 3:1 tutor done
//	student 1:3 lesson_student done
//	lesson_student 3:1 lesson done
	
	

	
	
	

}
