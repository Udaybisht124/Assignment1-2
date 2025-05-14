import React from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const ContactUs = () => {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form>
        <div className="mb-4">
          <Label htmlFor="name" value="Your Name" />
          <TextInput id="name" type="text" placeholder="John Doe" required={true} />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" value="Your Email" />
          <TextInput id="email" type="email" placeholder="john.doe@example.com" required={true} />
        </div>
        <div className="mb-4">
          <Label htmlFor="message" value="Your Message" />
          <Textarea id="message" placeholder="Write your message here..." required={true} />
        </div>
        <Button type="submit" color="blue">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;