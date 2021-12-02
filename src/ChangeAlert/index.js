import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);

  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button
          onClick={() => toggleShow(false)}  
        >Volver a cargar la información</button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert }
