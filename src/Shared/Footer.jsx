import { FaGg,FaEdgeLegacy,FaPhoneAlt,FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaPinterest, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-200">
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <div className="flex items-center gap-3">
          <img
            className="w-16 "
            src="https://i.ibb.co/Kbb9BWV/6951198.png"
            alt=""
          />
          <p className="text-4xl font-bold">
            <span className="text-[#32BDF2]">Toy</span>
            <span className="text-[#FF6A98]">Tutors</span>
          </p>
        </div>
        <p>
          A kids toy shop is a store that specializes in
          <br /> selling toys and games designed specifically for children.
        </p>
        <div className="flex gap-2 text-[16px] items-center">
          <FaGg className="text-4xl text-[#FF6A98]  "></FaGg>
          <span>Addresss: 1800 Abbot Kinney Nebraska UK</span>
        </div>
        <div className="flex gap-[20px] text-[16px] items-center">
          <FaEdgeLegacy className="text-2xl  text-[#FF6A98]  "></FaEdgeLegacy>
          <span>Email: hello@example.com</span>
        </div>
        <div className="flex gap-[16px] text-[16px] items-center">
          <FaPhoneAlt className="text-2xl ml-1  text-[#FF6A98]  "></FaPhoneAlt>
          <span>Phone: (012) 345 6789</span>
        </div>
      </div>
      <div>
        <span className="footer-title text-xl">Quick Links</span>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Help Center</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Redeem Voucher</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Contact Us</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Policies & Rules</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Check Offer List</a>
      </div>
      <div>
        <span className="footer-title text-xl">Information</span>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Product Support</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Checkout</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">License Policy</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">Affiliate</a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">About Us</a>
      </div>
      <div>
        <span className="footer-title text-xl">Follow Us On</span>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
            <FaFacebook className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaFacebook>
            Facebook
        </a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
            <FaTwitter className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaTwitter>
            Twitter
        </a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
            <FaInstagram className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaInstagram>
            Instagram
        </a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
            <FaYoutube className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaYoutube>
            Youtube
        </a>
        <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
            <FaPinterest className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaPinterest>
            Pinterest
        </a>
      </div>
      
    </footer>
    <hr className="text-white" />
      <p className="text-center text-sm mt-2 font-semibold"> &copy; Copyright 2023. Powered by ToyTutors</p>
      </div>
  );
};

export default Footer;
