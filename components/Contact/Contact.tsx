"use client";
import Container from '../Container'
import ContactBlossom from './ContactBlossom';
import { ContactForm } from './Contactform';

const Contact = () => {

  return (
    <main className='w-full pt-16 bg-green-300 dark:bg-zinc-900 overflow-hidden' id="Contact">
      <Container>
        <h1 className='text-4xl underline font-bold pb-10 text-shadow-base shadow-yellow-500'>Contact</h1>
        <ContactForm />
        <ContactBlossom />
      </Container>
    </main>
  )
}

export default Contact
