# lms-new
The old lms is in chaos. I decided to create a new repo to rebuild it.

There used to be an old lms system build with AngularJs, MySql and Spring REST.

After refactoring, the new lms system is built by Angular7, MySql and Spring Data Jpa with REST.


## Roles:
There are 3 roles in this system: admin, student and tutor.  
Admin: Manage all other users with role student and tutor.  
Student: Manage course and lessons he/she has.   
Tutor: Manage all the lessons he/she taught.  

## Dashboard:
* Student: 
Can view his/her selected course and lessons from course/lesson management page.

## Course Management:
*  Student: 
Can view all courses in LMS.
Can select one of the courses to save as his/her course.
* Tutor:

  

## Lesson Management:  
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

## Personnel Management:  

## Profile Management:  
All kinds of users (student, tutor and admin) can view => edit => save their profile. They can reset their password.

## Authentication:  
* Login form: All user should login before access to the management system.
* Registration form: New user can submit their details to sign up.

