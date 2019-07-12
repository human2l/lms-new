# lms-new
The old lms is in chaos. I decided to create a new repo to rebuild it.

There used to be an old lms system build with AngularJs, MySql and Spring REST.

After refactoring, the new lms system is built by Angular7, MySql and Spring Data Jpa with REST.

Note: For now I have not develop functions for Admin. So all of the below features about admin does not work. I will update it in the future.


## ER Diagram
![Alt Text](/document/lms-new_ERD.jpg)

## Roles:
There are 3 roles in this system: admin, student and tutor.  
Admin: Manage all other users with role student and tutor.  
Student: Manage course and lessons he/she has.   
Tutor: Manage all the lessons he/she taught.  

## Feature:
### Dashboard:
* Student: 
Can view his/her selected course and lessons from course/lesson management page.

### Course Management:
*  Student: 
Can view all courses in LMS.
Can select one of the courses to save as his/her course.
* Tutor:
Can view all courses in LMS.

### Lesson Management:  
*  Student:  
    View all of the lessons under his/her course.  
    View all of the lessons he/she have chosen.  
    Choose one or more lessons as their lessons about to study.  
    Remove one or more lessons from their lesson list.  
*  Tutor:  
    View all of the lessons he teach.  
    Create new lesson under one specific course.  
    Delete one or more of lessons he teach.  
    Modify one or more of lessons he teach.  
*  Admin:  
    View all of the lessons.  
    Create one new lesson and assign to a tutor.  
    Delete one or more lessons.  
    Modify one or more lessons.  

### Personnel Management:  
Admin function, undeveloped for now.

### Profile Management:  
All kinds of users (student, tutor) can view => edit => save their profile. They can reset their password.

### Authentication:  
* Login form: All user should login before access to the management system.
* Registration form: New user can submit their details to sign up.

## Getting start:  
* Since this is not a deployed version. You have to have one java ide (prefer Eclipse) installed.
* Download all the files to local. 
* The back-end code is in lms directory, run it on Eclipse. The server will choose 8080 as it's port.
* The front-end code is in lms-client/lms directory. 
```
cd lms
```
then
```
ng serve
```
* The front-end would choose 4200 as it's port.
* open your browser, enter url: http://localhost:4200 It will directly heading to http://localhost:4200/auth/login page.

## Techniques:

## TODO:

### System:
* Add function to user role: Admin
* Register form validation

### Front End:
* Forgot password page

### Back End:
* Server side validation
* csrf
* cors
* end point security

