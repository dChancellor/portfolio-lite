import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { revealTransitionUp } from '@lib/transitions';
import style from './Contact.module.css';
import Socials from '../Socials/Socials';

function Contact() {
  const contact = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(contact.current, revealTransitionUp(1));
  }, []);

  return (
    <div ref={contact} className={style.contact} id='Contact'>
      <h1>Where To Reach Me</h1>
      <p>
        My emails are open - I'm available to talk about any opportunities,
        bounce project ideas or if you just want to say hello!
      </p>
      <a href='mailto:me@chancellor.tech' className={style.contactButton}>
        Right here!
      </a>
      <p>or here</p>
      <Socials />
    </div>
  );
}

export default Contact;
