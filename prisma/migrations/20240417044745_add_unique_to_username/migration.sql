-- CreateTable
CREATE TABLE `admin` (
    `AdminID` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(50) NULL,
    `Email` VARCHAR(100) NULL,
    `accessLevel` INTEGER NULL,
    `Password` VARCHAR(255) NULL,

    UNIQUE INDEX `admin_Username_key`(`Username`),
    PRIMARY KEY (`AdminID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `awards` (
    `awardID` INTEGER NOT NULL AUTO_INCREMENT,
    `awardTitle` VARCHAR(255) NULL,
    `awardLevel` VARCHAR(100) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`awardID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barangay` (
    `barangayNo` INTEGER NOT NULL AUTO_INCREMENT,
    `BarangayName` VARCHAR(255) NULL,
    `Address` VARCHAR(255) NULL,
    `Telefax` VARCHAR(50) NULL,
    `Email` VARCHAR(100) NULL,
    `Website` VARCHAR(100) NULL,
    `Icon` VARCHAR(255) NULL,
    `Province` VARCHAR(100) NULL,
    `City_municipality` VARCHAR(100) NULL,
    `Region` VARCHAR(100) NULL,

    PRIMARY KEY (`barangayNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barangayofficial` (
    `brgyOffID` INTEGER NOT NULL AUTO_INCREMENT,
    `barangayNo` INTEGER NULL,
    `PunongBarangay` VARCHAR(100) NULL,
    `Kagawad1` VARCHAR(100) NULL,
    `Kagawad2` VARCHAR(100) NULL,
    `Kagawad3` VARCHAR(100) NULL,
    `Kagawad4` VARCHAR(100) NULL,
    `Kagawad5` VARCHAR(100) NULL,
    `Kagawad6` VARCHAR(100) NULL,
    `Kagawad7` VARCHAR(100) NULL,
    `PangkatSecretary` VARCHAR(100) NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`brgyOffID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business` (
    `businessID` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(255) NULL,
    `dateOfEstablishment` DATE NULL,
    `businessPermitNo` VARCHAR(100) NULL,
    `businessOrgForm` VARCHAR(100) NULL,
    `contactNo` VARCHAR(15) NULL,
    `businessType` VARCHAR(100) NULL,
    `businessName` VARCHAR(255) NULL,
    `status` VARCHAR(50) NULL,
    `purok` VARCHAR(50) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`businessID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `citizen` (
    `citizenID` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(50) NULL,
    `middlename` VARCHAR(50) NULL,
    `lastname` VARCHAR(50) NULL,
    `purok` VARCHAR(50) NULL,
    `address` VARCHAR(255) NULL,
    `residenceType` VARCHAR(50) NULL,
    `birthday` DATE NULL,
    `age` INTEGER NULL,
    `gender` CHAR(10) NULL,
    `status` VARCHAR(50) NULL,
    `bloodtype` VARCHAR(5) NULL,
    `occupation` VARCHAR(100) NULL,
    `isEmployed` VARCHAR(15) NULL,
    `pwdType` VARCHAR(50) NULL,
    `education` VARCHAR(50) NULL,
    `isEnrolled` VARCHAR(15) NULL,
    `idDeceased` VARCHAR(15) NULL,
    `religion` VARCHAR(50) NULL,
    `cellNo` VARCHAR(15) NULL,
    `telNo` VARCHAR(15) NULL,
    `isRegisteredVoter` VARCHAR(15) NULL,
    `residencyDate` DATE NULL,
    `AdminID` INTEGER NULL,
    `HouseholdNo` INTEGER NULL,
    `barangayNo` INTEGER NULL,

    INDEX `AdminID`(`AdminID`),
    INDEX `HouseholdNo`(`HouseholdNo`),
    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`citizenID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `complaints` (
    `complaintID` INTEGER NOT NULL AUTO_INCREMENT,
    `adminID` INTEGER NULL,
    `citizenID_complainant` INTEGER NULL,
    `citizenID_complainee` INTEGER NULL,
    `date` DATE NULL,
    `time` TIME(0) NULL,
    `for` VARCHAR(255) NULL,
    `actions` VARCHAR(255) NULL,

    INDEX `adminID`(`adminID`),
    INDEX `citizenID_complainant`(`citizenID_complainant`),
    INDEX `citizenID_complainee`(`citizenID_complainee`),
    PRIMARY KEY (`complaintID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fee` (
    `feeID` INTEGER NOT NULL AUTO_INCREMENT,
    `adminID` INTEGER NULL,
    `CitizenID` INTEGER NULL,
    `Date` DATE NULL,
    `Time` TIME(0) NULL,
    `amountPaid` DECIMAL(10, 2) NULL,
    `feetype` VARCHAR(100) NULL,
    `businessID` INTEGER NULL,

    INDEX `CitizenID`(`CitizenID`),
    INDEX `adminID`(`adminID`),
    INDEX `businessID`(`businessID`),
    PRIMARY KEY (`feeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fiscalinfo` (
    `fiscalInfoID` INTEGER NOT NULL AUTO_INCREMENT,
    `internalRevenue` DECIMAL(10, 2) NULL,
    `donation` DECIMAL(10, 2) NULL,
    `shareFromNationalWealth` DECIMAL(10, 2) NULL,
    `externalSubsidy` DECIMAL(10, 2) NULL,
    `generalFund` DECIMAL(10, 2) NULL,
    `skFund` DECIMAL(10, 2) NULL,
    `RPTShare` DECIMAL(10, 2) NULL,
    `feesAndCharges` DECIMAL(10, 2) NULL,
    `other` DECIMAL(10, 2) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`fiscalInfoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `household` (
    `householdNo` INTEGER NOT NULL AUTO_INCREMENT,
    `portableWaterLevel` VARCHAR(50) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`householdNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item` (
    `itemID` INTEGER NOT NULL AUTO_INCREMENT,
    `itemClassification` VARCHAR(100) NULL,
    `itemType` VARCHAR(100) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`itemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs` (
    `logID` INTEGER NOT NULL AUTO_INCREMENT,
    `adminID` INTEGER NULL,
    `history` TEXT NULL,
    `date` DATE NULL,
    `time` TIME(0) NULL,

    INDEX `adminID`(`adminID`),
    PRIMARY KEY (`logID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note` (
    `noteID` INTEGER NOT NULL AUTO_INCREMENT,
    `AdminID` INTEGER NULL,
    `citizenID` INTEGER NULL,
    `BusinessID` INTEGER NULL,
    `Time` TIME(0) NULL,
    `Note` TEXT NULL,
    `Date` DATE NULL,

    INDEX `AdminID`(`AdminID`),
    INDEX `BusinessID`(`BusinessID`),
    INDEX `citizenID`(`citizenID`),
    PRIMARY KEY (`noteID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `physicalinfo` (
    `physicalInfoID` INTEGER NOT NULL AUTO_INCREMENT,
    `totalLandArea` DECIMAL(10, 2) NULL,
    `barangayLocation` VARCHAR(255) NULL,
    `LandClassification` VARCHAR(100) NULL,
    `economicSource` VARCHAR(255) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`physicalInfoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `politicalinfo` (
    `politicalInfoID` INTEGER NOT NULL AUTO_INCREMENT,
    `basisOfCreation` VARCHAR(255) NULL,
    `numOfPrecints` INTEGER NULL,
    `dateOfPlebiscite` DATE NULL,
    `BDCLevel` VARCHAR(50) NULL,
    `BPOCLevel` VARCHAR(50) NULL,
    `BCPCLevel` VARCHAR(50) NULL,
    `VAWLevel` VARCHAR(50) NULL,
    `BADACLevel` VARCHAR(50) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`politicalInfoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicevehicles` (
    `serviceVehicleID` INTEGER NOT NULL AUTO_INCREMENT,
    `typeOfVehicle` VARCHAR(100) NULL,
    `Quantity` INTEGER NULL,
    `PlateNo` VARCHAR(50) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`serviceVehicleID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `socioeconomicinfo` (
    `socioEconomicID` INTEGER NOT NULL AUTO_INCREMENT,
    `brgyHall` VARCHAR(255) NULL,
    `MultiPurposeHall` VARCHAR(255) NULL,
    `Library` VARCHAR(255) NULL,
    `brgyHealthstation` VARCHAR(255) NULL,
    `dayCareCenter` VARCHAR(255) NULL,
    `satelliteMarket` VARCHAR(255) NULL,
    `sportsCenter` VARCHAR(255) NULL,
    `materialsRecoveryFacility` VARCHAR(255) NULL,
    `wasteManagementCollectSystem` VARCHAR(255) NULL,
    `rainWaterCollectionSystem` VARCHAR(255) NULL,
    `plaza` VARCHAR(255) NULL,
    `waterSupplySystem` VARCHAR(255) NULL,
    `PlantingMaterialsDistributionSystem` VARCHAR(255) NULL,
    `FarmProduceStation` VARCHAR(255) NULL,
    `barangayNo` INTEGER NULL,

    INDEX `barangayNo`(`barangayNo`),
    PRIMARY KEY (`socioEconomicID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction` (
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

-- AddForeignKey
ALTER TABLE `awards` ADD CONSTRAINT `awards_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `barangayofficial` ADD CONSTRAINT `barangayofficial_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `business` ADD CONSTRAINT `business_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `citizen` ADD CONSTRAINT `citizen_ibfk_1` FOREIGN KEY (`AdminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `citizen` ADD CONSTRAINT `citizen_ibfk_2` FOREIGN KEY (`HouseholdNo`) REFERENCES `household`(`householdNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `citizen` ADD CONSTRAINT `citizen_ibfk_3` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `complaints` ADD CONSTRAINT `complaints_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `complaints` ADD CONSTRAINT `complaints_ibfk_2` FOREIGN KEY (`citizenID_complainant`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `complaints` ADD CONSTRAINT `complaints_ibfk_3` FOREIGN KEY (`citizenID_complainee`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `fee` ADD CONSTRAINT `fee_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `fee` ADD CONSTRAINT `fee_ibfk_2` FOREIGN KEY (`CitizenID`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `fee` ADD CONSTRAINT `fee_ibfk_3` FOREIGN KEY (`businessID`) REFERENCES `business`(`businessID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `fiscalinfo` ADD CONSTRAINT `fiscalinfo_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `household` ADD CONSTRAINT `household_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `logs` ADD CONSTRAINT `logs_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_ibfk_1` FOREIGN KEY (`AdminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_ibfk_2` FOREIGN KEY (`citizenID`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_ibfk_3` FOREIGN KEY (`BusinessID`) REFERENCES `business`(`businessID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `physicalinfo` ADD CONSTRAINT `physicalinfo_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `politicalinfo` ADD CONSTRAINT `politicalinfo_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `servicevehicles` ADD CONSTRAINT `servicevehicles_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `socioeconomicinfo` ADD CONSTRAINT `socioeconomicinfo_ibfk_1` FOREIGN KEY (`barangayNo`) REFERENCES `barangay`(`barangayNo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `admin`(`AdminID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`citizenID`) REFERENCES `citizen`(`citizenID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`businessID`) REFERENCES `business`(`businessID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
