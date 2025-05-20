
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    alert("Message Submitted Successfully");
    console.log("Submitted Data: ", formData);
  };

  return (
    <div
      className="flex items-start justify-center min-h-screen bg-gray-100 h-screen dark:bg-gray-900 dark:text-white"
     
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white
        dark:bg-gray-800 dark:text-white max-w-xl w-full p-6 mt-24 rounded-lg shadow-lg"
        style={{marginTop:200}}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" className="text-gray-700 dark:text-gray-300">
           Username
            </Label>
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="max-w-xl mt-4">
          <div className="mb-2 block">
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
             Message            </Label>
          </div>
          <Textarea
            id="message"
            placeholder="Leave a comment..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white max-w-xl"
          />
        </div>
        <Button
          type="submit"
          className="mt-6 bg-blue-400 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700 animate-pulse"
        >

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

}

};

export default ContactUs;
