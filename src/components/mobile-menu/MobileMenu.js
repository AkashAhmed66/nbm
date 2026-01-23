import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarItem from '../Header/Navbar/NavbarItem' 

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        `<span class="menuExpand"><i></i></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menuExpand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="offcanvasMobileMenu" id="offcanvas-mobile-menu">
      <button
        className="offcanvasMenuClose"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
      <i className="icon_close"></i>
      </button>

      <div className="offcanvasWrapper">
        <div className="offcanvasInnerContent">

          <nav className="offcanvasNavigation" id="offcanvas-navigation">
            <ul>
               
              <NavbarItem />

            </ul>
          </nav>

          {/* Search Form */}
          <div className="offcanvasMobileSearchArea">
            <form action="#">
              <input type="search" placeholder="Search ..." />
              <button type="submit"> 
              </button>
            </form>
          </div>

          {/* Contact Info  */} 

          <div className="header_top_right list-unstyled">
            <ul>
              <li>
              <i className="fa fa-phone"></i> +8801939434113
              </li>
              <li>
              <i className="fa fa-envelope"></i> info@nbm-intl.com
              </li>
              <li>
              <i className="fa fa-globe"></i> Rose Garden H: 36, R: 13, Sector 11, Uttara, Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className="header_top_left">
            <ul className="header_socil list-inline">   
                <li>
                    <a target="_blank" href="https://www.facebook.com/nbminternationalltd" className="fa fa-facebook"></a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com/nbminternationalltd" className="fa fa-twitter"></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/company/nbminternationalltd/?viewAsMember=true" className="fa fa-linkedin"></a>
                </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
