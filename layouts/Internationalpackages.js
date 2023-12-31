
import { useEffect, useRef } from "react";
// import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { markdownify } from "@lib/utils/textConverter";
import ImageFallback from "@layouts/components/ImageFallback";
import Banner from "./components/Banner";
import Link from "next/link";
import Image from 'next/image'

const Internationalpackages = ({data, banner, brands, features, intro, speciality, testimonial }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);



const { frontmatter } = data;
const { title } = frontmatter;

  return (
    <>
    <section className="section sectiondomestic">
      <Banner title={title} />
    <div className="container text-center">
      <div className="animate">
        {/* <p className="uppercase"> Most Popular</p> */}
      
        {/* {markdownify(features.title, "h2", "mt-4 section-title")} */}
        {/* {markdownify(features.description, "p", "mt-10")} */}
      </div>
      <div className="animate from-right relative mt-8">
        <Swiper
          slidesPerView={1}
          pagination={{
            type: "bullets",
            el: paginationRef.current,
            clickable: true,
            dynamicBullets: true,
          }}
          // autoplay={{ delay: 3000 }}
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = paginationRef.current;
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                  <Image src="/images/internationaltour/malasiya.jpg"    width={500}
                    height={500} alt="com" />                     
                    <h3 className="h4 mt-6 mb-5">Malaysia</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/internationaltour/vietnam.jpg"    width={500}
                    height={500} alt="com" />
                  
                    <h3 className="h4 mt-6 mb-5">Vietnam</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                 
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/internationaltour/dubai.jpg"    width={500}
                    height={500} alt="com" />
                  
                    <h3 className="h4 mt-6 mb-5">Dubai</h3>
                 
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/internationaltour/bali.jpg"    width={500}
                    height={500} alt="com" />
                  
                    <h3 className="h4 mt-6 mb-5">Bali</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/internationaltour/turkey.jpg"    width={500}
                    height={500} alt="com" />
                  
                    <h3 className="h4 mt-6 mb-5">Turkey</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/internationaltour/maldiev.jpg"    width={500}
                    height={500} alt="com" />
                  
                    <h3 className="h4 mt-6 mb-5">Maldives</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                
              </div>
            </SwiperSlide>
         
        </Swiper>
        <div className="relative mt-9 flex justify-center">
          <div className="pagination " ref={paginationRef}></div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default Internationalpackages;
