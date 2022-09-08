import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton';


const HomeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex mt-28 justify-center items-center'>
            <div className='flex-1 -mt-36 hidden lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 p-2'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white my-6'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, officiis eum dolore facilis quia eius quo quasi odio incidunt error fuga quisquam nesciunt officia sunt alias asperiores perspiciatis distinctio! Voluptate praesentium quibusdam, nemo provident suscipit dolore est ad tempora sint?</p>

                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default HomeAppointment;