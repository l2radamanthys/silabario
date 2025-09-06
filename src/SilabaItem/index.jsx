import React from "react";

function SilabaItem({ silaba }) {
  return (
    <div 
      className="
        font-display bg-secondary-100 uppercase px-6 py-4 border 
        border-secondary hover:bg-secondary hover:text-white rounded-md text-center text-3xl"
    >
      {silaba}
    </div>
  );
}

export { SilabaItem }