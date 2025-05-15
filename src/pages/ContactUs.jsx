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
    console.log("Submitted Data: ", formData);
  };

  return (
    <div className="flex items-start justify-center min-h-screen my-10" style={{marginTop:160}}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white max-w-md w-full p-6 mt-24 rounded-lg shadow-lg"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username">Your username</Label>
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="max-w-md mt-4">
          <div className="mb-2 block">
            <Label htmlFor="message">Your message</Label>
          </div>
          <Textarea
            id="message"
            placeholder="Leave a comment..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>
        <Button
          type="submit"
          className="mt-6 bg-blue-400 text-white hover:bg-blue-600 animate-pulse hover:text-black"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}