
import { useEffect, useRef } from "react";
// import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { markdownify } from "@lib/utils/textConverter";
import ImageFallback from "@layouts/components/ImageFallback";
import Banner from "./components/Banner";
import Link from "next/link";
import Image from 'next/image'
// import { Link } from "feather-icons-react/build/IconComponents";

const Domesticpackages = ({data, banner, brands, features, intro, speciality, testimonial }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const banner = document.querySelector(".banner");
//       const bannerBg = document.querySelector(".banner-bg");
//       const bannerContent = document.querySelector(".banner-content");
//       const header = document.querySelector(".header");
//       const tl = gsap.timeline();

//       tl.fromTo(
//         ".banner-title",
//         { y: 20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
//       )
//         .fromTo(
//           ".banner-btn",
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.5 },
//           ">-0.4"
//         )


//   const parallaxTl = gsap.timeline({
//     ease: "none",
//     scrollTrigger: {
//       trigger: banner,
//       start: () => `top ${header.clientHeight}`,
//       scrub: true,
//     },
//   });

// });

// return () => ctx.revert();
// }, []);

const { frontmatter } = data;
const { title } = frontmatter;

  return (
    <>
    <section className="section sectiondomestic" >
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
                  <Image src="/images/domestictoure/touregoa.jpeg"  alt="com." 
                   width={500}
                   height={500}/>                     
                    <h3 className="h4 mt-6 mb-5">Goa</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/domestictoure/tourgujrat1.png"  alt="com." 
                   width={500}
                   height={500}/>
                  
                    <h3 className="h4 mt-6 mb-5">Gujrat</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                 
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/domestictoure/tourkerala2.png"  alt="com." 
                   width={500}
                   height={500}/>
                  
                    <h3 className="h4 mt-6 mb-5">Kerala</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                 
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/domestictoure/toureladhakh.jpeg"  alt="com." 
                   width={500}
                   height={500}/>
                  
                    <h3 className="h4 mt-6 mb-5">Ladakh</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/domestictoure/toureshikkim.jpeg"  alt="com." 
                   width={500}
                   height={500}/>
                  
                    <h3 className="h4 mt-6 mb-5">Shikkim</h3>
                    <Link href="https://wa.me/919575130999?text=Hi" >
                    <button className="btn btn-primary">more..</button>
                    </Link>
                
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="feature-card m-4 rounded-md border border-transparent py-16 p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                
                  <Image src="/images/domestictoure/toureshimla.jpg"  alt="com."
                   width={500}
                   height={500} />
                  
                    <h3 className="h4 mt-6 mb-5">Shimla</h3>
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

export default Domesticpackages;
