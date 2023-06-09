import React, {useState} from 'react';
import {CarProps} from "@/types";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({car}: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

    </div>
  );
};

export default CarCard;
// by Rokas with ❤️
