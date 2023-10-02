import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
// import { CgClose } from "react-icons/cg";
import Social from "@components/Social";
import social from "@config/social.json";
// import mainsocial from "@config/mainsocial.json";
import { IoMail, IoCall } from "react-icons/io5";

  


const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [direction, setDirection] = useState(null);

  const { asPath } = useRouter();

  //sticky header
  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      scrollY > 0 ? setSticky(true) : setSticky(false);
      if (scrollY > headerHeight) {
        prevScroll > scrollY ? setDirection(-1) : setDirection(1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    });
  }, []);

  // logo source
  const { logo } = config.site;
    let socialiconstyle ={
      display:'flex',
      justifyContent: "space-between"
    }
  return (
    <>

      <div className="header-height-fix"></div>
      <header
        className={`header ${sticky && "header-sticky"} ${direction === 1 && "unpinned"
          }`}
        ref={headerRef}
      >
        <div className="container-fluid mainheadtop" style={{backgroundColor:'red'}}>
          <div className=" container " style={socialiconstyle}>
            
           <div className="" style={{display:'flex '}}>
           <div className="text-center mt-1" style={{display:"flex"}}>           
            <IoMail style={{color:"black", marginTop:"6px", marginRight:"10px"}}/>
            <span> comthfh@gmail.com
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
            </span>
            </div>
            <div className="text-center mt-1" style={{display:"flex", marginLeft:"18px"}}>
            
            <IoCall style={{color:"black", marginTop:"6px", marginRight:"10px"}}/>
            <span> +91-9971565508
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
            </span>
            </div>
           </div>

            <div className="">
            <Social source={social} className="social-icons-top " />
              
            </div>
          </div>
        </div>
        <nav className="navbar container">
        
          <div className="order-0">
            <Logo src={logo} />
          </div>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden max-h-0 w-full overflow-hidden border border-border-secondary py-0 transition-all duration-500 group-hover:block group-hover:max-h-[106px] group-hover:py-2 lg:invisible lg:absolute lg:left-1/2 lg:block lg:w-auto lg:-translate-x-1/2 lg:group-hover:visible lg:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className={`nav-dropdown-link block transition-all ${asPath === child.url && "active"
                              }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      className={`nav-link block ${asPath === menu.url && "active"
                        }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {config.nav_button.enable && (
              <li className="nav-item lg:hidden">
                <Link
                  className="btn btn-primary hidden lg:flex"
                  href={config.nav_button.link}
                >
                  {config.nav_button.label}
                </Link>
              </li>
            )}
          </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
