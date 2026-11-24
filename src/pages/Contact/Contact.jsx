import React from 'react';
import { ContactHero } from './sections/ContactHero';
import { ContactForm } from './sections/ContactForm';
import { ContactMap } from './sections/ContactMap';
import { ContactPartnership } from './sections/ContactPartnership';

export function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactPartnership />
    </>
  );
}

export default Contact;
