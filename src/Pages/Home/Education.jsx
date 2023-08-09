import React from "react";

const Education = () => {
  return (
    <>
      <div className="relative">
        <div className="md:max-w-[1700px] mx-auto my-20 relative  max-h-full">
          <div className="grid md:grid-cols-9 ">
            <div className="col-span-2">
              <img
                src="https://dt-kidscool.myshopify.com/cdn/shop/files/Masonry-arrow.png?v=1683607511&width=300"
                alt=""
              />
            </div>
            <div className="col-span-5 text-center">
              <p>Shine With Education </p>
              <h2>Take The Right Step To Achieve Your Child's Dream</h2>
              <p>
                Semper cras auctor neque vitae tempus quam pellentesque nec nam.
                Egestas sed sed risus pretium quam vulputate dignissim. At
                lectus urna duis convallis convallis tellus id. Diam in arcu
                cursus euismod.
              </p>
            </div>
            <div className="col-span-2">
              <img
                className="ml-auto"
                src="https://dt-kidscool.myshopify.com/cdn/shop/files/masonry-rocket.png?v=1683607511&width=300"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-12 md:gap-3 max-h-full mt-20">
            <div className="col-span-5">
              <img
                className="object-cover rounded-3xl h-full hover:border-[6px] transform duration-300 hover:opacity-60 border-orange-400 "
                src="https://dt-kidscool.myshopify.com/cdn/shop/files/section-content-gallery-image1.jpg?v=1683547736"
                alt=""
              />
            </div>
            <div className="col-span-4">
              <div className="flex gap-2 mb-3 ">
                <div>
                  <img
                    className="object-cover rounded-3xl max-h-full hover:border-[6px] transform duration-300 hover:opacity-60 border-orange-400"
                    src="https://dt-kidscool.myshopify.com/cdn/shop/files/section-content-gallery-image2_1.jpg?v=1683548121&width=1500"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-cover rounded-3xl max-h-full hover:border-[6px] transform duration-300 hover:opacity-60 border-orange-400"
                    src="https://dt-kidscool.myshopify.com/cdn/shop/files/section-content-gallery-image3.jpg?v=1683548101&width=1500"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <img
                  className="object-cover rounded-3xl max-h-full hover:border-[6px] transform duration-300 hover:opacity-60 border-orange-400"
                  src="https://dt-kidscool.myshopify.com/cdn/shop/files/section-content-gallery-image4.jpg?v=1683548034&width=1500"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-3 ">
              <div>
                <img
                  className="object-cover rounded-3xl max-h-full hover:border-[6px] transform duration-300 hover:opacity-60 border-orange-400"
                  src="https://dt-kidscool.myshopify.com/cdn/shop/files/section-content-gallery-image5.jpg?v=1683548079&width=1500"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover rounded-3xl h-full mt-4 hover:border-[6px] transform duration-300 hover:opacity-60 border-orange-400"
                  src="https://dt-kidscool.myshopify.com/cdn/shop/files/section-content-gallery-image6.jpg?v=1683548003&width=1500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <img
          className="md:flex absolute bottom-[100px] hidden o"
          src="https://dt-kidscool.myshopify.com/cdn/shop/files/masonry-play_pencil_girl-psd.png?v=1683634022&width=300"
          alt=""
        />
        <img
          className="md:flex absolute bottom-[150px] hidden right-0"
          src="https://dt-kidscool.myshopify.com/cdn/shop/files/masonry-play_pencil_boy-psd.png?v=1683634037&width=300"
          alt=""
        />
        <div  >
        <img
          src="https://dt-kidscool.myshopify.com/cdn/shop/files/gorden_images_1.png?v=1683523753&width=2560"
          alt=""
          className="bannerBackground"
        />
        </div>
      </div>
    </>
  );
};

export default Education;
