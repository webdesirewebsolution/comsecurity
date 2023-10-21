import { markdownify } from "@lib/utils/textConverter";
// import { Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Banner from "./components/Banner";
// import Circle from "./components/Circle";
// import Cta from "./components/Cta";
// import ImageFallback from "./components/ImageFallback";
// import VideoPopup from "./components/VideoPopup";

const Officeadd = () => {
    //   const { frontmatter } = data;
    //   const {
    //     title,
    //     about_us,
    //     works,
    //     mission,
    //     video,
    //     clients,
    //     our_member,
    //     our_office,
    //   } = frontmatter;

    return (
        <>
            <section className="">
                {/* <Banner title={title} /> */}
                {/* About */}


                {/* Works */}


                {/* Mission */}


                {/* Video */}


                {/* Clients */}


                {/* Members */}


                {/* Office */}
                <div className="section container">
                    <div className="animate text-center">

                        {markdownify("OUR OFFICE", "h2", "section-title mt-4")}
                        {/* {markdownify(our_office.content, "p", "mt-16")} */}
                    </div>
                    <div className="row justify-center">
                        <div className="lg:col-12">
                            <div className="row  justify-center">
                                {/* {our_office.countries.map((country, index) => (
                  <div
                    key={("country-", index)}
                    className="animate mt-10 md:col-6 xl:col-3"
                  >
                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]">
                      
                      <h5 className="h4 mt-2">{country.name}</h5>
                      <p className="mt-2">{country.location}</p>
                    </div>
                  </div>
                ))} */}

                                <div

                                    className="animate mt-10 md:col-8 xl:col-4"
                                >
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                                        <h5 className="h4 mt-2">Branch Office (Haridware) </h5>
                                        <p className="mt-2">R-76, Shivalik Nager, Haridware (UK) 249403
                                        </p>
                                    </div>
                                </div>



                                <div

                                    className="animate mt-10 md:col-8 xl:col-4"
                                >
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                                        <h5 className="h4 mt-2">Branch Office
                                            (Noida)
                                        </h5>
                                        <p className="mt-2">Shop no. 9, Ground Floor Green India Place, Khoda Colony Noida, Sector-62,(U.P.)201301
                                            Mob: +91 9319852290,  noida@comsecurity.in</p>
                                    </div>
                                </div>


                                <div className="animate mt-10 md:col-8 xl:col-4">
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                                        <h5 className="h4 mt-2">Branch Office
                                            (Haryana)
                                        </h5>
                                        <p className="mt-2">Plot No. 490, Sector-1 , imt, manesar gurgaon - 122051
                                            Mob: +91 9319513464, haryana@comsecurity.in</p>
                                    </div>
                                </div>
                                <div className="animate mt-10 md:col-8 xl:col-4">
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                                        <h5 className="h4 mt-2">Branch Office
                                            (Rajasthan)
                                        </h5>
                                        <p className="mt-2">241, sector-11, Aravali Vihar , Bhiwadi, Rajasthan - 301019
                                            Mob: +91 7737028839, rajasthan@comsecurity.in</p>
                                    </div>
                                </div>
                                <div className="animate mt-10 md:col-8 xl:col-4">
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                                        <h5 className="h4 mt-2">Branch Office
                                            (Delhi)
                                        </h5>
                                        <p className="mt-2">D-142/2, Shahabad Dairy, New Delhi - 110042 
                                            Mob: +91 9355256624, delhi@comsecurity.in</p>
                                    </div>
                                </div>
                                <div className="animate mt-10 md:col-8 xl:col-4">
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                                        <h5 className="h4 mt-2">Corporate Office
                                            
                                        </h5>
                                        <p className="mt-2">B-133, SEC-A-5/6, RMS Palaza Trans Delhi Signature City, Loni, GZB (UP) 201102
                                            Mob: +91 1204262182, info@comsecurity.in</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Officeadd;
