import React from 'react';

const Location = () => {
  return (
    <div className="relative md:pr-32   mx-auto   py-6 ml-4 h-section lg:container lg:mx-auto ">
      <div className="absolute hidden md:block z-10 rounded md:h-28  bg-slate-300 top-1/3 md:w-72 w-52  lg:right-10  lg:w-96">
        <h3 className=" m-2 font-bold sm:text-lg lg:text-2xl text-red-500">
          العنوان
        </h3>
        <p className="p-1 md:p-2  sm:text-sm lg:text-lg">
          {' '}
          حي البادية 7122 الامير عبد الرحمن بن عبد العزيز ,الدمام
        </p>
      </div>
      <iframe
        className="w-full h-full  rounded"
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14291.307758510746!2d50.0881417!3d26.4290608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fdaa26855ecf%3A0x22f34cbcb1e37a0f!2z2K3ZiiDYp9mE2KjYp9iv2YrYqQ!5e0!3m2!1sar!2seg!4v1686331783906!5m2!1sar!2seg"
      ></iframe>
    </div>
  );
};

export default Location;
