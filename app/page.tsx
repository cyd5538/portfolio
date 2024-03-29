"use client";

import About from "@/components/About/About";
import Main from "@/components/Home/Home";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Main />
      <About /> 
    </div>
  );
}
