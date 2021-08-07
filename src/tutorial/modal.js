import React from "react";

export const Modal = ({ modalContent, removemodal }) => {
  React.useEffect(() => {
    setTimeout(() => {
      removemodal();
    }, 3000);
  },[]);
  return <div>{modalContent}</div>;
};
