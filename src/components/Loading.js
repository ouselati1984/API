import React from "react";

//pour l'utilisation de boostrap spinner :on change classe par className
const Loading = () => {
  return (
    <div
      className="spinner-border text-primary position-absolute top-50 start-50 "
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
