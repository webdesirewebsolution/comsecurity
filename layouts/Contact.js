import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import Image from 'next/image'
import Contactform from "./components/Contactform";
import Logo from "@components/Logo";
import Link from "next/link";
import { IoMail, IoCall } from "react-icons/io5";
import Social from "@components/Social";
import social from "@config/social.json";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  // const onSubmit = async () => {
  //   set
  // })

  const { logo } = config.site;
  let socialiconstyle = {
    display: 'flex',
    justifyContent: "space-around"
  }
  return (
    <>

      <div className="pagehding-sec">
        <div className="pagehding-overlay"></div>
        <div className="container container1">
          <div className="row">
            <div className="col-md-12">
              <div className="page-heading">
                <h1 className="text-white">Contact Us</h1>
                <ul className="text-white">
                  <li className="topli"><a href="/">Home</a></li>
                  <li><a href="">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section sectiondomestic">
        {/* <Banner title={title} /> */}
        <div className="container">
          <div className="section row items-center justify-center " style={{ marginTop: '121px' }}>
            <div className="animate lg:col-5">
              {/* <Image
              className="mx-auto lg:pr-10"
              src="/images/comsecurity/services/aboutcom.jpg"
              width={497}
              height={397}
              alt=""
            /> */}

              <h2 className="mb-6 text-3xl font-bold">Feel free to contact us​</h2>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                If you are looking for a body guard , House kepper, Security Guard, Gunman so connect us.
              </p>

              {/* <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                +91-9971565508
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                care@comsecurity.in
              </p> */}

              <div className="text-center mt-1 me-4" style={{ display: "flex" }}>
                <IoMail style={{ color: "blue", marginTop: "8px", marginRight: "10px" }} />
                <Link href="info@comsecurity.in" >
                  <h6 style={{ fontSize: '14px', fontWeight: '500' }} className="p-0 mt-2"> info@comsecurity.in
                    <style>
                      {
                        `
                  span{
                    color: black;
                    font-size: initial;
                    
                  }
                  `
                      }
                    </style>
                  </h6>
                </Link>
              </div>
              <div className="text-center mt-1 me-4" style={{ display: "flex" }}>

                <IoCall style={{ color: "blue", marginTop: "8px", marginRight: "10px" }} />
                <Link href="whatsapp://send?abid=91-9971565508&text=Hello%2C%20World!">
                  <h6 style={{ fontSize: '14px', fontWeight: '500' }} className="p-0 mt-2"> +91-9971565508
                    <style>
                      {
                        `
                  span{
                    color: black;
                    font-size: initial;
                  }
                  `
                      }
                    </style>
                  </h6>
                </Link>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6"></div>
            </div>
            <div className="animate lg:col-5">
              <Contactform />
            </div>
          </div>
        </div>




        <div className="container  mx-auto md:px-6">

          <section className="">
            <div
              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex flex-wrap items-center">
                <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                  <div className="h-[500px] w-full">
                 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.8086702874393!2d77.2624033!3d28.784966100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff843958b9e5%3A0x2a155ddb72573a4d!2sCOM%20SECURITY%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1697891176225!5m2!1sen!2sin"
                      className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                      allowFullScreen></iframe>
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Branch Office (Haridware)
                          </p>
                          <p>R-76, Shivalik Nager, Haridware (UK) 249403
                            Mob: +91 9718069976, +91 9355419326
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            E-mail: comsecurity@gmail.com
                          </p>

                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Branch Office (Noida)
                          </p>
                          <p>Shop no. 9, Ground Floor Green India Place, Khoda Colony Noida, Sector-62,(U.P.)201301
                          </p>

                          <p className="text-neutral-500 dark:text-neutral-200">
                            Mob: +91 9319852290
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">Branch Office (Haryana)</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            Plot No. 490, Sector-1 , imt, manesar gurgaon - 122051


                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            Mob: +91 9319513464, haryana@comsecurity.in
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">Branch Office
                                            (Rajasthan)</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                          241, sector-11, Aravali Vihar , Bhiwadi, Rajasthan - 301019
                                            


                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                          Mob: +91 7737028839, rajasthan@comsecurity.in
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">Branch Office
                                            (Delhi)</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                          D-142/2, Shahabad Dairy, New Delhi - 110042 
                                           


                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                          Mob: +91 9355256624, delhi@comsecurity.in
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">Corporate Office
                                            (Delhi)</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                          B-133, SEC-A-5/6, RMS Palaza Trans Delhi Signature City, Loni, GZB (UP) 201102
                                            
                                           


                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                          Mob: +91 1204262182, info@comsecurity.in
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">Contact</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            care@comsecurity.in
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +91-9971565508
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>
    </>

  );
};

export default Contact;
