import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, SetMenuOpened] = useState(false);
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="" className="logo" />

        {menuOpened == false && mobile == true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => SetMenuOpened(true)}
          >
            <img
              src={bars}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="home"
                span={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="programs"
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="reasons"
                span={true}
                smooth={true}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="plan"
                span={true}
                smooth={true}
              >
                Plan
              </Link>
            </li>
            <li>
              <Link
                onClick={() => SetMenuOpened(false)}
                to="testimonial"
                span={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
