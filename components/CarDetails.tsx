import React, {Fragment} from 'react';
import {CarProps} from "@/types";
import {Transition} from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>

      </Transition>
    </>
  );
};

export default CarDetails;
// by Rokas with ❤️
