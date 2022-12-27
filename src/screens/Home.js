import React, { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Introduction from "../components/home/Introduction";
import About from "../components/home/About";
import Work from "../components/home/Work";
import Loading from "../components/home/Loading";
import Aside from "../components/home/Aside";
import Footer from "../components/shared/Footer";
import "../styles/home.css";
export default function Home() {
  const [prevPosition, setPrevPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setPrevPosition(scrollPosition);
    };
  }, []);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className = "home">
      {isLoading && <Loading />}
      {isLoading == false && (
        <>
          <Navbar />
          <Aside />
          <Introduction />
          <About />
          <Work />
          <Footer />
        </>
      )}
    </div>
  );
}
