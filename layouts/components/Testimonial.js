import React from 'react';

import ImageFallback from "@layouts/components/ImageFallback";

import { markdownify } from "@lib/utils/textConverter";

import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



const Testimonial = ({ testimonial }) => {
  return (
    <section className="text-neutral-700 dartext-neutral-300">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>
      <div className="grid gap-6 text-center md:grid-cols-3">
        <div>
          <div
            className="block rounded-lg bg-white shadow-lg darbg-neutral-700 darshadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
            <div
              className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white darborder-neutral-800 darbg-neutral-800">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
              <hr />
              <p className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                Lorem ipsum dolor sit amet eos adipisci, consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="block rounded-lg bg-white shadow-lg darbg-neutral-700 darshadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
            <div
              className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white darborder-neutral-800 darbg-neutral-800">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
              <hr />
              <p className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                Neque cupiditate assumenda in maiores repudi mollitia
                architecto.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="block rounded-lg bg-white shadow-lg darbg-neutral-700 darshadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
            <div
              className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white darborder-neutral-800 darbg-neutral-800">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
              <hr />
              <p className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                Delectus impedit saepe officiis ab aliquam repellat rem unde
                ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;





