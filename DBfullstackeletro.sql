CREATE DATABASE  IF NOT EXISTS `fullstackeletro` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `fullstackeletro`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: fullstackeletro
-- ------------------------------------------------------
-- Server version	5.7.31

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'fogao'),(2,'geladeira'),(3,'lavadouraroupa'),(4,'microondas'),(5,'lavalouca');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `idcomentario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `mensagem` varchar(255) NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcomentario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,'Joao','Teste','2021-01-27 11:17:47'),(2,'1','a','2021-01-28 20:23:11'),(3,'Bruno Gouveia','Mensagem','2021-01-30 16:01:19'),(4,'teste',' ','2021-01-30 16:02:12'),(5,'Bruno Gouveia do Nascimento','Teste','2021-02-04 23:10:48'),(6,'teste','Teste','2021-02-05 12:06:50'),(7,'Aaaa','Aaaa','2021-02-05 12:27:11');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `mostra_produto_categoria`
--

DROP TABLE IF EXISTS `mostra_produto_categoria`;
/*!50001 DROP VIEW IF EXISTS `mostra_produto_categoria`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `mostra_produto_categoria` AS SELECT 
 1 AS `idproduto`,
 1 AS `descricao`,
 1 AS `preco`,
 1 AS `precofinal`,
 1 AS `imagem`,
 1 AS `categoria`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(45) NOT NULL,
  `endereco` varchar(90) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `nome_produto` varchar(150) NOT NULL,
  `valor_unit` decimal(8,2) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `valor_total` decimal(8,2) NOT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'Joao','Rua Teste','(11) 1234-5678','Geladeira Consul CRE44AK Frost Free Duplex',2390.99,2,4781.98),(2,'Bruno','Rua Abc, 123','11 96666-5555','Micro-ondas Philco 26L',499.00,1,499.00),(3,'Joao','enderecoB','1234','Fogão 5 Bocas Brastemp',1299.00,1,1299.00),(4,'Joao','d','11 96666-5555','Lavadoura de Roupas Samsung WD4000 Inox Look - 11kg',999.00,2,1998.00),(5,'Joao','d','(11) 1234-5678','Lavadoura de Roupas Samsung WD4000 Inox Look - 11kg',1290.79,3,3872.37),(6,'BRUNO','d','11963838272','Fogão 5 Bocas Brastemp',1.00,1,1.00),(7,'Joao','Nascimento','11 96666-5555','Lava Louças 14 Serviços Brastemp',123.00,3,369.00);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` int(11) DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idproduto`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,2,'Geladeira Brastemp Frost Free Duplex 375 litros Inox',3479.00,2384.10,'geladeira_brastemp.png'),(2,3,'Lavadoura de Roupas Samsung WD4000 Inox Look - 11kg',4359.00,3299.00,'lavaroupa_samsung.png'),(3,4,'Micro-ondas Brastemp 38L com Grill Ative',1567.90,879.90,'microondas_brastemp.png'),(4,4,'Micro-ondas Electrolux MS37R',599.00,539.10,'microondas_electrolux.png'),(5,1,'Fogão 5 Bocas Brastemp',1599.00,1394.10,'fogao_brastemp.png'),(6,5,'Lava Louças Electrolux 8 Servicos',3129.00,2799.00,'lavalouca_selectrolux.png'),(7,2,'Geladeira Consul CRE44AK Frost Free Duplex',2879.00,2591.10,'geladeira_consul.png'),(8,5,'Lava Louças 14 Serviços Brastemp',5229.00,3397.20,'lavalouca_sbrastemp.png'),(9,2,'Geladeira Cycle Defrost Inox 475L Electrolux',3339.00,2699.00,'geladeira_eletrolux.png'),(10,1,'Fogão Consul 4 bocas cor Inox',1059.00,979.00,'fogao_consul.png'),(11,3,'Lavadora de Roupas Electrolux Automática 13kg',1699.00,1499.00,'lavaroupa_eletrolux.png'),(12,4,'Micro-ondas Philco 26L',629.00,499.00,'microondas_philco.png');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'fullstackeletro'
--

--
-- Dumping routines for database 'fullstackeletro'
--

--
-- Final view structure for view `mostra_produto_categoria`
--

/*!50001 DROP VIEW IF EXISTS `mostra_produto_categoria`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `mostra_produto_categoria` AS select `produto`.`idproduto` AS `idproduto`,`produto`.`descricao` AS `descricao`,`produto`.`preco` AS `preco`,`produto`.`precofinal` AS `precofinal`,`produto`.`imagem` AS `imagem`,`categoria`.`nome` AS `categoria` from (`produto` join `categoria` on((`produto`.`id_categoria` = `categoria`.`id_categoria`))) order by `produto`.`idproduto` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-11 18:49:21
