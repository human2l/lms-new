# LMS (Learning Management System)
This is a Learning Management System built for: 1. Handling students' course & lessons selection. 2. Handling tutors' manage their lessons. 3. Helping Administrator to deal with personnel management (including students and tutors) and to manage all data of courses and lessons.

Note:
* There used to be an old LMS System built with my teammates. Unfortunately, due to the dismiss of our team, we lost the code of the project.
* This is a current system I am working on. Not for commercial purpose. Not for uni assignment.  
* This system is built to demonstrate the techniques I've already learnt.  

* I built this system from scratch including setup all programming environment.  
* The back end code used to be built with Hibernate. Now it has been refactored, and the old code has been moved to backup directory.  
* After refactoring, the new lms system is built by Angular7, MySql and Spring Data Jpa with REST.  
* For now I have not develop functions for Admin. So all of the below features about admin does not work. I will update it in the future.


## ER Diagram
![Alt Text](/document/lms-new_ERD.jpg)

## Roles:
There are 3 roles in this system: admin, student and tutor.  
* Admin(available in the future): Manage all other users with role student and tutor.  
* Student: Manage course and lessons they has.   
* Tutor: Manage all the lessons they taught.  

## Feature:
### Dashboard:
* Student:   
Can view they selected course and lessons from course/lesson management page.
* Tutor:  
Can view all the lessons they are responsible for.
* Admin(available in the future):  
N/A

### Course Management:
*  Student:   
Can view all courses in LMS.  
Can select one of the courses to save as his/her course.  
Note: Student can only select one course. When student select other course, lessons of previous course will be removed from their lesson-list.  
* Tutor:  
Can view all courses in LMS.  
* Admin(available in the future):N/A

### Lesson Management:  
*  Student:    
    View all of the lessons belong to their course.  
    View all of the lessons they have chosen.  
    Select one or more lessons to their lesson-list for studying.  
    Remove one or more lessons from their lesson-list.  
*  Tutor:    
    View all of the lessons they teach.  
    Create new lessons to a course.  
    Delete one or more of lessons he teach.  
    Modify one or more of lessons he teach.  
*  Admin:   
N/A  
    ~~View all of the lessons.~~  
    ~~Create one new lesson and assign to a tutor.~~  
    ~~Delete one or more lessons.~~  
    ~~Modify one or more lessons.~~  

### Personnel Management: N/A 
Admin function, undeveloped for now.

### Profile Management:  
All kinds of users (student, tutor) can view => edit => save their profile. They can reset their password.

### Authentication:  
* Login form: All user should login before access to the management system.
* Registration form: New user can submit their details to sign up.

## Getting start:  
* Since this is not a deployed version. You have to have one java ide (prefer Eclipse) installed.

### Database:
* Using queries in directory "lms-new/MySQL" database setup code to generate tables and fake data.
* MySQL version: 8.0+

### Back End: 
* Download or clone all the files in "lms-new/Learning Management System/lms"
* Open it on Eclipse, and run.
* The back-end code is in lms directory, run it on Eclipse. The server will choose 8080 as it's port.

### Front End:
Way1: I've deployed it by using github pages, front-end page can be view directly through https://human2l.github.io  
Note: To login to the system. Back-end service and MySQL database should be working in advance.

Way2(if you wanna see how the code exactly working): 
* Download the front-end file to local
* The front-end code is in "lms-new/Learning Management System/lms-client/lms" directory.
* Make sure npm and Angular CLI installed.
```
cd lms
```
then
```
ng serve
```
* The front-end would choose 4200 as it's port.
* open your browser, enter url: http://localhost:4200 It will directly heading to http://localhost:4200/auth/login page.

## Techniques used:
### Front End:
* Using Angular 8 framework
* Single-page web app
* Using bootstrap + ngx-bootstrap for style

### Back End:
* Springboot
* Restful api
* Spring Data JPA
* Spring Security
* Spring WebMVC

### Database:
* MySQL 8

### Tools:
* Eclipse
* Visual Studio Code
* Chrome
* MySQLworkbench
* Postman
* Github
* npm

## TODOs:

### System:
* Add function to user role: Admin
* Register form validation

### Front End:
* Forgot password page
* Use JWT to store "session" in local storage
* Fix bug: collapsed navbar could not shown the children dropdown list correctly. Should not use ngx-bootstrap's drop down list.

### Back End:
* Server side validation
* csrf
* cors
* end-point(path) security



