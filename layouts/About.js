import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import Image from 'next/image'
import VideoPopup from "./components/VideoPopup";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  return (
    <>
      <div className="pagehding-sec">
        <div className="pagehding-overlay"></div>
        <div className="container container1">
          <div className="row">
            <div className="col-md-12">
              <div className="page-heading">
                <h1 className="text-white">About Page</h1>
                <ul className="text-white">
                  <li className="topli"><a href="/">Home</a></li>
                  <li><a href="">About Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section pt-0">
        {/* <Banner title={title} /> */}
        {/* About */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-6 md:order-2">
              <div className="about-image relative p-[60px]">
                {/* <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={400}
                  height={400}
                  alt=""
                /> */}
                <Image
                  src="/images/comsecurity/com131.jpeg"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-1">
              <p style={{ color: "blue", fontWeight: "700" }}>{about_us.subtitle}</p>
              {markdownify(about_us.title, "h2", "section-title bar-left mt-4")}
              {markdownify(about_us.content, "p", "mt-10 text-justify")}
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            <p style={{ color: "blue", fontWeight: "700" }}>{works.subtitle}</p>
            {markdownify(works.title, "h2", "section-title mt-4")}
            {markdownify(works.content, "p", "mt-10")}
          </div>
          <div className="row mt-10 justify-center">
            {works.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-6">
              <div className="about-image relative p-[60px]">
                {/* <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={mission.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                /> */}
                <Image
                  src="/images/comsecurity/cmd8.jpeg"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-5">
              <p style={{ color: "blue", fontWeight: "700" }}>{mission.subtitle}</p>
              {markdownify(mission.title, "h2", "section-title bar-left mt-4")}
              {markdownify(mission.content, "p", "mt-10 text-justify")}
            </div>
          </div>
        </div>

        {/* Video */}
        {/* <div className="container-xl relative">
          <div className="bg-theme absolute top-0 left-0 w-full">
            <Circle
              className="left-[7%] top-[21%]"
              width={32}
              height={32}
              fill={false}
            />
            <Circle
              className="left-[30%] top-[10%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="left-[4%] bottom-[35%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="left-[10%] bottom-[11%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="left-[44%] bottom-[48%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="left-[35%] bottom-[22%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="right-[32%] top-[2%]"
              width={47}
              height={47}
              fill={false}
            />
          </div>
          <div className="row items-center justify-center py-[90px]">
            <div className="md:col-6 xl:col-4">
              <div className="animate p-5">
                <p>{video.subtitle}</p>
                {markdownify(video.title, "h2", "mt-4 section-title bar-left")}
                {markdownify(video.description, "p", "mt-10")}
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="px-4 ">
                <VideoPopup
                  id={video.video_id}
                  thumbnail={video.thumbnail}
                  width={540}
                  height={585}
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Clients */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>{clients.subtitle}</p>
            {markdownify(clients.title, "h2", "section-title mt-4")}
          </div>
          <div className="animate from-right col-12 mt-16">
            <Swiper
              loop={true}
              slidesPerView={3}
              breakpoints={{
                992: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={20}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
            >
              {clients.brands.map((brand, index) => (
                <SwiperSlide
                  className=" h-20 cursor-pointer py-6 px-6 grayscale  transition hover:grayscale-0 lg:px-10"
                  key={"brand-" + index}
                >
                  <div className="relative h-full">
                    <ImageFallback
                      className="object-contain"
                      src={brand}
                      sizes="100vw"
                      alt=""
                      fill={true}
                      priority={true}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}

        {/* Members */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>{our_member.subtitle}</p>
            {markdownify(our_member.title, "h2", "section-title mt-4")}
            {markdownify(our_member.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {our_member.list.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 text-center md:col-6 lg:col-4"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src={member.image}
                      width={245}
                      height={245}
                      alt={member.name}
                    />
                    <h4 className="mt-8">{member.name}</h4>
                    <p className="mt-3">{member.field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}


        <div className="section container">
          <div className="animate text-center">
            <p>{our_member.subtitle}</p>
            {markdownify(our_member.title, "h2", "section-title mt-4")}
            {markdownify(our_member.content, "p", "mt-16")}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="/images/comsecurity/banner/cosecurity1.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="/images/comsecurity/banner/cosecurity-slider-image-2.jpg" alt="" />
            </div>
            <div>
              <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="/images/comsecurity/banner/cosecurity-slider-image-3.jpg" alt="" />
            </div>


          </div>
        </div>


        {/* Office */}
        <div className="section container">
          <div className="animate text-center">
            <p style={{ color: "blue", fontWeight: "700" }}>{our_office.subtitle}</p>
            {markdownify(our_office.title, "h4", "section-title mt-4")}

          </div>
          <div className="row justify-center">
            <div className="lg:col-12">
              {/* <div className="row  justify-center">
                {our_office.countries.map((our_office, index) => (
                  <div
                    key={("country-", index)}
                    className="animate mt-10 md:col-8 xl:col-4"
                  >
                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "162px" }}>

                      <h5 className="h4 mt-2">{our_office.name}</h5>

                      <p className="mt-2">{our_office.location}</p>
                    </div>
                  </div>
                ))}

              </div> */}
              <div className="row  justify-center">

                <div className="animate mt-10 md:col-8 xl:col-4">
                  <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                    <h5 className="h4 mt-2">Corporate Office

                    </h5>
                    <p className="mt-2">B-133, SEC-A-5/6, RMS Palaza Trans Delhi Signature City, Loni, GZB (UP) 201102
                      Mob: +91 1204262182, info@comsecurity.in</p>
                  </div>
                </div>

                <div className="animate mt-10 md:col-8 xl:col-4">
                  <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                    <h5 className="h4 mt-2">Branch Office
                      (Delhi)
                    </h5>
                    <p className="mt-2">D-142/2, Doulatpur Shahabad Dairy, New Delhi - 110042
                      Mob: +91 9355256624, delhi@comsecurity.in</p>
                  </div>
                </div>


                <div className="animate mt-10 md:col-8 xl:col-4">
                  <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{ minHeight: "182px" }}>

                    <h5 className="h4 mt-2">Branch Office
                      (Noida)
                    </h5>
                    <p className="mt-2">Shop no. 9, Ground Floor Green India Place, Labour Chowk, Khoda Colony, opp. Sector-62 Noida, Sector-62,(U.P.)201301
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

                    <h5 className="h4 mt-2">Branch Office (Haridwar) </h5>
                    <p className="mt-2">R-76, Shivalik Nager, Haridwar (UK) 249403  Mob: +91 9911123058,  info@comsecurity.in
                    </p>
                  </div>
                </div>


              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* <Cta /> */}
    </>
  );
};

export default About;
