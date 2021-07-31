-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rynr5arplf46mchi
-- ------------------------------------------------------
-- Server version	5.7.33-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--
-- Dumping database structure for rynr5arplf46mchi
DROP DATABASE IF EXISTS `rynr5arplf46mchi`;
CREATE DATABASE IF NOT EXISTS `rynr5arplf46mchi` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rynr5arplf46mchi`;

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_token` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `user_email_id` varchar(45) NOT NULL,
  `user_contact` varchar(45) NOT NULL,
  `otp_code` varchar(45) NOT NULL,
  `modified_date` varchar(45) NOT NULL,
  `created_date` varchar(45) NOT NULL,
  PRIMARY KEY (`user_role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'29347skdfhsdhf','8dd43ae0638e1ce2690e2e3cfa653923','digicita','bijendrasingh9146@gmail.com','08879954322','8321','2021-07-29 18:35:56.082665','2021-07-29 18:35:56.082665'),(10,'29347skdfhsdhf','8dd43ae0638e1ce2690e2e3cfa653923','Bijendra Singh','acept.bijendra@gmail.com','0899554038','3435','2021-07-30 19:22:51.043955','2021-07-30 19:22:51.043955');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_appointment`
--

DROP TABLE IF EXISTS `user_appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user_appointment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_email_id` varchar(45) NOT NULL,
  `user_token_number` varchar(45) NOT NULL,
  `fk_vaccine_center_id` int(11) NOT NULL,
  `created_date` varchar(45) NOT NULL,
  `vaccination_status` enum('True','False') NOT NULL DEFAULT 'False',
  PRIMARY KEY (`id`),
  KEY `fk_vaccine_center_id_idx` (`fk_vaccine_center_id`),
  CONSTRAINT `fk_vaccine_center_id` FOREIGN KEY (`fk_vaccine_center_id`) REFERENCES `vaccine_centers_account` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_appointment`
--

LOCK TABLES `user_appointment` WRITE;
/*!40000 ALTER TABLE `user_appointment` DISABLE KEYS */;
INSERT INTO `user_appointment` VALUES (4,'digicita','bijendrasingh9146@gmail.com','8593',5,'2021-07-30 14:16:35.759217','False'),(5,'digicita','bijendrasingh9146@gmail.com','5983',1,'2021-07-30 14:19:23.515259','True'),(6,'Bijendra Singh','acept.bijendra@gmail.com','9367',1,'2021-07-30 19:24:59.874759','False'),(7,'Bijendra Singh','acept.bijendra@gmail.com','4493',2,'2021-07-30 19:36:37.007726','True');
/*!40000 ALTER TABLE `user_appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccinated_user`
--

DROP TABLE IF EXISTS `vaccinated_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `vaccinated_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email_address` varchar(45) NOT NULL,
  `vaccine_center_id` varchar(45) NOT NULL,
  `timing` varchar(45) NOT NULL,
  `created_date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccinated_user`
--

LOCK TABLES `vaccinated_user` WRITE;
/*!40000 ALTER TABLE `vaccinated_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaccinated_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccincentersmaster`
--

DROP TABLE IF EXISTS `vaccincentersmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `vaccincentersmaster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `timing` varchar(45) NOT NULL,
  `images` varchar(45) NOT NULL,
  `facilities` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccincentersmaster`
--

LOCK TABLES `vaccincentersmaster` WRITE;
/*!40000 ALTER TABLE `vaccincentersmaster` DISABLE KEYS */;
INSERT INTO `vaccincentersmaster` VALUES (1,'Sligo Institute of Technology','Knocknarea Arena, Sligo IT, Ash Lane Ballinode Sligo','9am to 8pm','sligoVaccineCenter.jpg','Toilet and wheelchair accessible toilet facilities.'),(2,'Kilanerin Community Centre','Gorey, Wexford','9am to 8pm','kilanerinCommunityCentre.jpg','Free on-site parking, Toilets and wheelchair accessible toilets are available.'),(3,'Páirc Uí Chaoimh','The Marina, Cork City, Cork','9am to 8pm','páircUíChaoimh.jpg','Free on-site parking.'),(4,'City Hall Cork','City Hall, Anglesea Street, Cork City, Cork','9am to 8pm','cityHallCork.jpg','Arrangements are in place with Q-Park for a reduced rate of €1.50 for clients for 1 hour of parking.'),(5,'Aviva Stadium','Landsdowne Road, Ballsbridge, Dublin 4, Dublin','9am to 8pm','avivaVaccineCenter.jpg','The car park is just past the stadium on the left-hand side. This costs €2 an hour. Parking is limited. Please remove your car after your appointment to free up spaces for other people with vaccination appointments after you.');
/*!40000 ALTER TABLE `vaccincentersmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccine_centers_account`
--

DROP TABLE IF EXISTS `vaccine_centers_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `vaccine_centers_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email_address` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccine_centers_account`
--

LOCK TABLES `vaccine_centers_account` WRITE;
/*!40000 ALTER TABLE `vaccine_centers_account` DISABLE KEYS */;
INSERT INTO `vaccine_centers_account` VALUES (1,'Sligo Institute of Technology','vaccineCenter1@gmail.com','Qwerty@123'),(2,'Kilanerin Community Centre','vaccineCenter2@gmail.com','Qwerty@123'),(3,'Páirc Uí Chaoimh','vaccineCenter3@gmail.com','Qwerty@123'),(4,'City Hall Cork','vaccineCenter4@gmail.com','Qwerty@123'),(5,'Aviva Stadium','vaccineCenter5@gmail.com','Qwerty@123');
/*!40000 ALTER TABLE `vaccine_centers_account` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-31 20:24:34
