import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import Image from 'next/image'

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  // const onSubmit = async () => {
  //   set
  // })


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
                                    <li><a href="">Home</a></li>
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
        <div className="section row items-center justify-center " style={{marginTop:'121px'}}>
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
              
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
              +91-9971565508
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
              care@comsecurity.in
              </p>
            
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6"></div>
          </div>
          <div className="animate lg:col-5">
            <form
              method="POST"
              action={config.params.contact_form_action}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full h-10 "
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full h-10"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full h-10"
                  name="subject"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea className="form-textarea w-full" rows="3" />
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* <div className="container my-24 mx-auto md:px-6">

        <section className="mb-32"> 
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="mb-6 text-3xl font-bold">Feel free to contact us for any questions and doubts​</h2>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              If you are looking for a body guard , House kepper, Security Guard, Gunman so connect us.
              </p>
              
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
              +91-9971565508
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
              care@comsecurity.in
              </p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
           <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90" placeholder="Name" />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    htmlFor="exampleInput90">Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input type="email"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91" placeholder="Email address" />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    htmlFor="exampleInput91">Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none 
                    rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none
                     before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent
                      before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary 
                      checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block 
                      checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] 
                      checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white 
                      checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] 
                      hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] 
                      focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                      focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block 
                      focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] 
                      checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox" value="" id="exampleCheck96" checked />
                  <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
                    Send me a copy of this message
                  </label>
                </div>
                <button type="button" data-te-ripple-init data-te-ripple-color="light"
                  className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  Send
                </button>
              </form>



            </div>
          </div>
        </section>

      </div> */}



      <div className="container  mx-auto md:px-6">

        <section className="">
          <div
            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <div className="h-[500px] w-full">
                  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                          Head Office Tronica City
                        </p>
                        <p>B-133, sec-A5/6, RMS Plaza Trans Delhi Signature City, Loni Ghaziabad-201103
                          Mob: +91 9718069976, +91 9355419326
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          E-mail: comthfh@gmail.com
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
                          Branch Office Noida
                        </p>
                        <p>Shop no. 9, Ground Floor Green India Place, Khoda Colony Noida, Sector-62,(U.P.)201301
                        </p>

                        <p className="text-neutral-500 dark:text-neutral-200">
                          Mob: +91 9319852290, +91 9355256624
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
                        <p className="mb-2 font-bold dark:text-white">Branch Office Haryana</p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          Village Umedgarh, Tehsil-Ganaur, District-Sonipat, Haryana-131039

                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          Mob: +91 9319513464, +91 9560364532
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
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
                  </div>
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
