import React from "react";

function SilabaItem({ silaba }) {
  return (
    <div className="font-display uppercase px-6 py-4 border border-gray-300 rounded-md bg-gray-100 text-center text-3xl">
      {silaba}
    </div>
  );
}

export { SilabaItem }