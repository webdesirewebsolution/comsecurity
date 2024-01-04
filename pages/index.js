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
// mail
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import Contactform from "@layouts/components/Contactform";



const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const Home = ({ banner, brands, features, intro, speciality, testimonial, servicehome }) => {


  // mail
  // const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    console.log(values);
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };




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
      // .fromTo(
      //   ".banner-btn",
      //   { y: 20, opacity: 0 },
      //   { y: 0, opacity: 1, duration: 0.5 },
      //   ">-0.4"
      // )
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
                <a href="#" id="blog" className="trxt-dar">Contact</a>
            </div> */}
      <a href="https://wa.me/919971565508?text=Hi" className="float" target="_blank">
        {/* <i className="fa fa-whatsapp my-float"></i> */}
        <IoLogoWhatsapp style={{ marginTop: "15px", marginLeft: "14px" }} />
      </a>


      {/* Home Banner */}




      <section className="section banner pt-0 pb-0" style={{ marginTop: "-38px" }}>
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
              banner.subtitlesub,
              "h3",
              " banner-title opacity-0 text-white "
            )}
            {markdownify(
              banner.subtitle,
              "p",
              " banner-title opacity-0 text-white font-thin"
            )}
          </div>
          <div className="mt-4 " >
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <button className="me-3 bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" style={{ height: "52px" }}>
                Contact Us
              </button>
            </a>
            <Link href="/about" >
              <button className="me-3 bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" style={{ height: "52px" }}>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/*End Home Banner */}



      {/* About Us */}
      <section className="section">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-2">
              <Image
                className="mx-auto"
                src="/images/comsecurity/com131.jpeg"
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              <div className="mt-4 section-title bar-left flex"> <h3 className="" style={{ color: "red", marginRight: "10px" }}>About</h3> <h3 className="">Our Company</h3></div>
              {markdownify(speciality.primary.description, "p", "mt-10 text-justify")}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="">
                  <div>
                    <h2>15+</h2>
                  </div>
                  <div className="mt-3">
                    <h6>Years in Business</h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h2>500+</h2>
                  </div>
                  <div className="mt-3">
                    <h6>Happy Clients</h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h2>128+</h2>
                  </div>
                  <div className="mt-3">
                    <h6>Licensed Officer</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* Our Services */}

      <section className="pt-8">
        <div className="animate text-center">
          <p className="uppercase mt-8 " style={{ color: "blue", fontWeight: "700" }}>{servicehome.sub_title}</p>
          {markdownify(servicehome.title, "h2", "mt-3 section-title")}
          {markdownify(servicehome.description, "p", "mt-10")}

        </div>
        <div className="grid mb-8  border-gray-200  shadow-sm  md:mb-12 md:grid-cols-4 mt-5 ">

          <div className="max-w-sm  border border-gray-200 rounded-lg shadow  m-4
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">

            <a href="#">
              <Image width={500} height={500} className="rounded-t-lg  transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/cmd61.jpg"

                alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 " style={{ fontSize: "18px" }}>SECURITY GUARD</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 ">Trained Security Guard</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank"
               className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500  inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar  bg-blue-700 rounded-2xl  focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
                Get Quote
                {/* <button className="me-3 bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" style={{ height: "52px" }}>
                Contact Us
              </button> */}
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>



          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow   m-4
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/housekeep.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "18px" }}>HOUSEKEEPING</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dar:text-gray-400">Best Quality Staff</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500 inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>



          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dar:bg-gray-800   m-4 
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/super.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "18px" }}>SECURITY SUPERVISOR</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dar:text-gray-400">Knowledgeble Experts</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500 inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dar:bg-gray-800   m-4 
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/security4.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "18px" }}>PSO</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dar:text-gray-400">Authorized License</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500 inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dar:bg-gray-800   m-4 
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/securityguard3.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "18px" }}>SECURITYS</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dar:text-gray-400">Authorized License</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500 inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dar:bg-gray-800   m-4 
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/bouncer121311.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "18px" }}>PERSONAL BODYGUARD</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dar:text-gray-400">Fully Traned</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500 inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dar:bg-gray-800   m-4 
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/bouncer111.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "18px" }}>BOUNCER</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dar:text-gray-400">The Ultimate Protector</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500 inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
                Get Quote
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dar:bg-gray-800   m-4 
          relative max-w-md overflow-hidden bg-cover bg-no-repeat">
            <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
              <Image width={500} height={500} className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110" src="/images/comsecurity/services/parking.jpg" alt="comsecurity" />
            </a>
            <div className="p-5">
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "18px" }}>Office Security</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dar:text-gray-400">Knowledgeble Experts</p>
              <a href="https://wa.me/919971565508? text=Hi, i wanna ask about something?" target="_blank" className="hover:text-white bg-transparent border border-red-500  hover:bg-red-500 inline-flex items-center px-3 py-2 text-sm font-small text-center text-dar bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dar:bg-blue-600 dar:hover:bg-blue-700 dar:focus:ring-blue-800">
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
        {/* <div > */}
        <div className="row items-center me-0 " style={{ backgroundColor: "#ddd" }}>
          <div className="animate lg:col-6 lg:order-1">
            <Image
              className="mx-auto"
              src="/images/comsecurity/com121.jpeg"
              width={673}
              height={500}
              alt="primary speciality"
            />
          </div>
          <div className="animate lg:col-5 lg:order-2 " style={{ backgroundColor: "#ddd" }}>
            <div className="  flex mb-6 mt-5"> <h2 className="" style={{ color: "red", marginRight: "10px" }}>Why</h2><h2> Choose Us</h2></div>
            <div className="grid  md:grid-cols-2 " >
              <figure className="flex flex-col      ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dar:text-gray-400">

                  <div className="max-w-sm  pe-5">
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
                      <h5 className="mb-2 mt-3 text-2xl  tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}>24/7 Support</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dar:text-gray-400" style={{ fontSize: "14px" }}>
                      Our trained professionals offer peace of mind, safeguarding your assets and ensuring safety at any hour. Your security, our commitment.
                    </p>

                  </div>
                </blockquote>

              </figure>
              <figure className="flex flex-col  rounded-tr-lg dar:bg-gray-800 ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dar:text-gray-400">

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
                      <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}>Expert Employees</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dar:text-gray-400" style={{ fontSize: "14px" }}>
                      Our Team comprises of security professionals with background in Armed Forces, Para Military Forces and Police. Their experience and insight within the security industry are unmatched.</p>

                  </div>
                </blockquote>

              </figure>
              <figure className="flex flex-col    rounded-bl-lg md:border-b-0 md:border-r dar:bg-gray-800 ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dar:text-gray-400">

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
                      <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}> Verified Service</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dar:text-gray-400" style={{ fontSize: "14px" }}>
                      • Police <br />
                      • Discharge Book <br />
                      • Bio-Data<br />
                      • References.
                    </p>

                  </div>
                </blockquote>

              </figure>
              <figure className="flex flex-col border-gray-200 rounded-b-lg md:rounded-br-lg dar:bg-gray-800 ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dar:text-gray-400">

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
                      <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight text-gray-900 dar:text-white" style={{ fontSize: "20px", fontFamily: "'Montserrat', sans-serif" }}>Secured Service</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dar:text-gray-400" style={{ fontSize: "14px" }}>

                      Our secured service goes above and beyond to ensure your safety and peace of mind. With a dedicated team of professionals and we provide unparalleled protection for your assets and well-being. </p>

                  </div>
                </blockquote>

              </figure>
            </div>
          </div>
        </div>
        {/* </div> */}
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


      <section className="section pt-5" style={{ backgroundColor: "#fbfbf6" }}>
        <div className="container " >

          <div className="animate row mt-10 items-center justify-center">
            <div className="xl:col-11">
              <div className="row items-center justify-center">
                <div className="animate lg:col-5 lg:order-1">
                  <div className="animate text-center">
                    <p className="text-start" style={{ color: "blue", fontWeight: "700" }}>{testimonial.subtitle}</p>
                    {/* <h2 className="mt-4 text-start ">{testimonial.title}</h2> */}
                    {markdownify(testimonial.title, "h2", "mt-4  text-start")}
                    {/* {markdownify(testimonial.description, "p", "mt-10")} */}
                  </div>
                </div>
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
                                className="block rounded-lg bg-white dar:bg-neutral-700 dar:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                                <div
                                  className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dar:border-neutral-800 dar:bg-neutral-800">
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

      {/* <Contactform /> */}

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
