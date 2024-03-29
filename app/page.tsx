"use client";

import Container from "@/components/Container";
import Main from "@/components/Home/Home";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="bg-sky-500">
      <Nav />
      <Container>
        <Main /> 
      </Container>
    </div>
  );
}
