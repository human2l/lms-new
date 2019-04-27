package com.kaiqiu.lms.entity;

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
@Table(name="tutor")
public class Tutor {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
	@Column(name="mobile")
	private String mobile;
	@OneToMany(mappedBy = "tutor", cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH,
			CascadeType.REFRESH })
	private List<Lesson> lessons;
	
	public Tutor() {
		
	}

	public Tutor(String firstName, String lastName, String email, String password, String mobile) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	
	
	// add convenience methods for bi-directional relationship

	

		public void add(Lesson tempLesson) {

			if (lessons == null) {
				lessons = new ArrayList<>();
			}

			lessons.add(tempLesson);

			tempLesson.setTutor(this);
		}

		@Override
		public String toString() {
			return "Tutor [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
					+ ", password=" + password + ", mobile=" + mobile + "]";
		}
		
		
}
