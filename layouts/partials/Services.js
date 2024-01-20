import config from "@config/config.json";
import ImageFallback from "@layouts/components/ImageFallback";
import dateFormat from "@lib/utils/dateFormat";
import readingTime from "@lib/utils/readingTime";
import Link from "next/link";
import Banner from "../components/Banner";
import Image from 'next/image'
import Hero from "@layouts/components/Hero";

const Services = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  return (

    <>
      <section className="">
        {/* <Banner title={title} /> */}
        <Hero />
        <div className="section container">
          <div className="row items-center justify-evenly">
            <div className="animate md:col-6 lg:col-5 md:order-2">
              <div className="about-image relative ">
                <Image
                  src="/images/comsecurity/cmd1.jpeg"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-1">
              <h3 className="section-title bar-left mt-4">SECURITY GUARD</h3>
              <p className="mt-5 text-justify">
                The main duties and responsibilities of security guards are to watch and patrol areas to guard against illegal activity
                and dangerous scenarios. Security guards work for a variety of employers, including schools, banks, hospitals and commercial
                centers, such as casinos, sports centers, power plants and transportation centers.
              </p>
            </div>
          </div>
        </div>
        <div className="section container">
          <div className="row items-center justify-evenly">
            <div className="animate md:col-6 lg:col-5 md:order-1">
              <div className="about-image relative ">
                <Image
                  src="/images/comsecurity/services/super.jpg"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-2">
              <h3 className="section-title bar-left mt-4">SECURITY SUPERVISOR</h3>
              <p className="mt-5 text-justify">
                The nature of security work varies depending on location. Some security guards are stationed at desks while others monitor areas in vehicles, on bicycles or on foot. Security guards work to protect the health and safety of the public, and serve as physical symbols to deter petty crimes, such as theft, and more serious crimes as well, such as acts of domestic terrorism
              </p>
            </div>
          </div>
        </div>
        <div className="section container">
          <div className="row items-center justify-evenly">
            <div className="animate md:col-6 lg:col-5 md:order-2">
              <div className="about-image relative ">
                <Image
                  src="/images/comsecurity/services/housekeep.jpg"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-1">
              <h3 className="section-title bar-left mt-4">HOUSEKEEPING</h3>
              <p className="mt-5 text-justify">
              ComSecurity's Housekeeping Service offers a comprehensive and professional solution for maintaining a pristine and secure environment in both residential and commercial settings. As a trusted provider in the industry, ComSecurity understands the importance of cleanliness, order, and security in enhancing the overall well-being of spaces.              </p>
            </div>
          </div>
        </div>
        <div className="section container">
          <div className="row items-center justify-evenly">
            <div className="animate md:col-6 lg:col-5 md:order-1">
              <div className="about-image relative ">
                <Image
                  src="/images/comsecurity/securityguard4.jpg"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-2">
              <h3 className="section-title bar-left mt-4">PSO</h3>
              <p className="mt-5 text-justify">
                The National Guard is one of the United States’ most significant military reserve elements. It is called upon in times of hostility to supplement regular forces in multiple arms of service. In addition to acting in this capacity, National Guard units also fulfill state functions when necessary. Thus, National Guard units are considered to shoulder both federal and state missions.
              </p>
            </div>
          </div>
        </div>
        <div className="section container">
          <div className="row items-center justify-evenly">
            <div className="animate md:col-6 lg:col-5 md:order-2">
              <div className="about-image relative ">
                <Image
                  src="/images/comsecurity/bouncer12131.png"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-1">
              <h3 className="section-title bar-left mt-4">PERSONAL BODYGUARD</h3>
              <p className="mt-5 text-justify">
                In addition to reacting quickly physically, security guards must often possess certain personality qualities that make them able to detect and deter crimes. Security guards are detail-oriented and have good listening skills. They are highly observant, and often have the ability to watch and observe areas without getting distracted.
              </p>
            </div>
          </div>
        </div>
        <div className="section container">
          <div className="row items-center justify-evenly">
            <div className="animate md:col-6 lg:col-5 md:order-1">
              <div className="about-image relative ">
                <Image
                  src="/images/comsecurity/bouncer11.png"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-2">
              <h3 className="section-title bar-left mt-4">BOUNCER</h3>
              <p className="mt-5 text-justify">
                Our firm is engrossed in rendering Bouncer Services. Knowledgeable experts who have affluent industry experience render this service. This service is extremely admired in the market due to reliability, timely completion and flexibility. We render this service at low prices to our patrons.
              </p>
            </div>
          </div>
        </div>



        <div className="section container">
          <div className="animate text-center">
            {/* <p>{our_office.subtitle}</p> */}
            {/* {markdownify(our_office.title, "h2", "section-title mt-4")} */}
            {/* {markdownify(our_office.content, "p", "mt-16")} */}
          </div>
          <div className="row justify-center">
            <div className="lg:col-12">
              <div className="row  justify-center">
                <div
                  className="animate mt-10 md:col-8 xl:col-4">
                  <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{minHeight:"367px"}}>
                    <Image
                      // className="mx-auto"
                      src="/images/comsecurity/services/privacy.jpg"
                      width={80}
                      height={80}
                      alt=""

                    />
                    <h5 className="h4 mt-2">Prevention</h5>
                    {/* <h5 className="h4 mt-2">{country.name}</h5> */}
                    <p className="mt-2 text-justify">
                      A security guard's role is to PROTECT people and the property of his employer or contracted clients. So, the major responsibility of a security guard is prevention BEFORE an incident/offense occurs. The absence of incidents or offenses (crimes) is one sign that a security guard is doing a good job.
                    </p>
                  </div>
                </div>

                <div
                  className="animate mt-10 md:col-8 xl:col-4">
                  <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{minHeight:"367px"}}>
                    <Image
                      // className="mx-auto"
                      src="/images/comsecurity/services/visibility.jpg"
                      width={80}
                      height={80}
                      alt=""

                    />
                    <h5 className="h4 mt-2">Visibility</h5>
                    {/* <h5 className="h4 mt-2">{country.name}</h5> */}
                    <p className="mt-2 text-justify">
                      Security guards should remain visible as a deterrent to criminals. Thefts, damage and injuries can be thwarted when the perpetrators see a security guard. So, a security guard should be highly visible. By being seen, the guard may discourage anyone who might be considering theft, damage, or personal injury.
                    </p>
                  </div>
                </div>
                <div
                  className="animate mt-10 md:col-8 xl:col-4">
                  <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]" style={{minHeight:"367px"}}>
                    <Image
                      // className="mx-auto"
                      src="/images/comsecurity/services/vigilance.jpg"
                      width={80}
                      height={80}
                      alt=""

                    />
                    <h5 className="h4 mt-2">Vigilance</h5>
                    {/* <h5 className="h4 mt-2">{country.name}</h5> */}
                    <p className="mt-2 text-justify">
                      Security guards must remain alert to watch for abnormal activity or hear any unusual sounds. A security guard's job is PREVENTION. To do the job well, the security guard MUST: Be alert, Listen and Watch. In fact, security guards should be suspicious of any activity that may draw them away from their post. It could be a plan to draw their attention away from their duties.
                    </p>
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

export default Services;
