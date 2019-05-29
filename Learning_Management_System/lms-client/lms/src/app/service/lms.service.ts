import { Course } from "../shared/models/course.model";
import { Lesson } from "../shared/models/lesson.model";

export class LmsService {
  private currentRole: string = null;
  private currentCourse: Course = null;
  private currentLessons: Lesson[] = [];
  private allCourses: Course[] = [];
  private allLessons: Lesson[] = [];
  private currentUser: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
  };

  constructor() {
    let lesson1: Lesson = {
      id: 1,
      title: "title1",
      description: "des1",
      start_date: "sd1",
      end_date: "ed1"
    };
    let lesson2: Lesson = {
      id: 2,
      title: "title2",
      description: "des2",
      start_date: "sd2",
      end_date: "ed2"
    };
    let lesson3: Lesson = {
      id: 3,
      title: "title3",
      description: "des3",
      start_date: "sd3",
      end_date: "ed3"
    };
    this.allLessons.push(lesson1, lesson2, lesson3);
    this.currentLessons.push(lesson2, lesson3);

    let course1: Course = { id: 1, title: "title1", description: "des1" };
    let course2: Course = { id: 2, title: "title2", description: "des2" };
    let course3: Course = { id: 3, title: "title3", description: "des3" };
    let course4: Course = { id: 4, title: "title4", description: "des4" };
    this.allCourses.push(course1, course2, course3, course4);

    this.currentCourse = course1;

    this.currentUser = {
      id: 111,
      firstName: "aaa",
      lastName: "bbb",
      email: "a@a.com",
      mobile: "123123"
    };
  }

  //TODO: change password method

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentRole() {
    if (this.currentRole === null) {
      this.currentRole = "student";
    }
    return this.currentRole;
  }

  getCurrentCourse() {
    return this.currentCourse;
  }

  setCurrentCourse(course: Course) {
    this.currentCourse = course;
  }

  getAllCourses() {
    return this.allCourses;
  }

  getCurrentLessons() {
    return this.currentLessons;
  }

  getAllLessons() {
    return this.allLessons;
  }

//   updateUser(userProfile: {firstName:string,lastName:string,email:string,mobile:string}){
//     this.currentUser.firstName = userProfile.firstName;
//     this.currentUser.lastName = userProfile.lastName;
//     this.currentUser.email = userProfile.email;
//     this.currentUser.mobile = userProfile.mobile;
//     //TODO: http
//   }
}
