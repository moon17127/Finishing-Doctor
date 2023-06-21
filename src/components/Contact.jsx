import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
const Contact = () => {
  return (
    <div className=" p-8 py-12 flex  mt-8 justify-end   bg-slate-200 xl:container xl:mx-auto">
      <div className="  text-left ">
        <h3 className="mb-6   font-bold">Contacts</h3>

        <div className="flex  ml-2  justify-end my-2   items-center gap-2 ">
          <a href="tel:+966580624763">966580624763+</a>
          <MdPhoneInTalk className="text-green-500 text-2xl" />
        </div>
        <div className=" ml-2    flex   items-center gap-2 my-2">
          <p>
            Al Badia District 7122 Prince Abdul Rahman Bin Abdul Aziz، Dammam
          </p>
          <MdLocationPin className="text-red-500  text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
