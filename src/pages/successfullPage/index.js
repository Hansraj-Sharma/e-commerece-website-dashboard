import React, { useState } from "react";
import ExportSuccessfull from "../../components/exportSuccessfull";

const SuccessfullPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return <>{isVisible && <ExportSuccessfull onClose={handleClose} />}</>;
};

export default SuccessfullPage;
