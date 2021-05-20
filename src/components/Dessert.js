import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import ReactCountryFlag from "react-country-flag";

export default function Dessert() {
  const [dessertData, setDessert] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "dessert"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
              },
              publishedAt,
              ctry
        }`
      )
      .then((data) => setDessert(data))
      .catch(console.error);
  }, []);
  return (
    <main className='min-h-screen pt-4'>
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {dessertData &&
            dessertData.map((dessert, index) => (
              <article>
                <Link
                  to={"/recipe/" + dessert.slug.current}
                  key={dessert.slug.current}
                >
                  <span
                    className='block h-64 relative shadow leading-snug'
                    key={index}
                  >
                    <img
                      src={dessert.mainImage.asset.url}
                      alt={dessert.mainImage.alt}
                      className='w-full h-full roundeed-r object-cover absolute'
                    />
                    <span className='block relative h-full w-full flex justify-end items-end'>
                      <p className='text-gray-800 font-blog px-1 py-1 mt-8 bg-white rounded text-center	w-full'>
                        <ReactCountryFlag
                          countryCode={dessert.ctry}
                          svg
                          style={{
                            width: "1em",
                            height: "1em",
                          }}
                          title={dessert.ctry}
                        />
                        {" " + dessert.title}
                      </p>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
