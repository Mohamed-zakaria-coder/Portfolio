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
import "../styles/home.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="home">
      <Navbar />
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
