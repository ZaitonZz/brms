import TopBarStaff from "../StaffPage/topbarstaff";
import PersonalInfoForm from "./PersonalInfoForm";



const AddCitizenStaff = () => {
  return (
    <main>

      <div className="TopBarStaff">
        <TopBarStaff/>
      </div>
    <div>

      <h1 className="max-w-md mx-auto mt-8 p-6 bg-[#558750] text-white rounded shadow-md">Personal Information Form <a href="../adminpage" className="pl-24 m-0  hover:text-gray-200">Back</a></h1>

      <PersonalInfoForm />
    </div>
    </main>
  );
};

export default AddCitizenStaff;