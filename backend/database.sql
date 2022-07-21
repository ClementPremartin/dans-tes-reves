-- MySQL Script generated by MySQL Workbench
-- Tue Jul 19 16:56:20 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dans_tes_reves
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dans_tes_reves`.`presentation`;
DROP TABLE IF EXISTS `dans_tes_reves`.`series`;
DROP TABLE IF EXISTS `dans_tes_reves`.`files`;
DROP TABLE IF EXISTS `dans_tes_reves`.`creation`;
DROP TABLE IF EXISTS `dans_tes_reves`.`user`;

-- -----------------------------------------------------
-- Schema dans_tes_reves
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dans_tes_reves` DEFAULT CHARACTER SET utf8 ;
USE `dans_tes_reves` ;

-- -----------------------------------------------------
-- Table `dans_tes_reves`.`presentation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dans_tes_reves`.`presentation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(250) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `dans_tes_reves`.`presentation` (`description`) VALUES
("Je raconte des histoires tissées par les songes et l’imaginaire. À travers mes créations, je me plais à révéler mon univers proche de la nature et des créatures hybrides."),
("Avec des tendances oniriques, j’aime apporter du positif et de la folie aux spectateurs, faire vibrer leur âme de grand enfant, à la manière du Pays des Merveilles de L.Caroll."),
("Pour cela, j’aime jouer avec les matières, questionner les relations qu’elles peuvent entretenir entre elles. Je tente de valoriser les matériaux qui m’entourent, ceux du coin de la table, intégrant notre quotidien."),
("Voici mon projet **Dans tes rêves**");

-- -----------------------------------------------------
-- Table `dans_tes_reves`.`series`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dans_tes_reves`.`series` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `dans_tes_reves`.`series` (`name`) VALUES
("La Triade des beaux jours"),
("Collages textiles"),
("Voyage en Britannie sauvage");

-- -----------------------------------------------------
-- Table `dans_tes_reves`.`files`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dans_tes_reves`.`files` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image_url` VARCHAR(100) NOT NULL,
  `image_alt` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `dans_tes_reves`.`creation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dans_tes_reves`.`creation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `art_title` VARCHAR(45) NULL,
  `date` INT NULL,
  `size` VARCHAR(45) NULL,
  `technical` VARCHAR(250) NULL,
  `story` VARCHAR(250) NULL,
  `series_id` INT NOT NULL,
  `files_id` INT NULL,
  PRIMARY KEY (`id`, `series_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_creation_series1_idx` (`series_id` ASC) VISIBLE,
  INDEX `fk_creation_files1_idx` (`files_id` ASC) VISIBLE,
  CONSTRAINT `fk_creation_series1`
    FOREIGN KEY (`series_id`)
    REFERENCES `dans_tes_reves`.`series` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_creation_files1`
    FOREIGN KEY (`files_id`)
    REFERENCES `dans_tes_reves`.`files` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `dans_tes_reves`.`creation` (`art_title`, `date`, `size`, `technical`, `story`, `series_id`, `files_id`) VALUES
("Joyeux bouquet", 2022, "21 cm x 14,8 cm", "Gravure sur verre, collage textile, papier fait main", "~ À chaque fleur son pot. Le joyeux bouquet a trouvé son joli vase à pois. Les feuilles dansent au chant des oiseaux. Blanche-neige et Aurore, rentrez chez vous.  ~", 1, NULL ),
("Première brasse dans l'étang", 2022, "21 cm x 14,8 cm", "Gravure sur verre, collage textile, papier fait main", "~ Charlie savait que le moment était venu. Elle a enfilé son plus beau costume de bain tout assorti -bien sûr-. Chaque détail compte pour la première baignade de l'année.  ~", 1, NULL),
("Goûter sous les cerisiers", 2022, "21 cm x 14,8 cm", "Gravure sur verre, collage textile, papier fait main", "~ Un carré de chocolat dans un pain brioché et quelques fruits feront l'affaire pour ce goûter gourmand. Allongée sur la nappe, je ferme les yeux. Le ballet des oiseaux s'intensifie jusqu'à mes oreilles. Printemps te voilà. ~", 1, NULL),
("Du beurre dans mon casse-croûte", 2022, "25 cm x 26 cm", "Collage textile, fils en coton", NULL, 2, NULL),
("Tête de morue et queue de maquereau", 2022, "25 cm x 26 cm", "Collage textile, fils en coton", NULL, 2, NULL);

-- -----------------------------------------------------
-- Table `dans_tes_reves`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dans_tes_reves`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(100) NOT NULL,
  `hashed_password` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `hashed_password_UNIQUE` (`hashed_password` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `dans_tes_reves`.`user` (`firstname`, `lastname`, `email`, `hashed_password`) VALUES
("Olivia", "Huet", "olivia.huet@hotmail.fr", "$argon2id$v=19$m=16,t=2,p=1$b0wxV3JNSFZuRlFDQ0V5MA$IYqt05HXnelEvFUCcsFslA");

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
