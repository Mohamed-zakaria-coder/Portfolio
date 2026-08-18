import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Introduction from "../components/home/Introduction";
import About from "../components/home/About";
import Work from "../components/home/Work";
import OtherProjects from "../components/home/OtherProjects";
import Contact from "../components/home/Contact";
import Loading from "../components/home/Loading";
import Aside from "../components/home/Aside";
import Footer from "../components/shared/Footer";
import CursorGlow from "../components/shared/CursorGlow";
import "../styles/home.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1350);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let frame;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollPosition(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="home">
      <CursorGlow />
      <Navbar scrollPosition={scrollPosition} />
      <Aside />
      <main id="main-content">
        <Introduction />
        <About />
        <Work />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
