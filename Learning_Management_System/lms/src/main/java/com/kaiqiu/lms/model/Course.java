package com.kaiqiu.lms.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="tittle")
	private String tittle;
	@Column(name="description")
	private String description;
	
	@OneToMany(mappedBy="course",
			   cascade= {CascadeType.PERSIST, CascadeType.MERGE,
						 CascadeType.DETACH, CascadeType.REFRESH})
	private List<Student> students;
	
	public Course() {
		
	}
	
	
	public Course(String tittle, String description) {
		this.tittle = tittle;
		this.description = description;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getTittle() {
		return tittle;
	}


	public void setTittle(String tittle) {
		this.tittle = tittle;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}

	
	public List<Student> getStudents() {
		return students;
	}


	public void setStudents(List<Student> students) {
		this.students = students;
	}


	@Override
	public String toString() {
		return "Course [id=" + id + ", tittle=" + tittle + ", description=" + description + "]";
	}
	
	// add convenience methods for bi-directional relationship
	
		public void add(Student tempStudent) {
			
			if (students == null) {
				students = new ArrayList<>();
			}
			
			students.add(tempStudent);
			
			tempStudent.setCourse(this);
		}
}
