import React from "react";


function ListadoSilabas({ children }) {
  return (
    <div className="flex p-4 space-x-2 items-center justify-center">
      {children}
    </div>
  )
}

export { ListadoSilabas }