"use client";

import About from "@/components/About/About";
import Archives from "@/components/Archives/Archives";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Home/Home";
import Nav from "@/components/Nav";
import Project from "@/components/Project/Project";
import Skill from "@/components/Skills/Skill";

export default function Home() {
  return (
    <div id="Home">
      <Nav />
      <Main />
      <About /> 
      <Skill />
      <Archives />
      <Project />
      <Footer />
    </div>
  );
}
