"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import downArrow from "../../public/images/down-arrow.png";

const FullscreenMenu = () => {
  const navBgRef = useRef(null);
  const toggleBtnRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;

  const calculateValues = () => {
    const elem = navBgRef.current;
    if (!elem) return;

    const { width: elemW, height: elemH } = elem.getBoundingClientRect();
    const w = window.innerWidth;
    const h = window.innerHeight;

    const offsetValue = Number(
      getComputedStyle(elem).getPropertyValue("--offset-value")
    );

    offsetX = w / 2 - elemW / 2 - offsetValue;
    offsetY = h / 2 - elemH / 2 - offsetValue;

    const radius = Math.sqrt(h ** 2 + w ** 2);
    scale = radius / (elemW / 2) / 2 + 0.1;
  };

  const openMenu = () => {
    const elem = navBgRef.current;
    elem.style.setProperty("--translate-x", `-${offsetX}px`);
    elem.style.setProperty("--translate-y", `${offsetY}px`);
    elem.style.setProperty("--scale", scale);
  };

  const closeMenu = () => {
    const elem = navBgRef.current;
    elem.style.setProperty("--scale", 1);
    elem.style.setProperty("--translate-x", 0);
    elem.style.setProperty("--translate-y", 0);
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    calculateValues();
    open ? openMenu() : closeMenu();

    const resizeHandler = () => {
      window.requestAnimationFrame(() => {
        calculateValues();
        open ? openMenu() : closeMenu();
      });
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [open]);

  return (
    <>
      <div id="nav-bg" ref={navBgRef} className="btn"></div>

      <div className="toggle-icon-wrapper">
        <div className="header-logo center-box">
          <Link href="/" className="d-flex gap-2">
            <p className="word">FIVE</p>
            <p className="num">9</p>
          </Link>
        </div>

        <div
          id="toggle-btn"
          ref={toggleBtnRef}
          className={`btn ${open ? "shown" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`wrapper ${open ? "shown" : ""}`}>
        <nav>
          <ul>

            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about-us">ABOUT US</Link></li>

            {/* SERVICES */}
            <li className={`menu-item ${activeDropdown === "services" ? "is-open" : ""}`}>
              <div className="menu-head">
                <Link href="/our-services" className="menu-link">SERVICES</Link>

                <button
                  className="menu-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown("services");
                  }}
                >
                  <Image src={downArrow} alt="toggle" />
                </button>
              </div>

              <ul className="menu-dropdown">
                <li><Link href="/our-services/strategy">Strategy</Link></li>
                <li><Link href="/our-services/fractional-CTO">Fractional CTO</Link></li>
                <li><Link href="/our-services/digital-services">Digital</Link></li>
                <li><Link href="/our-services/consulting">Consulting</Link></li>
                <li><Link href="/our-services/advisory">Advisory</Link></li>
              </ul>
            </li>

            <li><Link href="/contact-us">CONTACT US</Link></li>
            <li><Link href="/blogs">BLOGS</Link></li>

            {/* CAPABILITIES */}
            <li className={`menu-item ${activeDropdown === "capabilities" ? "is-open" : ""}`}>
              <div className="menu-head">
                <Link href="/our-capabilities" className="menu-link">CAPABILITIES</Link>

                <button
                  className="menu-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown("capabilities");
                  }}
                >
                  <Image src={downArrow} alt="toggle" />
                </button>
              </div>

              <ul className="menu-dropdown">
                <li><Link href="/our-capabilities/Transformation">Transformation</Link></li>
                <li><Link href="/our-capabilities/Artificial-intelligence">Artificial Intelligence</Link></li>
                <li><Link href="/our-capabilities/security">Security</Link></li>
                <li><Link href="/our-capabilities/Infrastructure">Infrastructure</Link></li>
                <li><Link href="/our-capabilities/Applications">Applications</Link></li>
                <li><Link href="/our-capabilities/Enterprise-Applications">Enterprise Applications</Link></li>
                <li><Link href="/our-capabilities/Data-Engineering">Data Engineering</Link></li>
                <li><Link href="/our-capabilities/Cloud">Cloud</Link></li>
              </ul>
            </li>

          </ul>
        </nav>
      </div>
    </>
  );
};

export default FullscreenMenu;
