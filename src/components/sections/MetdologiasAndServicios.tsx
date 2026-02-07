import React from 'react';
import MetodologiaSection from './MetodologiaSection';
import ServiciosSection from './ServiciosSection';


const MetdologiasAndServicios = () => {
    return (
        <>
            <div className="relative bg-[#F9F7F2] overflow-hidden"
            >
                <div className="absolute inset-0 z-0 opacity-40 md:opacity-60 pointer-events-none flex justify-center items-start overflow-hidden">
                    <img
                        src="/images/back_circulos_1.png"
                        alt=""
                        className="w-full h-auto min-h-full object-cover"
                    />
                </div>

                <div className="relative z-10">
                    <MetodologiaSection />
                    <ServiciosSection />
                </div>
            </div>
        </>
    );
};

export default MetdologiasAndServicios;