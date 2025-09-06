import React from "react";


function ListadoSilabas({ children }) {
  return (
    <div className="flex flex-wrap p-4 space-x-2 space-y-2 items-center justify-center">
      {children}
    </div>
  )
}

export { ListadoSilabas }