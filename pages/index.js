import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import VideoPopup from "@layouts/components/VideoPopup";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Social from "@components/Social";
import social from "@config/social.json";
import { IoMail, IoCall, IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";
import Homecta from "@layouts/components/Homecta";
import Officeadd from "@layouts/components/Officeadd";
// import Reviews from "@layouts/components/Reviews";
import Testimonial from "@layouts/components/Testimonial";


const Home = ({ banner, brands, features, intro, speciality, testimonial, servicehome }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
      // .fromTo(
      //   ".banner-img",
      //   {
      //     y: 20,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 0.5,
      //   },
      //   ">-.5"
      // );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      // const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      // parallaxTl
      //   .fromTo(
      //     bannerBg,
      //     {
      //       y: 0,
      //     },
      //     {
      //       y: -position,
      //     }
      //   )
      //   .fromTo(
      //     bannerContent,
      //     {
      //       y: 0,
      //     },
      //     {
      //       y: position,
      //     },
      //     "<"
      //   )
      //   .fromTo(
      //     ".banner-bg .circle",
      //     {
      //       y: 0,
      //     },
      //     {
      //       y: position,
      //     },
      //     "<"
      //   );
    });

    return () => ctx.revert();
  }, []);

  // let heroimg={
  //   backgroundImage: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   width: "1522px",
  //   height:" 687px",
  //   filter: "blur(1px)" 
  // }


  return (
    <Base>
      {/* <div id="mySidenav" className="sidenav fixed-top">
                <a href="#" id="blog" className="trxt-dark">Contact</a>
            </div> */}
      <a href="https://wa.me/919971565508?text=Hi" className="float" target="_blank">
        {/* <i className="fa fa-whatsapp my-float"></i> */}
        <IoLogoWhatsapp style={{ marginTop: "15px", marginLeft: "14px" }} />
      </a>


      {/* Home Banner */}

      <section className="section banner pt-0 pb-0" style={{ marginTop: "-38px" }}>
        {/* <div className="container-xl">
          <div className=" relative">
            <div className="bg-theme banner-bg bannerimg absolute top-0 left-0">
              <Image src="./images/rockbanner12.jpg" 
                className="heroimg"
              >              
              </img>
            </div>
            <div className="row overflow-hidden ">
              <div className="col-12">
                <div className="row relative justify-center pb-10">
                  <div className="banner-content col-10 pt-20 pb-10 text-center textbannertop mt-8" >
                    {markdownify(
                      banner.title, 
                      "h1",
                      " banner-title opacity-0 text-white"
                      
                    )}
                    
                    
                  </div>
                 
                </div>
              </div>
            </div>

          </div>
        </div> */}
        <div className="bg-image">
        </div>
        <div className="bg-textt">
          <div className="moto">
            {markdownify(
              banner.title,
              "h1",
              " banner-title opacity-0 text-white"
            )}
            {markdownify(
              banner.subtitle,
              "p",
              " banner-title opacity-0 text-white font-thin"
            )}
          </div>
          <div className="mt-4 " >
            {/* <button type="submit" name="singlebutton" className="btn btn-white-bordered btn-lg inputbox inqbtn font-thin me-3" style={{ height: "52px",background: "transpare", }}>Contact Us</button> */}
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <button className="me-3 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" style={{ height: "52px" }}>
                Contact Us
              </button>
            </a>
            <button className="me-3 bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" style={{ height: "52px" }}>
              Read More
            </button>
            {/* <button type="submit" name="singlebutton" className="btn btn-primary btn-lg inputbox inqbtn font-thin" style={{ height: "52px" }}>Read More</button> */}
          </div>
        </div>
      </section>

      {/*End Home Banner */}

      {/* <div>
        <div className="bg-default enquiry-form  bg-light  text-center inq">
          <div className="container containerc">
            <div className="row roww">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xl12">

                <form>
                  <div className="row roww">
                    <div className="col">
                      <div className="form-group">
                        <label className="control-label sr-only" for="select"></label>
                        <div className="select">
                          <select id="select" name="city" className="form-control form-controll inputbox">
                            <option value="">Where you want to go</option>
                            <option value="">Singapore</option>
                            <option value="">Thailand</option>
                            <option value="">Vietnam</option>
                            <option value="">Dubai</option>
                            <option value="">Malaysia</option>
                            <option value="">Bali</option>
                            <option value="">Goa</option>
                            <option value="">Gujrat</option>
                            <option value="">Kerala</option>
                            <option value="">Ladakh</option>
                            <option value="">Shikkim</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label className="control-label sr-only" for="datepicker"></label>
                        <div className="input-group">
                          <input id="datepicker" name="datepicker" type="text" placeholder="Date" className="form-control form-controll hasDatepicker inputbox" required="" />
                          <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label className="control-label sr-only" for="select"></label>
                        <div className="select">
                          <select id="select" name="select" className="form-control inputbox">
                            <option value="">Number of Peoples</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <button type="submit" name="singlebutton" className="btn btn-primary btn-xlg inputbox inqbtn" style={{ height: "62px" }}>Enquiry Now</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="banner-btn opacity-0">
                      <Link className="btn btn-primary" href={banner.link.href}>
                        {banner.link.label}
                      </Link>
                    </div> */}
      {/* <div className="col-10">
                    <ImageFallback
                      className="banner-img opacity-0"
                      src={banner.image}
                      width={1170}
                      height={666}
                      priority={true}
                      alt="comsecurity"
                    />
                  </div> */}


      {/* WE Provide */}
      {/* <section className="section sectionhome" >
        <div className="container text-center">
          <div className="animate">
            
            {markdownify(features.title, "h2", "mt-4 section-title")}
            {markdownify(features.description, "p", "mt-10")}
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
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide >
                <div className="feature-card m-4 rounded-md border border-transparent  p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none
                rounded-t-2xl">
                  <Image src="/images/comsecurity/services/comservice2.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-t-2xl"
                  />
                  <h3 className="h5 mt-6 mb-5">Security Guard</h3>

                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="rounded-t-2xl feature-card m-4 rounded-md border border-transparent  p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">

                  <Image src="/images/comsecurity/services/comservice5.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-t-2xl"
                  />

                  <h3 className="h5 mt-6 mb-5">House Keeping</h3>


                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className=" rounded-t-2xl feature-card m-4 rounded-md border border-transparent  p shadow-[0px_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">

                  <Image src="/images/comsecurity/services/comservice7.jpg" width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-t-2xl" />

                  <h3 className="h5 mt-6 mb-5">Personal Bodyguard</h3>


                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="rounded-t-2xl feature-card m-4 rounded-md border border-transparent  p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">

                  <Image src="/images/comsecurity/services/comservice4.jpg"
                    width={500}
                    height={500}
                    className="rounded-t-2xl"
                    alt="com." />

                  <h3 className="h5 mt-6 mb-5">Security</h3>


                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="rounded-t-2xl feature-card m-4 rounded-md border border-transparent  p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                  <Image src="/images/comsecurity/services/comservice3.jpg"
                    width={500}
                    height={500}
                    className="rounded-t-2xl"
                    alt="com." />
                  <h3 className="h5 mt-6 mb-5">PSO</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className=" rounded-t-2xl feature-card m-4 rounded-md border border-transparent  p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">

                  <Image src="/images/comsecurity/services/comservice6.jpg" width={500}
                    height={500}
                    className="rounded-t-2xl"
                    alt="comsecurity"
                  />

                  <h3 className="h5 mt-6 mb-5">Security Supervisor</h3>


                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="rounded-t-2xl feature-card m-4 rounded-md border border-transparent  p shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none
                border-top-right-radius: 19px;
                border-top-left-radius: 19px;
                
                ">

                  <Image src="/images/comsecurity/services/comservice2.jpg" width={500}
                    height={500}
                    className="rounded-t-2xl"
                    alt="comsecurity"
                  />

                  <h3 className="h5 mt-6 mb-5">Bouncer</h3>


                </div>
              </SwiperSlide>


            </Swiper>

            <div className="relative mt-9 flex justify-center">
              <div className="pagination " ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </section> */}



      {/* Short Into */}
      {/* <section className="section pt-0">
        <div className="container-xl">
          <div className="relative px-4 py-[70px]">
            <div className="text-center">
              <div className="animate">
                <p>{intro.subtitle}</p>
                {markdownify(intro.title, "h2", "mt-4 section-title")}
                {markdownify(intro.description, "p", "mt-10")}
              </div>
              <div className="mx-auto mt-10 h-full max-h-[394px] w-full max-w-[716px]">
                <VideoPopup id={intro.video_id} thumbnail={intro.thumbnail} />
              </div>
            </div>
            <div className="bg-theme absolute top-0 left-0 w-full">
              <Circle
                className="left-[10%] top-12"
                width={32}
                height={32}
                fill={false}
              />
              <Circle className="left-[3%] top-[30%]" width={85} height={85} />
              <Circle
                className="left-[22%] bottom-[52%]"
                width={20}
                height={20}
              />
              <Circle
                className="left-[15%] bottom-[35%]"
                width={47}
                height={47}
                fill={false}
              />
              <Circle
                className="left-[6%] bottom-[6%]"
                width={62}
                height={62}
                fill={false}
              />
              <Circle
                className="right-[12%] top-[12%]"
                width={20}
                height={20}
              />
              <Circle
                className="right-[2%] top-[30%]"
                width={73}
                height={73}
                fill={false}
              />
              <Circle
                className="right-[19%] top-[50%]"
                width={37}
                height={37}
                fill={false}
              />
              <Circle
                className="right-[33%] top-[52%]"
                width={20}
                height={20}
              />
              <Circle
                className="right-[5%] bottom-[18%]"
                width={65}
                height={65}
              />
            </div>
          </div>
        </div>
      </section> */}


      {/* About Us */}
      <section className="section">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-2">
              <Image
                className="mx-auto"
                src="/images/comsecurity/banner/cm.jpg"
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              {/* {markdownify(
                speciality.primary.title,
                "h2",
                "mt-4 section-title bar-left"
              )} */}
              <div className="mt-4 section-title bar-left flex"> <h2 className="" style={{ color: "red", marginRight: "10px" }}>About</h2> <h2>Our Company</h2></div>
              {markdownify(speciality.primary.description, "p", "mt-10")}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="">
                  <div>
                    <h2>250</h2>
                  </div>
                  <div className="mt-3">
                    <h6>Projects Done</h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h2>260</h2>
                  </div>
                  <div className="mt-3">
                    <h6>Happy Client</h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h2>240</h2>
                  </div>
                  <div className="mt-3">
                    <h6>Our Employees</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* <Reviews /> */}


      {/* Our Services */}

      <section className="pt-8">
        <div className="animate text-center">
          <p className="uppercase mt-8 " style={{ color: "blue", fontWeight: "700" }}>{servicehome.sub_title}</p>
          {markdownify(servicehome.title, "h2", "mt-3 section-title")}
          {markdownify(servicehome.description, "p", "mt-10")}

        </div>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-4 mt-5 container">

          <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          {/* <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img
    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
    className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div> */}
            <a href="#">
              <Image width={500} height={500} className="rounded-t-lg  transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security1.jpg"

                alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>SECURITY GUARD</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Trained Security Guard</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>



          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security2.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>HOUSEKEEPING</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Best Quality Staff</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>



          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-8 
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security3.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>SECURITY SUPERVISOR</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Authorized License</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-8 
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security4.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>PSO</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Authorized License</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-8 
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security1.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>SECURITYS</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Authorized License</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-8 
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security5.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>PERSONAL BODYGUARD</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Fully Traned</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-8 
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security6.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>BOUNCER</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Knowledgeble Experts</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-8 
          relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/parking.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "18px" }}>Office Security</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Knowledgeble Experts</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* why choose */}

      <section >
        <div className="">
          <div className="row items-center  " style={{ backgroundColor: "#ddd" }}>
            <div className="animate lg:col-6 lg:order-1">
              <Image
                className="mx-auto"
                src="/images/about/comabout12.png"
                width={673}
                height={500}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-2 " style={{ backgroundColor: "#ddd" }}>
              {/* {markdownify(
                  speciality.primary.title,
                  "h2",
                  "mt-4 section-title bar-left"
                )} */}
              <div className="  flex mb-6 mt-5"> <h2 className="" style={{ color: "red", marginRight: "10px" }}>Why</h2><h2> Choose Us</h2></div>


              <div className="grid  md:grid-cols-2 " >
                <figure className="flex flex-col      ">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">

                    <div className="max-w-sm    ">
                      <div className="" style={{ paddingRight: "204px" }} >
                        <Image
                          className="mx-auto "
                          src="/images/comsecurity/services/whyicon1.png"
                          width={60}
                          height={60}
                          alt="primary speciality"
                        />
                      </div>
                      <a href="#">
                        <h5 className="mb-2 mt-3 text-2xl  tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}>24/7 Support</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400" style={{ fontSize: "14px" }}>Simply dummy text of the printing andrety esetting industry.Lorem ipsum dolor sit amet, ligula magna at etiam.</p>

                    </div>
                  </blockquote>

                </figure>
                <figure className="flex flex-col  rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">

                    <div className="max-w-sm   ">
                      <div className="" style={{ paddingRight: "204px" }} >
                        <Image
                          className="mx-auto "
                          src="/images/comsecurity/services/whyicon2.png"
                          width={60}
                          height={60}
                          alt="primary speciality"
                        />
                      </div>
                      <a href="#">
                        <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}>Expert Employees</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400" style={{ fontSize: "14px" }}>
                        Our Team comprises of security professionals with background in Armed Forces, Para Military Forces and Police. Their experience and insight within the security industry are unmatched.</p>

                    </div>
                  </blockquote>

                </figure>
                <figure className="flex flex-col    rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">

                    <div className="max-w-sm    ">
                      <div className="" style={{ paddingRight: "204px" }}>
                        <Image
                          className="mx-auto "
                          src="/images/comsecurity/services/whyicon3.png"
                          width={60}
                          height={60}
                          alt="primary speciality"
                        />
                      </div>
                      <a href="#">
                        <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}> Verified Service</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400" style={{ fontSize: "14px" }}>
                        • Police <br />
                        • Discharge Book <br />
                        • Bio-Data<br />
                        • References.
                      </p>

                    </div>
                  </blockquote>

                </figure>
                <figure className="flex flex-col border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">

                    <div className="max-w-sm    ">
                      <div className="" style={{ paddingRight: "204px" }}>
                        <Image
                          className="mx-auto "
                          src="/images/comsecurity/services/whyicon4.png"
                          width={60}
                          height={60}
                          alt="primary speciality"
                        />
                      </div>
                      <a href="#">
                        <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}>Secured Service</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400" style={{ fontSize: "14px" }}>Simply dummy text of the printing andrety esetting industry.Lorem ipsum dolor sit amet, ligula magna at etiam.</p>

                    </div>
                  </blockquote>

                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Services */}

      {/* Why Choose Us */}
      {/* <section className="section">
        <div className="">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-1">
              <Image
                className="mx-auto"
                src="/images/about/comabout.jpg"
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-2">
              {markdownify(
                speciality.primary.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.primary.description, "p", "mt-10")}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="">
                  <div>
                    <h2>250</h2>
                  </div>
                  <div className="mt-3">
                      <h6>Projects Done</h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h2>260</h2>
                  </div>
                  <div className="mt-3">
                      <h6>Happy Client</h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h2>240</h2>
                  </div>
                  <div className="mt-3">
                      <h6>Our Employees</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Why Choose Us */}

      {/* Testimonial */}


      <section className="section pt-5" style={{backgroundColor:"#fbfbf6"}}>
        <div className="container " >

          <div className="animate row mt-10 items-center justify-center">
            <div className="xl:col-11">
              <div className="row items-center justify-center">

                <div className="md:col-6 lg:col-6 xl:col-6  shadow-lg pe-0 ps-0 lg:order-2">
                  <div className="">
                    {
                      <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                          el: testimonialPaginationRef.current,
                          type: "bullets",
                          dynamicBullets: true,
                          clickable: true,
                        }}
                        autoplay={{ delay: 3000 }}
                        onBeforeInit={(swiper) => {
                          swiper.params.pagination.el =
                            testimonialPaginationRef.current;
                        }}
                        className="testimonial-slider mx-auto  cursor-pointer lg:max-w-[650px]"
                      >
                        {testimonial.list.map((item, index) => (
                          <SwiperSlide
                            className="text-center"
                            key={"testimonial-" + index}
                          >


                           
                            <div>
                              <div
                                className="block rounded-lg bg-white dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                                <div
                                  className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                  {/* <img
                                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" /> */}
                                  {/* <div className="mt-7 inline-block rounded-md bg-body p-7 shadow-[0_10px_50px_rgba(0,0,0,.08)] md:mt-5 lg:mt-8 xl:mt-5"> */}
                                  <ImageFallback
                                    className=""
                                    src={item.avatar}
                                    width={90}
                                    height={90}
                                    priority={true}
                                    alt={item.author}
                                  />

                                  {/* </div> */}
                                </div>

                                <div className="p-6">
                                  {/* <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4> */}
                                  <h6>{item.author}</h6>
                                  <p>{item.profession}</p>
                                  <hr />
                                 
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      className="inline-block h-7 w-7 pr-2"
                                      viewBox="0 0 24 24">
                                      <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    {/* <TbQuote className="mx-auto rotate-180 text-5xl text-body sm:text-6xl lg:text-8xl" /> */}
                                    {markdownify(
                                      item.content,
                                      "p",
                                      // "text-[17px] lg:text-lg text-body mt-4 md:mt-5 xl:mt-8"
                                    )}
                                
                                </div>
                              </div>
                            </div>

                          </SwiperSlide>
                        ))}
                      </Swiper>
                    }
                    <div className="relative h-8">
                      <div
                        className="pagination absolute left-1/2 -translate-x-1/2"
                        ref={testimonialPaginationRef}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="animate lg:col-5 lg:order-1">
                  <div className="animate text-center">
                    <p className="text-start" style={{color: "blue", fontWeight: "700"}}>{testimonial.subtitle}</p>
                    {/* <h2 className="mt-4 text-start ">{testimonial.title}</h2> */}
                    {markdownify(testimonial.title, "h2", "mt-4  text-start")}
                    {/* {markdownify(testimonial.description, "p", "mt-10")} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section pt-5">
        <div className="container">
          <div className="animate text-center">
            <p>{testimonial.subtitle}</p>
            {markdownify(testimonial.title, "h2", "mt-4 section-title")}
            {markdownify(testimonial.description, "p", "mt-10")}
          </div>
          <div className="animate row mt-10 items-center justify-center">
            <div className="xl:col-11">
              <div className="row items-center justify-center">              
                <div className="md:col-7 lg:col-6 xl:col-4">
                  {
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{
                        el: testimonialPaginationRef.current,
                        type: "bullets",
                        dynamicBullets: true,
                        clickable: true,
                      }}
                      autoplay={{ delay: 3000 }}
                      onBeforeInit={(swiper) => {
                        swiper.params.pagination.el =
                          testimonialPaginationRef.current;
                      }}
                      className="testimonial-slider mx-auto max-w-[420px] cursor-pointer lg:max-w-[480px]"
                    >
                      {testimonial.list.map((item, index) => (
                        <SwiperSlide
                          className="text-center"
                          key={"testimonial-" + index}
                        >
                          
                          
                          <div className="py-6 px-8 sm:py-12 md:px-10 lg:px-20 xl:px-12">
                         
                            <TbQuote className="mx-auto rotate-180 text-5xl text-body sm:text-6xl lg:text-8xl" />
                            {markdownify(
                              item.content,
                              "p",
                              "text-[17px] lg:text-lg text-body mt-4 md:mt-5 xl:mt-8"
                            )}
                             <div className="mt-7 inline-block rounded-md bg-body p-7 shadow-[0_10px_50px_rgba(0,0,0,.08)] md:mt-5 lg:mt-8 xl:mt-5">
                              <ImageFallback
                                className="mx-auto rounded-full"
                                src={item.avatar}
                                width={90}
                                height={90}
                                priority={true}
                                alt={item.author}
                              />
                              <h6>{item.author}</h6>
                              <p>{item.profession}</p>
                            </div>
                          </div>
                         
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  }
                  <div className="relative h-8">
                    <div
                      className="pagination absolute left-1/2 -translate-x-1/2"
                      ref={testimonialPaginationRef}
                    ></div>
                  </div>
                </div>           
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section className="section mt-5"> */}
        <Homecta />
      {/* </section> */}

      <section className="section">
        <Officeadd />
      </section>
      {/* Cta */}
      {/* <Cta /> */}
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial, servicehome } =
    frontmatter;

  return {
    props: {
      banner: banner,
      brands: brands,
      features: features,
      servicehome: servicehome,
      intro: intro,
      speciality: speciality,
      testimonial: testimonial,
    },
  };
};
