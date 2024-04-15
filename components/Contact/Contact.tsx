"use client";
import Container from '../Container'
import ContactBlossom from './ContactBlossom';
import { ContactForm } from './Contactform';

const Contact = () => {

  return (
    <main className='relative w-full pt-16 pb-20 bg-green-300 dark:bg-zinc-900 overflow-hidden' id="Contact">
      <ContactBlossom />
      <Container>
        <h1 className='text-4xl underline font-bold pb-10 text-shadow-base shadow-yellow-500'>Contact</h1>
        <ContactForm />
      </Container>
    </main>
  )
}

export default Contact
