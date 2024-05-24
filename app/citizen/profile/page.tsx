import DetailsCard from '@/app/components/detailscard';
import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import React from 'react';


function Profile() {

    /*const purok = await apiCall();*/
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh'}}>

      <div className="py-10 flex">
        <div className='mr-24 mt-12'>
        <img src={`http://localhost:3000/img/lOGO.jpg`} alt="Logo" className='size-36'/>
        <div className="flex flex-col justify-center">
           <h1 className="text-center">Citizen Name</h1>
            <a href="#" className="text-center underline text-blue-800">Edit Profile</a>
        </div>
      </div>
        <div className='mr-[200px]'>
        <h1 className='text-4xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-4 rounded'>Profile</h1>
        <DetailsCard icon='/house.png' text='Purok:' variable='santol'></DetailsCard>
        <DetailsCard icon='/homeloc.png' text='Address:' variable='santol'></DetailsCard>
        <DetailsCard icon='/house.png' text='Residence Type:' variable ='santol'></DetailsCard>
        <DetailsCard icon='/calendar.png' text='Birthday:' variable='santol'></DetailsCard>
        <DetailsCard icon='/calendar.png' text='Age:' variable='santol'></DetailsCard>
        <DetailsCard icon='/gender.png' text='Gender:' variable='santol'></DetailsCard>
        <DetailsCard icon='/heart.png' text='Civil Status:' variable='santol'></DetailsCard>
        <DetailsCard icon='/blood.png' text='Blood Type:' variable='santol'></DetailsCard>
        <DetailsCard icon='/work.png' text='Occupation:' variable='santol'></DetailsCard>
        <DetailsCard icon='/check.png' text='Currently Employed:' variable='santol'></DetailsCard>
        <DetailsCard icon='/check.png' text='PWD:' variable='santol'></DetailsCard>
        </div>

        <div className='mt-[100px]'>
        <DetailsCard icon='/school.png' text='Education:' variable='santol'></DetailsCard>
        <DetailsCard icon='/blood.png' text='Blood Type:' variable='santol'></DetailsCard>
        <DetailsCard icon='/check.png' text='Currently Enrolled:' variable='santol'></DetailsCard>
        <DetailsCard icon='/check.png' text='Senior Citizen Member:' variable='santol'></DetailsCard>
        <DetailsCard icon='/obituary.png' text='Deceased:' variable='santol'></DetailsCard>
        <DetailsCard icon='/religion.png' text='Religion:' variable='santol'></DetailsCard>
        <DetailsCard icon='/cell.png' text='Cell No:' variable='santol'></DetailsCard>
        <DetailsCard icon='/tell.png' text='Tell No:' variable='santol'></DetailsCard>
        <DetailsCard icon='/voter.png' text='Registered Voter:' variable='santol'></DetailsCard>
        <DetailsCard icon='/id.png' text='Voter ID:' variable='santol'></DetailsCard>
        <DetailsCard icon='/brgyid.png' text='Barangay ID:' variable='santol'></DetailsCard>

        </div>
        </div>     
      </div>
     

     
    
      <Footer/>
    </div>
  
  );
}
export default Profile;
