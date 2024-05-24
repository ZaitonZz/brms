export interface PersonalInformation {
    firstName?: string; // VARCHAR(255) NULL
    middleName?: string; // VARCHAR(255) NULL
    lastName?: string; // VARCHAR(255) NULL
    address?: string; // VARCHAR(255) NULL
    residenceType?: string; // VARCHAR(255) NULL
    birthday?: string; // DATE NULL
    age?: number | null; // INT NULL
    gender?: string; // VARCHAR(255) NULL
    maritalStatus?: string; // VARCHAR(255) NULL
    bloodType?: string; // VARCHAR(255) NULL
    occupation?: string; // VARCHAR(255) NULL
    isEmployed?: string; // VARCHAR(255) NULL
    pwdType?: string; // VARCHAR(255) NULL
    education?: string; // VARCHAR(255) NULL
    isEnrolled?: string; // VARCHAR(255) NULL
    isSeniorCitizen?: string; // VARCHAR(255) NULL
    isDeceased?: string; // VARCHAR(255) NULL
    religion?: string; // VARCHAR(255) NULL
    cellNo?: string; // VARCHAR(255) NULL
    telNo?: string; // VARCHAR(255) NULL
    isRegisteredVoter?: string; // VARCHAR(255) NULL
    votersID?: number | null; // INT NULL
    residencyDate?: string; // DATE NULL
}
