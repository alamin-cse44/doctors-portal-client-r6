import React from 'react';

const ServicesShow = ({ service }) => {
    const {title, description, img} = service; 
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ title }</h2>
                <p>{ description }</p>
                <div className="card-actions">
                    <h2>{  }</h2>
                </div>
            </div>
        </div>
    );
};

export default ServicesShow;