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
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{minHeight:"182px"}}>

                                        <h5 className="h4 mt-2">Head Office
                                            Tronica City</h5>
                                        <p className="mt-2">B-133, sec-A5/6, RMS Plaza Trans Delhi Signature City, Loni Ghaziabad-201103
                                          <br />  Mob: +91 9718069976, +91 9355419326
                                            E-mail: comsecurity@gmail.com</p>
                                    </div>
                                </div>



                                <div

                                    className="animate mt-10 md:col-8 xl:col-4"
                                >
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]"  style={{minHeight:"182px"}}>

                                        <h5 className="h4 mt-2">Branch Office
                                            Noida
                                            Tronica City</h5>
                                        <p className="mt-2">Shop no. 9, Ground Floor Green India Place, Khoda Colony Noida, Sector-62,(U.P.)201301
                                            Mob: +91 9319852290, +91 9355256624</p>
                                    </div>
                                </div>


                                <div

                                    className="animate mt-10 md:col-8 xl:col-4"
                                >
                                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]"  style={{minHeight:"182px"}}>

                                        <h5 className="h4 mt-2">Branch Office
                                            Haryana
                                            Tronica City</h5>
                                        <p className="mt-2">Village Umedgarh, Tehsil-Ganaur, District-Sonipat, Haryana-131039
                                            Mob: +91 9319513464, +91 9560364532</p>
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
