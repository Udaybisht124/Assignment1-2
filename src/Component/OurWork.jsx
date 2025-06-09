import React from "react";
import "../index.css";

// Work items data array
const workItems = [
  {
    title: "Consumer Internet",
    icon: "https://cdn-icons-png.flaticon.com/512/4144/4144497.png", // Cloud icon
    points: ["Native Mobile Apps", "Web Apps", "Cloud Orchestration"],
  },
  {
    title: "Robotics & Automation",
    icon: "https://cdn-icons-png.flaticon.com/512/1061/1061164.png", // Robot icon
    points: [
      "Drive by Wire Systems",
      "Autonomous Mobile Robots",
      "Indoor Guided Systems",
    ],
  },
  {
    title: "Internet of Things",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png", // Plug icon
    points: ["Hardware", "Scalable Interfaces", "Multi protocol gateway"],
  },
  {
    title: "AI & ML",
    icon: "https://cdn-icons-png.flaticon.com/512/2942/2942927.png", // AI/ML icon
    points: ["Predictive Modelling", "Recommender Systems", "Chatbots"],
  },
];

export default function OurWorkSection() {
  return (
    <section className="h-screen sm:pt-10 flex flex-col items-center justify-center bg-blue-400  dark:bg-gray-900 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 overflow-y-auto">
      <div
        className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center"
        style={{ marginTop: "-250px" }}
      >
        <div className="flex flex-col w-full text-center ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-400 tracking-tight mb-4 sm:mb-6">
            Our Work
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-200 font-extrabold max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
            Visions become reality with the right team and the right plan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:h-96 md:w-72 lg:gap-10 bg-white dark:bg-gray-800 shadow-xl w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 rounded rounded-xl flex-1">
          {workItems.map((item) => (
            <div
              key={item.title}
              className="shadow-xl rounded-[2.5rem] text-gray-900 dark:text-blue-400 border border-gray-200 dark:border-blue-700 hover:scale-[1.04] hover:shadow-blue-500/50 transition-transform duration-300 group relative overflow-hidden flex flex-col min-h-[18rem] sm:min-h-[20rem]"
            >
              <div className="flex flex-col items-center py-6 px-4 sm:px-6 h-full">
                <div className="bg-blue-600/80 dark:bg-blue-800/80 rounded-full p-4 sm:p-6 mb-4 sm:mb-6 border-4 border-blue-400 dark:border-blue-600 shadow-xl transition-transform group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain shadow-lg"
                  />
                </div>
                <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-blue-200 dark:text-blue-300 mb-4 text-center">
                  {item.title}
                </h5>
                <ul className="space-y-3 flex flex-col items-start text-sm sm:text-base lg:text-lg font-medium text-blue-400 dark:text-blue-200 flex-1">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <span>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 dark:text-blue-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <circle cx="10" cy="10" r="10" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-blue-500 dark:bg-blue-700 blur-3xl rounded-[2.5rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
