import React from "react";

const Input = ({ name, label, register, rules, error, ...props }) => {
  return (
  <div className="flex flex-col w-full gap-2 mb-4">
      {/* Label - Spotify labels are small, bold, and slightly grey-white */}
      <label className="text-[0.875rem] font-bold text-white leading-6">
        {label}
      </label>

      <div className="relative">
        <input
          {...register(name, rules)}
          className={`
            w-full bg-[#121212] text-white px-3 py-3 rounded-[4px] 
            border transition-all duration-200 outline-none
            placeholder:text-[#7c7c7c] text-[1rem]
            /* Standard state - slightly lighter border than background */
            ${error ? 'border-[#f15e6c]' : 'border-[#727272] hover:border-white focus:border-[#1ed760] focus:border-2'}
          `}
          {...props}
        />
      </div>

      {/* Error Message - Spotify uses a specific red */}
      {error && (
        <p className="text-[#f15e6c] text-[0.875rem] mt-2 flex items-center gap-2">
          <span className="bg-[#f15e6c] text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">!</span>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
