

export interface PersonalInformation {
    citizenID:number;
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
export interface Barangay {
    barangayNo: number;
    barangayName?: string; // VARCHAR(255) NULL
    Address?: string; // VARCHAR(255) NULL
    Telefax?: string; // VARCHAR(255) NULL
    Email?: string; // VARCHAR(255) NULL
    Website?: string; // VARCHAR(255) NULL
    City_municipality?: string; // VARCHAR(255) NULL
}

export interface Note {
    noteID: number;
    AdminID: number;
    citizenID?: number;
    BusinessID?: number;
    Time: string;
    Note: string;
    Date: string;
    firstname?: string;
    lastname?: string;
    businessName?: string;
  }

  export interface logs {
    barangayName?: string; 
    Admin: string; 
    History: string;
    Date: number;
    Time:number;
  }

  export interface Fee {
    feeID: number;
    adminID: number;
    CitizenID: number;
    Date: string;
    Time: string;
    amountPaid: string;
    feetype: string;
    businessID: number;
  }

  export interface businessFee {
    feeID:number ;
    adminID: number;
    BusinessID: number,
    Date: string;
    Time: string;
    amountPaid:string;
    feetype: string;
    businessName: string;
  }

  export interface citizensFee {
    feeID: number;
    adminID: number;
    CitizenID?: number;
    Date: string;
    Time: string;
    amountPaid: number;
    feetype: string;
    firstname?: string;
    lastname?: string;
  }