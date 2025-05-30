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
    e.preventDefault();
    alert("Message Submitted Successfully");
    console.log("Submitted Data: ", formData);
  };

  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center h-screen max-w-full bg-gray-100 dark:bg-gray-900 px-4 py-4 lg:px-auto lg:py-10"
      style={{ paddingBottom: 220 }}
    >
      {/* Image Section | fixed width for all screen sizes including lg */}
      <div className="flex-shrink-0 mb-10 lg:mb-32 lg:mr-16 flex justify-center items-center">
        <img
          src="https://addvalsolutions.com/assets/images/team/kulcare-team.webp"
          alt="Team"
          className="w-72 h-auto rounded-lg shadow-lg object-contain"
        />
      </div>
      {/* Form Section */}
      <div className="flex flex-col w-full max-w-xl lg:max-w-full lg:mt-32 lg:h-36 ">
        <div className="py-10 mb-10 mt-10 text-3xl mx-auto font-bold  text-blue-400 uppercase">
          Contact US
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-white dark:bg-gray-800 dark:text-white w-full p-6 rounded-lg shadow-lg"
          >
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="username"
                  className="text-gray-700 dark:text-gray-300"
                >
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
            <div className="mt-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="message"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Message
                </Label>
              </div>
              <Textarea
                id="message"
                placeholder="Leave a comment..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <Button
              type="submit"
              className="mt-6 bg-blue-400 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700 animate-pulse"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
