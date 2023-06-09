import React from 'react';
import {CarProps} from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <div>

    </div>
  );
};

export default CarDetails;
// by Rokas with ❤️
