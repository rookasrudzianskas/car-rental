import Image from 'next/image'
import React from "react";
import {CustomFilter, Hero, SearchBar} from "@/components";
import {fetchCars} from "@/utils";
import {HomeProps} from "@/types";

export default async function Home({searchParams}: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });


  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title="Fuel"/>
            <CustomFilter title="Year"/>
          </div>
        </div>
      </div>
    </main>
  )
}
