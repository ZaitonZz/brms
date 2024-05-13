"use client";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middleName: "",
    lastName: "",
    address: "",
    residenceType: "",
    birthday: "",
    age: 0,
    gender: "",
    maritalStatus: "",
    bloodtype: "",
    occupation: "",
    isEmployed: "",
    pwdType: "",
    education: "",
    isEnrolled: "",
    isSeniorCitizen: "",
    isDeceased: "",
    religion: "",
    cellNo: 0,
    telNo: 0,
    isRegisteredVoter: "",
    votersID: 0,
    residencyDate: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Save form data to Prisma database
      const newRecord = await prisma.personalinfo.create({
        data: {
          firstname: formData.firstname,
          middleName: formData.middleName,
          lastName: formData.lastName,
          address: formData.address,
          residenceType: formData.residenceType,
          birthday: new Date(formData.birthday),
          age: formData.age,
          gender: formData.gender,
          maritalStatus: formData.maritalStatus,
          bloodtype: formData.bloodtype,
          occupation: formData.occupation,
          isEmployed: formData.isEmployed,
          pwdType: formData.pwdType,
          education: formData.education,
          isEnrolled: formData.isEnrolled,
          isSeniorCitizen: formData.isSeniorCitizen,
          isDeceased: formData.isDeceased,
          religion: formData.religion,
          cellNo: formData.cellNo,
          telNo: formData.telNo,
          inRegisteredVoter: formData.isRegisteredVoter,
          votersID: formData.votersID,
          residencyDate: new Date(formData.residencyDate),
        },
      });

      console.log("Record created:", newRecord);
      // Reset form after successful submission
      setFormData({
        firstname: "",
        middleName: "",
        lastName: "",
        address: "",
        residenceType: "",
        birthday: "",
        age: 0,
        gender: "",
        maritalStatus: "",
        bloodtype: "",
        occupation: "",
        isEmployed: "",
        pwdType: "",
        education: "",
        isEnrolled: "",
        isSeniorCitizen: "",
        isDeceased: "",
        religion: "",
        cellNo: 0,
        telNo: 0,
        isRegisteredVoter: "",
        votersID: 0,
        residencyDate: "",
      });

      // Set submit success notification or perform other actions
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, set error state, or show error message
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? e.target.checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md border border-[#3A8D31DE]"
    >
      <div className="mb-4">
        <label
          htmlFor="firstname"
          className="block text-sm font-medium text-gray-700"
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="middleName"
          className="block text-sm font-medium text-gray-700"
        >
          Middle Name:
        </label>
        <input
          type="text"
          id="middleName"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="residenceType"
          className="block text-sm font-medium text-gray-700"
        >
          Residence Type:
        </label>
        <input
          type="text"
          id="residenceType"
          name="residenceType"
          value={formData.residenceType}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="birthday"
          className="block text-sm font-medium text-gray-700"
        >
          Birthday:
        </label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender:
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="maritalStatus"
          className="block text-sm font-medium text-gray-700"
        >
          Marital Status:
        </label>
        <select
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="bloodtype"
          className="block text-sm font-medium text-gray-700"
        >
          Blood Type:
        </label>
        <input
          type="text"
          id="bloodtype"
          name="bloodtype"
          value={formData.bloodtype}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="occupation"
          className="block text-sm font-medium text-gray-700"
        >
          Occupation:
        </label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isEmployed"
          className="block text-sm font-medium text-gray-700"
        >
          Employed:
        </label>
        <input
          type="checkbox"
          id="isEmployed"
          name="isEmployed"
          checked={formData.isEmployed}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="pwdType"
          className="block text-sm font-medium text-gray-700"
        >
          PWD Type:
        </label>
        <input
          type="text"
          id="pwdType"
          name="pwdType"
          value={formData.pwdType}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="education"
          className="block text-sm font-medium text-gray-700"
        >
          Education:
        </label>
        <input
          type="text"
          id="education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isEnrolled"
          className="block text-sm font-medium text-gray-700"
        >
          Enrolled:
        </label>
        <input
          type="checkbox"
          id="isEnrolled"
          name="isEnrolled"
          checked={formData.isEnrolled}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isSeniorCitizen"
          className="block text-sm font-medium text-gray-700"
        >
          Senior Citizen:
        </label>
        <input
          type="checkbox"
          id="isSeniorCitizen"
          name="isSeniorCitizen"
          checked={formData.isSeniorCitizen}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isDeceased"
          className="block text-sm font-medium text-gray-700"
        >
          Deceased:
        </label>
        <input
          type="checkbox"
          id="isDeceased"
          name="isDeceased"
          checked={formData.isDeceased}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="religion"
          className="block text-sm font-medium text-gray-700"
        >
          Religion:
        </label>
        <input
          type="text"
          id="religion"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="cellNo"
          className="block text-sm font-medium text-gray-700"
        >
          Cell No:
        </label>
        <input
          type="text"
          id="cellNo"
          name="cellNo"
          value={formData.cellNo}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="telNo"
          className="block text-sm font-medium text-gray-700"
        >
          Tel No:
        </label>
        <input
          type="text"
          id="telNo"
          name="telNo"
          value={formData.telNo}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isRegisteredVoter"
          className="block text-sm font-medium text-gray-700"
        >
          Registered Voter:
        </label>
        <input
          type="checkbox"
          id="isRegisteredVoter"
          name="isRegisteredVoter"
          checked={formData.isRegisteredVoter}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="votersID"
          className="block text-sm font-medium text-gray-700"
        >
          Voters ID:
        </label>
        <input
          type="text"
          id="votersID"
          name="votersID"
          value={formData.votersID}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="residencyDate"
          className="block text-sm font-medium text-gray-700"
        >
          Residency Date:
        </label>
        <input
          type="date"
          id="residencyDate"
          name="residencyDate"
          value={formData.residencyDate}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#558750] text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
      >
        Submit
      </button>




      
    </form>
  );
};

export default PersonalInfoForm;
