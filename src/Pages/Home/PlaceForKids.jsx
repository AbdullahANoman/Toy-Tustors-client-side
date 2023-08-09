import React from 'react';

const PlaceForKids = () => {
    const handleCategory = () => {
        const targetElement = document.getElementById('category'); // Replace 'targetElement' with the actual ID of your target element
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the target element
        }
      };
    return (
        <div className='md:ml-[200px] mx-10 md:mx-0 my-10 grid md:grid-cols-7 grid-cols-1 md:my-20 items-center gap-6 md:gap-2'>
            <div className='col-span-2'>
                <p className='italic text-[#E80015] text-xl my-2'>Compatible</p>
                <h2 className='text-2xl my-4 font-semibold '>The Perfect Place For Your Kids To Open Their Creative Wings</h2>
                <p className='text-lg text-gray-500 text-md mb-10'>Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.</p>
                <button onClick={handleCategory} className='px-4 py-2 rounded-xl font-semibold bg-[#E1000E] text-white '>View More</button>
                <img className='hidden  md:flex mx-auto' src="https://dt-kidscool.myshopify.com/cdn/shop/files/fly-boy-psd.png?v=1683004782&width=1920" alt="" />
            </div>
            <div className='col-span-4 md:flex'>
               <div >
                    <img style={{borderRadius: "0px 0px 500px 0px"}} src="https://dt-kidscool.myshopify.com/cdn/shop/files/custom-img1.jpg?v=1682766620" alt="" />
               </div>
               <div>
                    <img style={{borderRadius: "500px 0px 0px 0px"}}  src="https://dt-kidscool.myshopify.com/cdn/shop/files/custom-img2.jpg?v=1682766620" alt="" />
               </div>
            </div>
            <div className='hidden md:block'>
                <img className='ml-auto' src="https://dt-kidscool.myshopify.com/cdn/shop/files/hand-shake-psd.png?v=1683001527&width=300" alt="" />
            </div>
        </div>
    );
};

export default PlaceForKids;