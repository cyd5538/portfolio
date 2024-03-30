"use client";

import About from "@/components/About/About";
import Main from "@/components/Home/Home";
import Nav from "@/components/Nav";
import Skill from "@/components/Skills/Skill";

export default function Home() {
  return (
    <div id="Home">
      <Nav />
      <Main />
      <About /> 
      <Skill />
    </div>
  );
}
