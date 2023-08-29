import React from "react";
import { MdPets } from "react-icons/md";

const Huellitas = ({ currentStep }) => {
  return (
    <div className="container__steps">
      <div
        className={`container__step step-1 ${currentStep >= 1 ? "active" : ""}`}
      >
        <MdPets />
      </div>
      <div
        className={`container__step step-2 ${currentStep >= 2 ? "active" : ""}`}
      >
        <MdPets />
      </div>
      <div
        className={`container__step step-3 ${currentStep >= 3 ? "active" : ""}`}
      >
        <MdPets />
      </div>
      <div
        className={`container__step step-4 ${currentStep >= 4 ? "active" : ""}`}
      >
        <MdPets />
      </div>
    </div>
  );
};

export default Huellitas;
