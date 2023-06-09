"use client";
import React, {useState} from 'react';
import {CarProps} from "@/types";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({car}: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>
          Car Rent...
        </span>
      </p>
    </div>
  );
};

export default CarCard;
// by Rokas with ❤️
