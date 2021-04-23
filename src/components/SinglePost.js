import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import moment from "moment";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        publishedAt,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className='min-h-screen p-4'>
      <article className='md:container md:mx-auto bg-gray-100 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center'>
            <div className='bg-white bg-opacity-75 rounded p-8'>
              <h1 className='text-2xl lg:text-6xl mb-4'>{singlePost.title}</h1>
              <div className='flex justify-center text-gray-800'>
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className='w-10 h-10 rounded-full'
                />
                <p className='flex items-center pl-2 text-xl '>
                  {singlePost.name +
                    " | " +
                    moment(singlePost.publishedAt).format("DD MMMM YYYY")}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className='w-full object-cover rounded-t'
            style={{ height: "400px" }}
          />
        </header>
        <div className='px-4 lg:px-6 py-4 lg:py-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto'>
          <BlockContent
            blocks={singlePost.body}
            projectId='y7iq2wpp'
            dataset='production'
          />
        </div>
      </article>
    </main>
  );
}
