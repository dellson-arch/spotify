import React from 'react';
import { FaGoogle, FaFacebook, FaApple, FaMobileAlt } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans text-white">
      <div className="w-full max-w-[450px] flex flex-col items-center">
        
        {/* Logo */}
        <div className="mb-8">
          <svg viewBox="0 0 167.5 167.5" className="w-12 h-12 fill-white">
            <path d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7C167.5 37.5 130 0 83.7 0zm38.4 120.7c-1.5 2.5-4.8 3.3-7.3 1.8-15.7-9.6-35.6-11.8-58.9-6.5-2.9.7-5.8-1.2-6.5-4.1-.7-2.9 1.2-5.8 4.1-6.5 25.6-5.9 47.5-3.3 65.1 7.4 2.5 1.5 3.3 4.8 1.8 7.3zm10.2-22.8c-1.9 3.1-6 4.1-9.1 2.2-18-11-45.4-14.2-66.6-7.7-3.5 1.1-7.1-1-8.2-4.5-1.1-3.5 1-7.1 4.5-8.2 24.3-7.4 54.7-3.7 75.2 8.9 3.1 1.9 4.1 6 2.2 9.3zm.9-23.9c-21.6-12.8-57.1-14-77.6-7.8-3.3 1-6.8-1-7.8-4.3s1-6.8 4.3-7.8c23.7-7.2 63-5.8 87.8 8.9 3 1.8 4 5.7 2.2 8.7-1.8 3-5.7 4-8.7 2.3z"/>
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-10 tracking-tight text-center">
          Welcome back
        </h1>

        {/* Form Section */}
        <div className="w-full space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Email</label>
            <input 
              type="email" 
              className="bg-[#121212] border border-[#727272] rounded-[4px] px-3 py-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              placeholder="Email"
            />
          </div>

          <button className="w-full bg-[#1ed760] hover:bg-[#1fdf64] text-black font-bold py-3 rounded-full transition-transform active:scale-95">
            Continue
          </button>
        </div>

        {/* Divider */}
        <div className="w-full flex items-center my-6">
          <div className="flex-grow border-t border-[#292929]"></div>
          <span className="px-4 text-sm font-bold">or</span>
          <div className="flex-grow border-t border-[#292929]"></div>
        </div>

        {/* Social Buttons */}
        <div className="w-full space-y-3">
          <SocialButton icon={<FaMobileAlt />} text="Continue with phone number" />
          <SocialButton icon={<FaGoogle className="text-red-500" />} text="Continue with Google" />
          <SocialButton icon={<FaFacebook className="text-blue-600" />} text="Continue with Facebook" />
          <SocialButton icon={<FaApple />} text="Continue with Apple" />
        </div>

        {/* Footer */}
        <div className="mt-10 pt-10 border-t border-[#292929] w-full text-center">
          <p className="text-[#a7a7a7]">
            Don't have an account? 
            <button className="text-white hover:text-[#1ed760] underline ml-1 font-bold">Sign up</button>
          </p>
        </div>

        <p className="mt-12 text-[11px] text-[#a7a7a7] text-center leading-relaxed">
          This site is protected by reCAPTCHA and the Google 
          <a href="#" className="underline mx-1">Privacy Policy</a> and 
          <a href="#" className="underline mx-1">Terms of Service</a> apply.
        </p>

      </div>
    </div>
  );
};

// Helper Component for Social Buttons
const SocialButton = ({ icon, text }) => (
  <button className="w-full flex items-center justify-center gap-3 border border-[#727272] hover:border-white bg-transparent py-3 px-8 rounded-full font-bold transition-all relative">
    <span className="absolute left-6 text-xl">{icon}</span>
    <span className="text-sm">{text}</span>
  </button>
);

export default LoginPage;