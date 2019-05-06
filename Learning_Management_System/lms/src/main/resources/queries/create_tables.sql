DROP SCHEMA IF EXISTS `lms_kaiqiu`;

CREATE SCHEMA `lms_kaiqiu`;

use `lms_kaiqiu`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `tutor_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ADMIN_idx` (`admin_id`),
  CONSTRAINT `FK_ADMIN_U` FOREIGN KEY (`admin_id`) 
  REFERENCES `admin` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  KEY `FK_TUTOR_idx` (`tutor_id`),
  CONSTRAINT `FK_TUTOR_U` FOREIGN KEY (`tutor_id`) 
  REFERENCES `tutor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  KEY `FK_STUDENT_idx` (`student_id`),
  CONSTRAINT `FK_STUDENT_U` FOREIGN KEY (`student_id`) 
  REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USER_idx` (`user_id`),
  CONSTRAINT `FK_USER_A` FOREIGN KEY (`user_id`) 
  REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `tutor`;

CREATE TABLE `tutor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USER_idx` (`user_id`),
  CONSTRAINT `FK_USER_T` FOREIGN KEY (`user_id`) 
  REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_COURSE_idx` (`course_id`),
  CONSTRAINT `FK_COURSE_S` FOREIGN KEY (`course_id`) 
  REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  KEY `FK_USER_idx` (`user_id`),
  CONSTRAINT `FK_USER_S` FOREIGN KEY (`user_id`) 
  REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `course`;

CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tittle` varchar(45) DEFAULT NULL,
  `description` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `lesson`;

CREATE TABLE `lesson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tittle` varchar(45) DEFAULT NULL,
  `description` varchar(128) DEFAULT NULL,
  `start_date` DATE DEFAULT NULL,
  `end_date` DATE DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `tutor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_COURSE_idx` (`course_id`),
  CONSTRAINT `FK_COURSE_L` FOREIGN KEY (`course_id`) 
  REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  KEY `FK_TUTOR_idx` (`tutor_id`),
  CONSTRAINT `FK_TUTOR` FOREIGN KEY (`tutor_id`) 
  REFERENCES `tutor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `lesson_student`;

CREATE TABLE `lesson_student` (
  `lesson_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  
  PRIMARY KEY (`lesson_id`,`student_id`),
  
  KEY `FK_STUDENT_idx` (`student_id`),
  
  CONSTRAINT `FK_LESSON_05` FOREIGN KEY (`lesson_id`) 
  REFERENCES `lesson` (`id`) 
  ON DELETE NO ACTION ON UPDATE NO ACTION,
  
  CONSTRAINT `FK_STUDENT` FOREIGN KEY (`student_id`) 
  REFERENCES `student` (`id`) 
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  
  PRIMARY KEY (`user_id`,`role_id`),
  
  KEY `FK_ROLE_idx` (`role_id`),
  
  CONSTRAINT `FK_USER` FOREIGN KEY (`user_id`) 
  REFERENCES `user` (`id`) 
  ON DELETE NO ACTION ON UPDATE NO ACTION,
  
  CONSTRAINT `FK_ROLE` FOREIGN KEY (`role_id`) 
  REFERENCES `role` (`id`) 
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;

