import React from 'react';
import {CarProps} from "@/types";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({car}: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return (
    <div>

    </div>
  );
};

export default CarCard;
// by Rokas with ❤️
