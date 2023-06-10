"use client"
import React, {Fragment, useState} from 'react';
import {CustomFilterProps} from "@/types";
import {useRouter} from "next/navigation";
import {Listbox, Transition} from "@headlessui/react";
import Image from "next/image";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {

  }

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >

          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
// by Rokas with ❤️
