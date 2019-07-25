DROP SCHEMA IF EXISTS `lms_kaiqiu`;

CREATE SCHEMA `lms_kaiqiu`;

use `lms_kaiqiu`;

SET FOREIGN_KEY_CHECKS = 0;

#
# TABLE STRUCTURE FOR: admin
#

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USER_idx` (`user_id`),
  CONSTRAINT `FK_USER_A` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

INSERT INTO `admin` (`id`, `user_id`) VALUES (1, 1);
INSERT INTO `admin` (`id`, `user_id`) VALUES (2, 4);
INSERT INTO `admin` (`id`, `user_id`) VALUES (3, 7);
INSERT INTO `admin` (`id`, `user_id`) VALUES (4, 10);


#
# TABLE STRUCTURE FOR: course
#

DROP TABLE IF EXISTS `course`;

CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

INSERT INTO `course` (`id`, `title`, `description`) VALUES (1, 'veniam', 'Occaecati mollitia aperiam rerum nobis fugiat nobis. Qui aut eos enim vero non. Voluptate sit nemo ea fugiat est.');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (2, 'velit', 'Consectetur nisi iure voluptatum. Nostrum nam labore commodi omnis voluptate beatae eaque. Vel amet ad quisquam illo.');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (3, 'dolores', 'Provident odit magni ullam itaque repudiandae ut et aperiam. Cupiditate qui placeat qui harum qui. Tempora ut odit laudantium bl');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (4, 'quidem', 'Sed velit est aut voluptatem hic a molestias. Distinctio vel sequi aut expedita ad architecto. Nulla saepe libero sapiente nesci');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (5, 'ad', 'Velit inventore error delectus modi quod nam. Incidunt voluptatem commodi pariatur sed laboriosam veritatis blanditiis. Quia sed');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (6, 'cupiditate', 'Libero quam perferendis magnam qui. Neque provident quis tempore ut ut. Facilis ea aut iure qui quidem. Et adipisci eum rerum qu');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (7, 'vel', 'Nobis est rem voluptatem et eum delectus minima repellat. Quae et eos incidunt sint quia. Incidunt nobis labore odio deleniti ma');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (8, 'et', 'Est adipisci harum voluptas sapiente. Voluptas iusto odio in rerum sequi omnis. Eaque officiis quibusdam sint at. Id nihil ullam');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (9, 'provident', 'Dolor ipsa fuga maiores soluta qui ut dolor. Ex in illum nemo unde totam molestias. Similique sed vero nostrum nobis qui et sint');
INSERT INTO `course` (`id`, `title`, `description`) VALUES (10, 'est', 'Quis eos magni deserunt et. Similique officiis doloribus quia alias rerum sed. Iusto veniam ut quia voluptatem vero unde volupta');


#
# TABLE STRUCTURE FOR: lesson
#

DROP TABLE IF EXISTS `lesson`;

CREATE TABLE `lesson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(128) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `tutor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_COURSE_idx` (`course_id`),
  KEY `FK_TUTOR_idx` (`tutor_id`),
  CONSTRAINT `FK_COURSE_L` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_TUTOR` FOREIGN KEY (`tutor_id`) REFERENCES `tutor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (1, 'Eaque aut eveniet veniam omnis tenetur vel nu', 'Et et porro id repellat. Rerum odio quas molestias cum repellendus officia fugiat. Quidem quia repudiandae rem corporis. Id quib', '1996-10-20', '1999-04-23', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (2, 'Et assumenda magni facilis alias molestias et', 'Quo voluptate accusantium culpa praesentium quia ratione consequatur. Quam quam consequatur aut ut. Vel fuga omnis illum modi in', '1988-01-05', '2019-05-04', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (3, 'Quae minus modi facere et beatae saepe et.', 'Officiis atque dolores facilis eum et enim laboriosam. Rerum dolorum laudantium repudiandae totam ut debitis. Fuga in porro est ', '1991-12-18', '1996-10-11', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (4, 'In sed neque facilis iusto officiis voluptas.', 'Sunt est in minus nisi a qui libero. Deleniti repudiandae dolorem autem consequatur eum. Quia excepturi ab enim eaque voluptatem', '2011-05-10', '2012-07-06', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (5, 'Ad ullam necessitatibus omnis neque ut dolore', 'Maiores unde ipsum et aliquam odit voluptates non. Et est laudantium reiciendis omnis molestiae. Quaerat molestiae hic totam dol', '1983-11-27', '2011-11-21', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (6, 'Tempora mollitia voluptatem ea distinctio est', 'Voluptatibus rerum nihil modi veniam. Voluptates et placeat omnis ullam quibusdam. Ducimus occaecati non vitae laudantium. Quia ', '2000-01-17', '2001-04-05', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (7, 'Ullam fugit alias eveniet beatae quod minus.', 'Consequatur fugit perferendis asperiores quos. Aut eos enim laboriosam dolorem molestiae ullam. Assumenda blanditiis est velit.', '1978-11-15', '1991-10-14', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (8, 'Et et aut sint pariatur.', 'Quia perferendis rerum exercitationem ut praesentium provident. Consequatur laudantium itaque quibusdam earum aut ea. Ut quos ab', '1985-04-18', '1998-10-07', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (9, 'Ratione dolor necessitatibus eligendi asperio', 'Voluptate magnam mollitia mollitia ut. Id quaerat quod eaque et non nobis sequi impedit. Qui qui reprehenderit cum aliquam verit', '1984-07-19', '2002-08-09', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (10, 'Nesciunt molestias non quod autem sit quos.', 'Corporis deserunt ipsa et ipsam rem ea. Ex optio ducimus eligendi rerum fugit sunt eius. Harum omnis dolorem reiciendis et assum', '1978-06-11', '1995-11-16', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (11, 'In debitis asperiores dolorem labore ut volup', 'Esse minus labore et et voluptas ratione. Doloremque eaque earum est voluptas perspiciatis ullam perspiciatis voluptatem. Et in ', '1995-10-03', '2005-10-02', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (12, 'Dolore aut occaecati et nobis harum autem dol', 'Nisi sed veritatis delectus non. Magni molestias placeat nulla quod saepe impedit magnam laboriosam. Soluta doloremque illum et.', '2012-07-01', '2013-12-04', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (13, 'Dolor assumenda qui error ut.', 'Possimus voluptatibus explicabo deserunt velit amet. Labore non nihil recusandae consequuntur ab voluptates. Voluptatem illum pe', '1980-04-12', '1999-10-05', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (14, 'Ipsam voluptatem et laboriosam corrupti repel', 'Repudiandae omnis neque et recusandae. Saepe at nisi voluptas cumque officia commodi molestias. Blanditiis similique recusandae ', '1981-09-26', '1995-01-11', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (15, 'Qui necessitatibus est consequuntur aliquam c', 'Ea ea ea quo nisi qui exercitationem. Autem illo animi aut consectetur ex cum labore. Similique quidem beatae architecto repudia', '2015-12-20', '2016-01-07', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (16, 'Quia ut quis pariatur est dolore.', 'Itaque occaecati libero magnam. Sit culpa et voluptatum ut error. Possimus hic iure nisi mollitia repellendus. Illo omnis cum si', '1975-08-16', '2012-11-17', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (17, 'Culpa maxime aperiam dolorem deserunt non vol', 'Ullam laboriosam vero illum. Voluptas vitae voluptatem rerum. Unde eius debitis ex sint officiis fugit necessitatibus. Quis nobi', '1985-06-04', '1994-07-23', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (18, 'Eius tenetur voluptas vitae atque.', 'Eius ut molestias magni. Similique ut voluptas repudiandae harum rerum ratione iure debitis. Perferendis ipsa porro rem in maior', '1989-05-01', '1990-05-19', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (19, 'Laudantium reprehenderit et vero quaerat illu', 'In debitis quis eligendi ab est sit ullam. Quibusdam excepturi quam possimus vero quibusdam ipsum sint quia. Sunt magnam sint qu', '1984-05-09', '1995-03-05', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (20, 'Dolores unde quos consequatur non sit tempore', 'Neque nostrum inventore sapiente neque. Nostrum soluta voluptatibus eius corporis. Molestias nam cumque et expedita molestiae et', '2015-05-25', '2016-08-09', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (21, 'Id velit voluptatum assumenda totam sit.', 'Incidunt ut quia molestiae porro non est. Ut error corporis aperiam odit aut molestias. Est et sed enim.', '1970-03-01', '1982-03-18', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (22, 'Doloribus corporis pariatur recusandae sit do', 'Eligendi aperiam dolor id. Non fugiat ea quasi doloremque incidunt expedita. Necessitatibus accusamus dolor aut magni aut volupt', '2004-10-15', '2005-06-15', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (23, 'Distinctio tempora consequatur id odit conseq', 'Occaecati laboriosam occaecati corrupti accusantium alias. Pariatur dolores quae delectus recusandae qui. Deserunt libero perfer', '2014-10-12', '2015-05-23', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (24, 'Consectetur mollitia laboriosam et quaerat om', 'Et et corrupti consequuntur autem enim. Quibusdam dicta veritatis enim incidunt autem. Dignissimos dicta quaerat a consequatur.', '2001-07-03', '2003-04-20', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (25, 'Rerum dicta aut eaque cupiditate ea.', 'Et delectus porro et unde voluptas necessitatibus cumque. Cum quia porro sed. Et maiores vel ipsam. Reprehenderit aliquam dolore', '2005-05-03', '2006-02-07', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (26, 'Facere voluptatem sit ipsam vero.', 'Assumenda dolor harum nemo est similique optio itaque. Consequatur asperiores modi non fugiat quia similique quis dolores. Aut n', '1989-08-05', '1990-04-04', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (27, 'Ut exercitationem aut porro culpa perferendis', 'Atque minus rem numquam numquam temporibus. Ipsam enim quos ut earum amet adipisci iste. Quo exercitationem sed autem temporibus', '1980-04-27', '1987-02-04', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (28, 'Sequi aut quia omnis totam.', 'Aperiam possimus sint sit. Hic enim dolores quam quae nisi laudantium. Dolores mollitia molestiae labore. Sed in consequuntur ne', '2010-08-07', '2011-03-04', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (29, 'Qui beatae esse beatae nam.', 'Voluptatibus in autem voluptas sed commodi occaecati. Soluta blanditiis qui et porro accusamus porro culpa optio. Corrupti odio ', '1987-06-24', '1995-11-20', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (30, 'Earum aspernatur nihil soluta totam.', 'Debitis assumenda illum autem ipsam autem fugiat error voluptas. Illo sed modi mollitia labore illum quasi aliquam. Illum accusa', '2004-05-23', '2010-09-28', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (31, 'Voluptas atque numquam quis dolore nemo exped', 'Laudantium dolore ducimus quis qui. Sunt aut minus est quae. Ex voluptatem eius et cum blanditiis et vitae. Excepturi vel offici', '1988-09-27', '1989-09-26', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (32, 'Ut ut nostrum et et numquam.', 'Animi tempora voluptatem neque molestiae pariatur est fugiat libero. Sit nesciunt aut perspiciatis eveniet ut. Distinctio doloru', '1995-07-25', '2015-10-13', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (33, 'Reiciendis voluptatem et eius.', 'Culpa magnam a molestiae in repudiandae. Aut aut est consequatur. Porro debitis tenetur odio doloremque. Aut sit qui aliquid dis', '2014-08-05', '2015-03-15', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (34, 'Sit in eius consequuntur vel voluptatem vero ', 'Sit ullam sunt dolores quis officiis quidem magni. Vel sit est omnis.', '1991-01-10', '1999-09-21', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (35, 'Ut beatae dolores pariatur et.', 'Dolorum asperiores fugit tempora maiores eaque dolore. Quae voluptatem voluptatibus omnis voluptate ratione.', '1999-11-23', '2010-07-04', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (36, 'Veritatis et id nostrum provident dolore.', 'In molestiae ad eum minus. Minima neque nam tenetur sed. Rem temporibus odio molestias magnam deleniti deleniti.', '1994-07-29', '1998-03-02', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (37, 'Possimus tempora quo ipsam.', 'Aspernatur ea id aut qui laboriosam vel adipisci voluptatum. Dolore ratione magnam sint libero rem. Harum autem qui quisquam des', '1993-08-12', '1997-10-05', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (38, 'Et enim dignissimos omnis accusamus tenetur u', 'Qui vero eum iste ea unde sed. Unde sapiente voluptatum consequatur eveniet facere. Harum nihil iure dolor voluptas quo ratione.', '1982-08-04', '1988-12-26', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (39, 'Quaerat iusto ad fugit voluptatem natus inven', 'Suscipit quisquam sequi beatae quis. Qui non voluptas aut quia repudiandae. Eum reiciendis saepe quia qui repellendus ut velit s', '2000-02-02', '2008-02-06', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (40, 'Occaecati natus officiis provident aliquam.', 'Dolores in velit occaecati minus perferendis est nulla adipisci. Animi id soluta quisquam animi est. Quam enim quidem eos assume', '1989-04-10', '1990-12-08', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (41, 'Alias placeat quasi vitae et officiis.', 'Explicabo et dolorem magnam. Optio quaerat sapiente asperiores praesentium. Et maxime expedita hic eaque. Est dolor eveniet quod', '1988-03-11', '1999-09-15', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (42, 'Sed nihil fugit deserunt molestiae odit tempo', 'Quasi voluptatibus qui ducimus nostrum. Sequi praesentium quasi iste. Vitae et distinctio consequatur qui libero maiores rem. As', '2013-11-08', '2016-12-10', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (43, 'Sapiente a et aut.', 'Amet voluptatibus praesentium facere et adipisci repellat accusantium. Voluptas qui esse non qui quia. Molestiae molestias conse', '2008-01-16', '2009-12-29', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (44, 'Quis ex illo in ex laborum.', 'Et aut vero aperiam accusantium ratione. Dolores animi at tenetur fugiat dolor.', '2006-01-24', '2008-12-16', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (45, 'Doloribus ullam qui aut officiis quis digniss', 'Consequuntur vitae totam aperiam aut. Aspernatur ut in ratione sapiente quaerat inventore perspiciatis. Dolor eaque aperiam dolo', '2010-07-14', '2011-12-22', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (46, 'Eos eligendi laborum rerum quisquam id.', 'Consequuntur earum harum cum voluptatem rerum quasi. Autem et mollitia velit dicta ut autem corporis.', '1985-07-15', '2006-05-06', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (47, 'Dolor sit consequatur eaque quidem quo est pr', 'Dolorum veritatis nostrum pariatur quisquam. Aut eligendi voluptatem ut. Molestiae soluta et dolorem.', '1996-02-09', '1997-04-21', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (48, 'Ratione soluta non dolores odit ut.', 'Recusandae et voluptas quibusdam aperiam quia placeat dolorum. Placeat deleniti qui harum ut ut ea. Cumque et quo quia consequat', '1976-12-24', '1979-09-01', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (49, 'Non quos reprehenderit aut et distinctio volu', 'Ut quia autem velit aut aspernatur. Eum assumenda magni quis libero. Ipsum consequatur pariatur aut debitis.', '2017-08-04', '2018-12-29', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (50, 'Deleniti inventore sit qui deserunt accusanti', 'Nulla quidem aut dolore quaerat possimus repudiandae. Aliquid veniam doloremque amet. Est tempora eos consectetur et. Praesentiu', '1993-05-27', '1998-06-05', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (51, 'Consequatur voluptatem eius voluptatibus nost', 'Libero adipisci officiis blanditiis est veritatis. Omnis enim ab veniam cum deserunt iure. Aut et ut ex voluptatibus molestiae o', '1988-08-25', '1989-06-07', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (52, 'Reiciendis iusto ab illum dolor nesciunt.', 'Quos suscipit eveniet autem quibusdam repudiandae soluta. Ipsa ad reiciendis aperiam omnis aliquam dignissimos et.', '1971-07-12', '2016-10-04', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (53, 'Et distinctio nisi dolore quaerat aut quaerat', 'Deserunt labore inventore quo minima molestiae. Repellendus velit soluta nihil et vero commodi. Necessitatibus laborum rerum qui', '1992-09-16', '2001-04-12', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (54, 'Quasi maiores et et sed.', 'Possimus enim deleniti non. Et veritatis quo laboriosam commodi beatae.', '1998-07-22', '2008-01-31', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (55, 'Maxime omnis molestiae quia voluptatum rerum ', 'Sunt nostrum quis enim et. Cupiditate autem ipsa qui magni sit enim dolorem. Maxime et temporibus rerum enim. Dicta praesentium ', '2004-03-01', '2010-10-14', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (56, 'Dignissimos in ut reiciendis quasi vitae.', 'At est et et consequatur doloribus. Porro sit adipisci qui velit ipsam dolorum sunt.', '2004-10-29', '2015-12-28', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (57, 'Hic in voluptatibus sint eaque officiis id er', 'Atque pariatur aperiam illum. Voluptatem adipisci quos et sit eveniet. Velit modi aut eum laboriosam omnis occaecati voluptatem.', '2007-05-15', '2013-08-05', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (58, 'Nemo sint odio delectus laborum unde et.', 'Voluptatibus consequatur et facere harum iusto. Veniam quisquam laboriosam esse amet voluptatem aut. Fugit numquam quam sed ut v', '2015-12-16', '2016-04-16', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (59, 'Qui repellendus sed consequatur quaerat assum', 'Aut eius non veritatis optio necessitatibus nemo omnis. Ipsum ea blanditiis odio tempore et. At blanditiis perferendis voluptas ', '1974-08-26', '2005-03-13', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (60, 'Reprehenderit autem aut aliquam quis eligendi', 'Quia ducimus quis suscipit vel nostrum. Quis facilis quia soluta et. Possimus nisi inventore id enim ut.', '1987-10-27', '1997-04-25', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (61, 'Amet laudantium incidunt suscipit quo in cons', 'Odit sit est perspiciatis debitis fugiat est. Quos ex nostrum facilis quia accusamus autem perspiciatis voluptatem. Accusantium ', '1973-01-24', '1984-08-08', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (62, 'Cupiditate iste tempore in occaecati possimus', 'Neque molestias voluptas ut sed vitae sit. Quibusdam harum necessitatibus provident aliquam et. Incidunt expedita voluptatem vol', '1987-05-03', '1989-04-20', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (63, 'Maxime tempora nihil reiciendis laudantium.', 'Tempore autem nisi nihil error aspernatur unde quis. Ducimus dicta culpa provident at in tempore illum consequuntur. Voluptas pl', '2000-10-30', '2013-06-05', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (64, 'Assumenda dicta ut minima laboriosam consequu', 'Porro consectetur ex dolorem magnam nam veniam. Perspiciatis ea cumque consequatur architecto. Autem totam quos rem ratione quo.', '1974-10-24', '2015-02-11', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (65, 'Quia rerum quas enim perferendis et beatae au', 'Blanditiis voluptate quis rerum provident. Molestias est id expedita officiis. Quia sunt saepe dolorem error facilis excepturi. ', '1996-01-04', '1999-01-14', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (66, 'Corrupti eos provident rerum possimus dolores', 'Nesciunt deserunt nemo ipsa quis est autem mollitia. Ea est aut et est qui. Blanditiis quis eos natus veritatis est. Quia totam ', '2017-08-26', '2018-04-21', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (67, 'Dolor qui nihil assumenda mollitia excepturi ', 'Et vero officiis soluta quia doloribus et. Laudantium laboriosam adipisci quibusdam est. Minima deleniti voluptates eum.', '1992-03-29', '1999-04-01', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (68, 'Qui sit delectus iure dolorem ut aut.', 'Fugit et soluta praesentium. Voluptatibus eos harum dolorem recusandae beatae quo. Maxime consequatur vel et et inventore nostru', '1981-11-05', '1982-03-08', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (69, 'Eum et adipisci aperiam.', 'Aut sit exercitationem sapiente dolores rerum fuga. At et voluptas molestias unde natus ut repudiandae. In quo et tempore sunt q', '1982-03-29', '2015-07-18', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (70, 'Rerum nemo rerum ut quia velit et.', 'Atque ipsa est quam magni dolor facilis numquam. Harum quam culpa facere nam praesentium tempora.', '1997-07-04', '1999-12-26', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (71, 'At et repellendus quis.', 'Quas architecto libero natus nihil. Rerum vero voluptatum reprehenderit accusantium sint modi. Dolores dolores ad officiis eius ', '2012-12-14', '2013-08-02', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (72, 'In repudiandae sunt similique atque voluptate', 'Voluptatem qui quaerat adipisci quis perferendis voluptatem aliquam. Reiciendis harum qui et porro culpa non ut et. Et adipisci ', '2005-04-16', '2013-10-04', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (73, 'Nam numquam eveniet odio et et numquam.', 'Necessitatibus vero quo tempore non. Eum id ut ut et aliquid occaecati.', '1983-02-20', '1987-09-24', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (74, 'Expedita assumenda ullam est distinctio et ad', 'Perspiciatis repudiandae inventore nihil. Earum enim et molestiae aliquid labore. Iste autem maxime et saepe debitis ut aut. Ea ', '1979-06-27', '1998-07-04', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (75, 'Doloremque dicta aspernatur vero hic sed et d', 'Amet vitae sit voluptates nostrum consequuntur aperiam et. Aperiam accusamus sunt praesentium perferendis voluptatibus voluptate', '1998-12-21', '1999-09-18', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (76, 'Dolorum autem inventore minus autem amet est.', 'Iste magni nesciunt earum impedit maxime quia beatae. Rerum a hic voluptas dolor sed quis quo. Quia minima facere cupiditate et ', '1977-02-16', '2006-06-20', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (77, 'Doloribus occaecati dolore tempore ipsa paria', 'Enim quo assumenda minus. Ut et blanditiis optio voluptas. Dolorem sapiente nihil iusto sequi sed.', '2004-07-09', '2013-08-01', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (78, 'Qui et et totam reprehenderit est expedita co', 'Vitae et quibusdam aut in provident architecto error. Ad at rerum accusantium tempora minus quidem officiis laboriosam. Voluptat', '1979-08-14', '1980-03-05', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (79, 'Facere minus ut laudantium minima excepturi.', 'Laudantium quia ipsam harum libero quia quas. Sint laborum quidem aut. Impedit esse sequi voluptatibus harum. Ipsam tempore arch', '2006-05-25', '2013-11-18', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (80, 'In et sed reprehenderit quia quas corporis di', 'Eligendi est voluptatem nisi. Rerum ut nihil quod qui perspiciatis corrupti dolores. Impedit qui sapiente ex non.', '1986-07-05', '2009-06-16', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (81, 'Perferendis aut exercitationem explicabo.', 'Aliquam voluptas quaerat atque ducimus sit qui atque. Vel aspernatur ipsum non est rerum ipsa odio. Dicta in odio repellendus vo', '2004-01-23', '2013-01-10', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (82, 'Molestiae corrupti aut voluptatem tempora qua', 'Dicta ipsa quo esse eaque sed quia voluptatem sit. Maxime enim culpa natus quasi vel. Ea est rerum est harum. Possimus molestias', '1978-11-27', '1979-01-20', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (83, 'Exercitationem nam illum eius ea modi.', 'Saepe quia nisi nesciunt aliquid sapiente quia enim. Est et sed in nihil maiores sint. Occaecati reiciendis explicabo dolorem es', '1975-11-13', '1985-04-04', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (84, 'Exercitationem et sit excepturi voluptas hic ', 'Quam voluptatem sed repellat rerum. Iusto sit iure qui. Non ratione quis vitae ut. Nesciunt molestiae omnis quia doloribus at vo', '1985-05-06', '2014-12-13', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (85, 'Omnis atque natus molestias iusto sint volupt', 'Est sequi cumque voluptates sit. Iusto quis voluptatibus rerum placeat non sunt ipsa. Aperiam consequatur asperiores quisquam od', '2015-04-21', '2017-08-31', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (86, 'Ea ea necessitatibus quasi voluptatem dolores', 'Quasi fuga assumenda numquam ea beatae hic. Et iusto corrupti ex cumque. Occaecati ducimus minus ut omnis voluptatum voluptatem.', '2008-02-29', '2015-04-25', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (87, 'Consequatur necessitatibus magnam suscipit ab', 'Veritatis praesentium aspernatur dignissimos commodi aspernatur reprehenderit. Impedit repellat ratione voluptas perspiciatis at', '1985-10-04', '2001-11-08', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (88, 'Animi perferendis sapiente voluptatem esse pa', 'Laborum et dolore rerum enim. Ullam sint et laborum est quaerat. Est id impedit nihil enim. Recusandae ut beatae deserunt.', '1982-08-06', '1997-12-04', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (89, 'Ab et et beatae.', 'Vitae quia ea consequatur qui ipsa distinctio quidem. Sint corrupti sapiente magni fugit voluptas dolorem ea. Repudiandae rerum ', '1970-05-25', '1979-08-02', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (90, 'Inventore voluptatem maxime dolores rerum.', 'Qui totam ut reiciendis in quaerat. Aut aut aliquam nemo sequi dignissimos quam. Enim at est ex ipsa.', '1983-05-24', '1989-04-01', 10, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (91, 'Blanditiis vero quaerat dolorum nostrum aliqu', 'Libero vitae odio eum. Qui aut harum reiciendis sint quos amet. Quia quo sit omnis consequuntur cum.', '1990-03-03', '1999-03-06', 1, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (92, 'Sint vel amet debitis ut repudiandae neque.', 'Beatae qui ab magnam esse voluptatem voluptatum vel. Molestiae mollitia dolores et dolores. Autem aut provident et quae accusant', '2009-07-14', '2012-11-06', 2, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (93, 'Dolore assumenda consectetur repellendus rem.', 'Suscipit adipisci consectetur et in quis magnam quas. Incidunt ea ea aut quae corporis debitis alias. Aut nam architecto officia', '2018-05-29', '2019-05-01', 3, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (94, 'Eos aut unde ipsum soluta architecto.', 'Magni non iusto sint hic dolor. Eos consequatur dicta eius iusto est enim. Numquam ut non omnis voluptas. Possimus quam ut vel.', '1997-12-26', '2011-10-20', 4, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (95, 'Pariatur sit minus rerum aperiam.', 'Harum cum eveniet odio facere est optio. Nobis et sint placeat totam consequatur. Culpa eveniet nisi commodi qui cumque. Commodi', '1975-01-06', '2016-09-11', 5, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (96, 'Sequi nam est totam esse non aperiam.', 'Vero ab unde veniam pariatur non enim tempora itaque. Optio harum velit velit doloribus. Eveniet quia rerum sapiente fugiat. Rei', '2010-12-31', '2013-06-13', 6, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (97, 'Et ducimus est sit et non nesciunt laudantium', 'Aut consectetur quis quia non. Velit repellat deleniti dignissimos commodi ad nobis similique. Est repellendus dignissimos et re', '2012-04-17', '2013-07-24', 7, 1);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (98, 'Ut illo ea sint ex.', 'Culpa laudantium sed commodi quo voluptatum numquam. Ullam eos maiores facere est repudiandae impedit. Est ab commodi nisi asper', '2015-11-21', '2016-12-17', 8, 2);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (99, 'Libero dolorem optio aliquid quas molestiae.', 'Nobis quod beatae aut in voluptatem odio. Provident quod magni ab esse minus vel temporibus harum. Expedita ut et nemo et est id', '1980-12-03', '2011-03-08', 9, 3);
INSERT INTO `lesson` (`id`, `title`, `description`, `start_date`, `end_date`, `course_id`, `tutor_id`) VALUES (100, 'Animi voluptatem enim aut placeat.', 'Consectetur dolores perspiciatis minus et quis enim vel. Incidunt accusantium perspiciatis ut facilis est beatae. Et consequuntu', '2011-01-30', '2018-03-10', 10, 1);


#
# TABLE STRUCTURE FOR: lesson_student
#

DROP TABLE IF EXISTS `lesson_student`;

CREATE TABLE `lesson_student` (
  `lesson_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  PRIMARY KEY (`lesson_id`,`student_id`),
  KEY `FK_STUDENT_idx` (`student_id`),
  CONSTRAINT `FK_LESSON_05` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (1, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (2, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (3, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (4, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (5, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (6, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (7, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (8, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (9, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (10, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (11, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (12, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (13, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (14, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (15, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (16, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (17, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (18, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (19, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (20, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (21, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (22, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (23, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (24, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (25, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (26, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (27, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (28, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (29, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (30, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (31, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (32, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (33, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (34, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (35, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (36, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (37, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (38, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (39, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (40, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (41, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (42, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (43, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (44, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (45, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (46, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (47, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (48, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (49, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (50, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (51, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (52, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (53, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (54, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (55, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (56, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (57, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (58, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (59, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (60, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (61, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (62, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (63, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (64, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (65, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (66, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (67, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (68, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (69, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (70, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (71, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (72, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (73, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (74, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (75, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (76, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (77, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (78, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (79, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (80, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (81, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (82, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (83, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (84, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (85, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (86, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (87, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (88, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (89, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (90, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (91, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (92, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (93, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (94, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (95, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (96, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (97, 1);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (98, 2);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (99, 3);
INSERT INTO `lesson_student` (`lesson_id`, `student_id`) VALUES (100, 1);


#
# TABLE STRUCTURE FOR: role
#

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `role` (`id`, `role`) VALUES (1, 'Admin');
INSERT INTO `role` (`id`, `role`) VALUES (2, 'Tutor');
INSERT INTO `role` (`id`, `role`) VALUES (3, 'Student');


#
# TABLE STRUCTURE FOR: student
#

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_COURSE_idx` (`course_id`),
  KEY `FK_USER_idx` (`user_id`),
  CONSTRAINT `FK_COURSE_S` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_USER_S` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

INSERT INTO `student` (`id`, `user_id`, `course_id`) VALUES (1, 3, 3);
INSERT INTO `student` (`id`, `user_id`, `course_id`) VALUES (2, 6, 6);
INSERT INTO `student` (`id`, `user_id`, `course_id`) VALUES (3, 9, 9);


#
# TABLE STRUCTURE FOR: tutor
#

DROP TABLE IF EXISTS `tutor`;

CREATE TABLE `tutor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USER_idx` (`user_id`),
  CONSTRAINT `FK_USER_T` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

INSERT INTO `tutor` (`id`, `user_id`) VALUES (1, 2);
INSERT INTO `tutor` (`id`, `user_id`) VALUES (2, 5);
INSERT INTO `tutor` (`id`, `user_id`) VALUES (3, 8);


#
# TABLE STRUCTURE FOR: user
#

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` char(68) NOT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (1, 'Scotty', 'Swift', 'kole47@example.net', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '282-858-1218x70341', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (2, 'Price', 'Thiel', 'bborer@example.org', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '428-596-3759x557', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (3, 'Susana', 'Purdy', 'xstehr@example.org', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '1-177-581-8822x886', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (4, 'Royce', 'Stoltenberg', 'qwindler@example.net', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '627-559-1835', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (5, 'Godfrey', 'Watsica', 'schuster.brennon@example.net', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '1-621-577-8756x60415', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (6, 'Brionna', 'Bogan', 'tromaguera@example.net', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '06500790218', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (7, 'Jaycee', 'Tromp', 'squigley@example.org', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '1-275-619-3777x5011', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (8, 'Zachery', 'Thompson', 'bahringer.orlo@example.net', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '325.116.3504x393', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (9, 'Casandra', 'Wilkinson', 'miller.loyal@example.net', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '518.839.5233x7275', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `active`) VALUES (10, 'Kennith', 'Reilly', 'grant.lizzie@example.org', '$2a$10$p4CCqueIdWRC4cqmN9O4GuW5Ce1Kb3bU.SJ9HTY5C0e/aQp5rrxDu', '(065)026-0113', 1);


#
# TABLE STRUCTURE FOR: user_role
#

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FK_ROLE_idx` (`role_id`),
  CONSTRAINT `FK_ROLE` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (1, 1);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (2, 2);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (3, 3);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (4, 1);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (5, 2);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (6, 3);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (7, 1);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (8, 2);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (9, 3);
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES (10, 1);


