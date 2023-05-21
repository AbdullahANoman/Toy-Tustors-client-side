import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://i.ibb.co/DG0hCB8/front-view-kid-playing-with-wooden-toyds-1-2.jpg"
          className="w-full rounded-xl"
        />
        <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
          <div className="text-white space-y-10 w-1/2 ">
            <h2 className="text-2xl md:text-6xl font-extrabold ">Fun Toys For <p className='mt-2'>Your Kids</p>
            </h2>
            <p >Browse through our huge collection of fun toys, dolls, puzzle games and more for your kids. Shop, play and create fond memories with your little ones!</p>
            <div className="">
              <button className="btn bg-[#FF3811] mr-5">Shop Now</button>
              
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle border-none ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px] ">
        <img
          src="https://i.ibb.co/th2rcwQ/set-children-toys-2.jpg"
          className="w-full rounded-xl"
        />
        <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
        <div className="text-white space-y-10 w-1/2 ">
            <h2 className="text-2xl md:text-6xl font-extrabold ">Fun Toys For <p className='mt-2'>Your Kids</p>
            </h2>
            <p >Browse through our huge collection of fun toys, dolls, puzzle games and more for your kids. Shop, play and create fond memories with your little ones!</p>
            <div className="">
              <button className="btn bg-[#FF3811] mr-5">Shop Now</button>
              
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle border-none ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img
          src="https://i.ibb.co/Lh0hKk3/fluffy-toy-texture-close-up.png"
          className="w-full rounded-xl"
        />
        <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
          <div className="text-white space-y-10 w-1/2 ">
            <h2 className="text-2xl md:text-6xl font-extrabold ">Fun Toys For <p className='mt-2'>Your Kids</p>
            </h2>
            <p >Browse through our huge collection of fun toys, dolls, puzzle games and more for your kids. Shop, play and create fond memories with your little ones!</p>
            <div className="">
              <button className="btn bg-[#FF3811] mr-5">Shop Now</button>
              
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle border-none ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle  border-none">
            ❯
          </a>
        </div>
      </div>
    </div>
    );
};

export default Banner;