import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;

  return (
    <footer className="mt-8 " 
    style={{backgroundColor:"#1d1d23"}}>
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify(footer_content, "p", "mt-3 text-white")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5" style={{color:"white"}}>Services</h3>
            <div className="mt-5">
            <ul className="mt-5 leading-10">
            <li >
                  <Link
                    href=""
                    className=" hover:text-primary text-white  hover:underline"
                  >
                    Security Guard
                  </Link>
                </li>
                <li >
                  <Link
                    href=""
                    className=" hover:text-primary text-white hover:underline"
                  >
                    Security Supervisor
                  </Link>
                </li>
                <li >
                  <Link
                    href=""
                    className=" hover:text-primary text-white hover:underline"
                  >
                    PSO
                  </Link>
                </li>
                <li >
                  <Link
                    href=""
                    className=" hover:text-primary text-white hover:underline"
                  >
                    Housekeeping
                  </Link>
                </li>
                <li >
                  <Link
                    href=""
                    className=" hover:text-primary text-white hover:underline"
                  >
                   Bouncer
                  </Link>
                </li>
                <li >
                  <Link
                    href=""
                    className=" hover:text-primary text-white hover:underline"
                  >
                    Personal Bodyguard
                  </Link>
                </li>
                </ul>
            </div>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5" style={{color:"white"}}>Quick Links</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className=" hover:text-primary text-white hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5" style={{color:"white"}}> Contact</h3>
            <ul className="mt-5 leading-10">
              {/* <li>{markdownify(location)}</li> */}
              <p style={{color:"white"}}> comsecurity@gmail.com</p>
              {/* social icons */}
             
              {phone && (
                <li style={{color:"white"}}>
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </li>
              )}
               <Social source={social} className="social-icons-top mt-5" />
            </ul>
          </div>
        </div>
        {/* copyright */}
        <div className=" py-6 text-center">
          {/* {markdownify(copyright, "p", "footer-copy-write")} */}
          <p className="text-white">2023 Copyright: comsecurity@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
