import React from 'react';
import './Banner.css'
import chair from "../../../assets/images/chair.png";
import PrimaryButton from '../../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className='my-16 justify-center items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            <div>
                <h2 className="font-bold text-3xl">Your New Smile Starts Here</h2>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
            <div>
                <img src={chair} alt="" />
            </div>
        </div>
    );
};

export default Banner;