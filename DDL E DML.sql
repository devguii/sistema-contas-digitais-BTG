CREATE DATABASE  IF NOT EXISTS `sistema-conta-digital` 
USE `sistema-conta-digital`;

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_nascimento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endereco` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Cliente_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `cliente` WRITE;
INSERT INTO `cliente` VALUES (1,'PedroAlterado','1900/12/30','Rua Alterado','alterado@gomes.com','alterada','2023-08-04 23:28:37.491',NULL);
UNLOCK TABLES;

DROP TABLE IF EXISTS `conta`;
CREATE TABLE `conta` (
  `numero_conta` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `saldo` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`numero_conta`),
  KEY `Conta_id_cliente_fkey` (`id_cliente`),
  CONSTRAINT `Conta_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


LOCK TABLES `conta` WRITE;
INSERT INTO `conta` VALUES (1,1,100,'2023-08-04 23:28:37.502',NULL);
UNLOCK TABLES;


DROP TABLE IF EXISTS `movimentacao`;
CREATE TABLE `movimentacao` (
  `id_movimentacao` int NOT NULL AUTO_INCREMENT,
  `numero_conta` int NOT NULL,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` double NOT NULL,
  `data_movimentacao` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id_movimentacao`),
  KEY `Movimentacao_numero_conta_fkey` (`numero_conta`),
  CONSTRAINT `Movimentacao_numero_conta_fkey` FOREIGN KEY (`numero_conta`) REFERENCES `conta` (`numero_conta`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


LOCK TABLES `movimentacao` WRITE;
INSERT INTO `movimentacao` VALUES (1,1,'deposito',100,'2023-08-04 23:29:29.117','2023-08-04 23:29:29.117',NULL),(2,1,'deposito',100,'2023-08-04 23:29:29.955','2023-08-04 23:29:29.955',NULL),(3,1,'saque',50,'2023-08-04 23:29:32.355','2023-08-04 23:29:32.355',NULL),(4,1,'saque',50,'2023-08-04 23:29:33.044','2023-08-04 23:29:33.044',NULL);
UNLOCK TABLES;
