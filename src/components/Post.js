import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <main className='min-h-screen p-12'>
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='w-full h-full roundeed-r object-cover absolute'
                    />
                    <span className='block relative h-full flex jsutify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-800 textlg font-blog px-3 py-3 bg-white rounded'>
                        {post.title}
                      </h3>
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
