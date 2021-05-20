import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import ReactCountryFlag from "react-country-flag";

export default function Dinner() {
  const [dinnerData, setDinner] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "dinner"]{
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
      .then((data) => setDinner(data))
      .catch(console.error);
  }, []);

  return (
    <main className='min-h-screen pt-4'>
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {dinnerData &&
            dinnerData.map((dinner, index) => (
              <article>
                <Link
                  to={"/recipe/" + dinner.slug.current}
                  key={dinner.slug.current}
                >
                  <span
                    className='block h-64 relative shadow leading-snug'
                    key={index}
                  >
                    <img
                      src={dinner.mainImage.asset.url}
                      alt={dinner.mainImage.alt}
                      className='w-full h-full roundeed-r object-cover absolute'
                    />
                    <span className='block relative h-full w-full flex justify-end items-end'>
                      <p className='text-gray-800 font-blog px-1 py-1 mt-8 bg-white rounded text-center	w-full'>
                        <ReactCountryFlag
                          countryCode={dinner.ctry}
                          svg
                          style={{
                            width: "1em",
                            height: "1em",
                          }}
                          title={dinner.ctry}
                        />
                        {" " + dinner.title}
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
