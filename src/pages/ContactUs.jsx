import { Button, Label, TextInput, Textarea, Alert } from "flowbite-react";
import { useState } from "react";
import { useAuthStore } from "../Store/authStore";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [alert, setAlert] = useState({
    show: false,
    type: "success",
    message: "",
  });
  const contact = useAuthStore((state) => state.contact);

  const validateContactFields = () => {
    const { name, message } = formData;
    const nameRegex = /^[a-zA-Z\s]+$/; // Allows alphabets and spaces

    // Name validation: at least 4 characters, only alphabets and spaces
    if (name.length < 4) {
      setAlert({
        show: true,
        type: "info",
        message: "Name must be at least 4 characters long",
      });
      return false;
    }
    if (!nameRegex.test(name)) {
      setAlert({
        show: true,
        type: "info",
        message: "Name should only contain alphabets and spaces",
      });
      return false;
    }

    // Message validation: 10 to 100 characters
    if (message.length < 10) {
      setAlert({
        show: true,
        type: "info",
        message: "Message must be at least 10 characters long",
      });
      return false;
    }
    if (message.length > 100) {
      setAlert({
        show: true,
        type: "info",
        message: "Message must not exceed 100 characters",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateContactFields()) {
      return;
    }
    // Map form data to backend expected format
    const response = await contact({
      name: formData.name,
      message: formData.message,
    });
    if (response.success) {
      setAlert({
        show: true,
        type: "success",
        message: response.message || "Message Submitted Successfully!",
      });
      setFormData({ name: "", message: "" });
    } else {
      setAlert({
        show: true,
        type: "info",
        message:
          response.error || "Failed to submit message. Please try again.",
      });
    }

    // Hide alert after 4 seconds
    setTimeout(() => setAlert((prev) => ({ ...prev, show: false })), 4000);
  };

  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center h-screen max-w-full bg-gray-100 dark:bg-gray-900 px-4 py-4 lg:px-auto lg:py-10"
      style={{ paddingBottom: 220 }}
    >
      {/* Image Section */}
      <div className="flex-shrink-0 mb-10 lg:mb-32 lg:mr-16 flex justify-center items-center">
        <img
          src="https://addvalsolutions.com/assets/images/team/kulcare-team.webp"
          alt="Team"
          className="w-96 h-auto mb-20 rounded-lg shadow-lg object-contain"
        />
      </div>
      {/* Form Section */}
      <div className="flex flex-col w-full max-w-xl lg:max-w-full lg:mt-32 lg:h-36">
        <div className="py-10 mb-10 mt-10 text-3xl mx-auto font-bold text-blue-400 uppercase">
          Contact US
        </div>
        {alert.show && (
          <Alert
            color={alert.type === "success" ? "success" : "failure"}
            className="mb-4"
          >
            {alert.message}
          </Alert>
        )}
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-white dark:bg-gray-800 dark:text-white w-full p-6 rounded-lg shadow-lg"
          >
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Name
                </Label>
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
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
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                maxLength={100}
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
