/*
  Warnings:

  - You are about to drop the column `Email` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `Username` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `accessLevel` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `birthday` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `bloodtype` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `cellNo` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `idDeceased` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `isEmployed` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `isEnrolled` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `isRegisteredVoter` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `middlename` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `purok` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `pwdType` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `religion` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `residenceType` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `residencyDate` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the column `telNo` on the `citizen` table. All the data in the column will be lost.
  - You are about to drop the `transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `transaction_ibfk_1`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `transaction_ibfk_2`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `transaction_ibfk_3`;

-- DropIndex
DROP INDEX `admin_Username_key` ON `admin`;

-- AlterTable
ALTER TABLE `admin` DROP COLUMN `Email`,
    DROP COLUMN `Password`,
    DROP COLUMN `Username`,
    DROP COLUMN `accessLevel`;

-- AlterTable
ALTER TABLE `citizen` DROP COLUMN `address`,
    DROP COLUMN `age`,
    DROP COLUMN `birthday`,
    DROP COLUMN `bloodtype`,
    DROP COLUMN `cellNo`,
    DROP COLUMN `education`,
    DROP COLUMN `firstname`,
    DROP COLUMN `gender`,
    DROP COLUMN `idDeceased`,
    DROP COLUMN `isEmployed`,
    DROP COLUMN `isEnrolled`,
    DROP COLUMN `isRegisteredVoter`,
    DROP COLUMN `lastname`,
    DROP COLUMN `middlename`,
    DROP COLUMN `occupation`,
    DROP COLUMN `purok`,
    DROP COLUMN `pwdType`,
    DROP COLUMN `religion`,
    DROP COLUMN `residenceType`,
    DROP COLUMN `residencyDate`,
    DROP COLUMN `status`,
    DROP COLUMN `telNo`,
    ADD COLUMN `purokID` INTEGER NULL;

-- AlterTable
ALTER TABLE `logs` MODIFY `history` VARCHAR(255) NULL;

-- DropTable
DROP TABLE `transaction`;

-- CreateTable
CREATE TABLE `account` (
    `accountID` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) NULL,
    `Email` VARCHAR(255) NULL,
    `Password` VARCHAR(255) NULL,
    `AccessLevel` INTEGER NULL,
    `AdminID` INTEGER NULL,
    `citizenID` INTEGER NULL,

    UNIQUE INDEX `account_Username_key`(`Username`),
    INDEX `AdminID`(`AdminID`),
    INDEX `citizenID`(`citizenID`),
    PRIMARY KEY (`accountID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personalinfo` (
    `personalInfoID` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NULL,
    `middleName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `residenceType` VARCHAR(255) NULL,
    `birthday` DATE NULL,
    `age` INTEGER NULL,
    `gender` VARCHAR(255) NULL,
    `maritalStatus` VARCHAR(255) NULL,
    `bloodtype` VARCHAR(255) NULL,
    `occupation` VARCHAR(255) NULL,
    `isEmployed` VARCHAR(255) NULL,
    `pwdType` VARCHAR(255) NULL,
    `education` VARCHAR(255) NULL,
    `isEnrolled` VARCHAR(255) NULL,
    `isSeniorCitizen` VARCHAR(255) NULL,
    `isDeceased` VARCHAR(255) NULL,
    `religion` VARCHAR(255) NULL,
    `cellNo` INTEGER NULL,
    `telNo` INTEGER NULL,
    `inRegisteredVoter` VARCHAR(255) NULL,
    `votersID` INTEGER NULL,
    `residencyDate` DATE NULL,
    `AdminID` INTEGER NULL,
    `citizenID` INTEGER NULL,

    INDEX `AdminID`(`AdminID`),
    INDEX `citizenID`(`citizenID`),
    PRIMARY KEY (`personalInfoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purok` (
    `purokID` INTEGER NOT NULL AUTO_INCREMENT,
    `PurokName` VARCHAR(100) NULL,
    `BarangayNo` INTEGER NULL,

    INDEX `BarangayNo`(`BarangayNo`),
    PRIMARY KEY (`purokID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `transactionID` INTEGER NOT NULL AUTO_INCREMENT,
    `adminID` INTEGER NULL,
    `citizenID` INTEGER NULL,
    `date` DATE NULL,
    `time` TIME(0) NULL,
    `purpose` VARCHAR(255) NULL,
    `businessID` INTEGER NULL,

    INDEX `adminID`(`adminID`),
    INDEX `businessID`(`businessID`),
    INDEX `citizenID`(`citizenID`),
    PRIMARY KEY (`transactionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `citizen_ibfk_4` ON `citizen`(`purokID`);

-- AddForeignKey
ALTER TABLE `citizen` ADD CONSTRAINT `citizen_ibfk_4` FOREIGN KEY (`purokID`) REFERENCES `purok`(`purokID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `account_ibfk_1` FOREIGN KEY (`AdminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `account_ibfk_2` FOREIGN KEY (`citizenID`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `personalinfo` ADD CONSTRAINT `personalinfo_ibfk_1` FOREIGN KEY (`AdminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `personalinfo` ADD CONSTRAINT `personalinfo_ibfk_2` FOREIGN KEY (`citizenID`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `purok` ADD CONSTRAINT `purok_ibfk_1` FOREIGN KEY (`BarangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`citizenID`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`businessID`) REFERENCES `business`(`businessID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
