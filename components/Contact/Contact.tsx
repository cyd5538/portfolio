"use client";
import Container from '../Container'
import { ContactForm } from './Contactform';

const Contact = () => {

  return (
    <main className='relative w-full pt-16 pb-20 bg-purple-300 dark:bg-zinc-800' id="Contact">
      <Container>
        <h1 className='text-4xl underline font-bold pb-10'>Contact</h1>
        <ContactForm />
        {/* <form>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
          <input type="text" onChange={(e) => setSubject(e.target.value)}/>
          <input type="text" onChange={(e) => setText(e.target.value)}/>
          <button formAction={send}>test</button>
        </form> */}
      </Container>
    </main>
  )
}

export default Contact
