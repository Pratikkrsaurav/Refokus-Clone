import React from 'react';
import Button from './Button';

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex justify-between items-center px-6 border-b-1 border-zinc-700'>
     <div className='nleft flex items-center'>
         <img
        src="https://cdn.prod.website-files.com/60d4936dc6a4eb2166d0f114/6136881a5fa4d5683ddf9dd1_Tools.svg"
        alt="Logo"
        className="h-6"
      />

      <div className='links flex gap-14 items-center ml-20'>
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={`divider-${index}`} className='w-[2px] h-7 bg-zinc-700'></span>
          ) : (
            <a
              key={elem}
              href="#"
              className='text-sm font-regular flex items-center gap-1 hover:text-green-400 transition'
            >
              {index === 1 && (
                <span className='inline-block w-1 h-1 rounded-full bg-green-300 shadow-[0_0_4px_#00FF19]'></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
     </div>
     <Button />
    </div>
  );
}

export default Navbar;
