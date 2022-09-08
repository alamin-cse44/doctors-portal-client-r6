import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServicesShow from '../ServicesShow/ServicesShow';

const services = [
    { id: 1, title: "Flouride Treatment", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: flouride },
    
    { id: 2, title: "Cavity Filling", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: cavity },
    
    {id:3,title:"Teeth Whitening",description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",img:whitening},
]

const Services = () => {
    return (
        <>
            <div className=''>
            <h5 className='mt-12 text-center font-bold text-teal-400'>Our Services</h5>

            <h3 className='mt-2 text-center font-medium'>Service We Provide</h3>
            </div>
            
            <div className="px-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {
                    services.map(service => <ServicesShow
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </>

    );
};

export default Services;