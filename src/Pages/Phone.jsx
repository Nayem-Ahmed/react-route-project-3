import React, { useEffect, useState } from 'react';
import {  json, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const Phone = () => {
    const[phone,setPhone] = useState();
    const phones = useLoaderData();
    const {id} = useParams();
    const {image,phone_name,price,brand_name,rating,}= phone ||{};
    useEffect(()=>{
        const findPhone = phones?.find(phone => phone.id == id);
        setPhone(findPhone);
    },[])

    const handleAddFavorite = ()=>{
        const addArray = [];
        const addFavorite = JSON.parse(localStorage.getItem('favorite'));
        if (!addFavorite) {
            addArray.push(phone);
            localStorage.setItem('favorite',JSON.stringify(addArray));
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
              });
            
        }else{
            const isExist = addFavorite.find(phone => phone.id == id);
            if (!isExist) {
                
                addArray.push(...addFavorite,phone);
                localStorage.setItem('favorite',JSON.stringify(addArray))
                swal({
                    title: "Good job!",
                    text: "You added the product!",
                    icon: "success",
                    button: "Done!",
                  });
            }else{

                swal({
                    title: "All ready!",
                    text: "You clicked the button!",
                    icon: "error",
                    button: "cancel!",
                  });
            }
        }
        


        // localStorage.setItem('name',JSON.stringify([{nayem:12}]))
    }
  
    return (
        <div className='py-20'>
           <div className="relative mx-auto  flex md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={image}
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {phone_name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       {brand_name}
      </p>
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
     {price}$
    </p>
  </div>
  <div className="p-6 pt-0">
    <button onClick={handleAddFavorite}
      className="block bg-gray-200 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
     Add Favorite
    </button>
  </div>
</div>
        </div>
    );
};

export default Phone;