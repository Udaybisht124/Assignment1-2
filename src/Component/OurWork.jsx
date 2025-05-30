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
    <section className="min-h-screen sm:h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 flex items-center justify-center py-10 px-2 ">
      {/* Align section content center on lg screens using flex utilities */}
      <div
        className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center lg:px-10"
        style={{ marginBottom: 160 }}
      >
        <div className="flex flex-col w-full">
          <h2 className="text-4xl md:text-5xl sm:pt-6 font-bold text-center mb-2 text-blue-400 drop-shadow-lg pt-10">
            Our Work
          </h2>
          <p className="text-gray-300 text-center mb-10  mt-8 md:mb-14 text-base md:text-lg max-w-2xl mx-auto">
            Visions become reality with the right team and the right plan.
          </p>
        </div>

        <div
          className="grid lg:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow shadow-xl w-full max-w-7xl mx-auto px-2 lg:px-0"
          style={{ padding: 40, gap: 20 }}
        >
          {workItems.map((item) => (
            <div
              key={item.title}
              className=" shadow shadow-xl rounded-[2.5rem]  sm:py-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:scale-[1.04] border dark:border-blue-700 hover:shadow-blue-500/50 transition-transform duration-300 group relative overflow-hidden flex flex-col h-full max-w-screen-2xl"
              style={{ padding: 20 }}
            >
              <div className="flex flex-col items-center py-10 px-6 h-full">
                <div className="bg-blue-600/80 rounded-full p-6 mb-6 border-4 border-blue-400 shadow-xl transition-transform group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
                <h5 className="text-2xl lg:text-3xl font-bold tracking-tight text-blue-200 mb-4 text-center drop-shadow-lg items-start">
                  {item.title}
                </h5>
                <ul className="space-y-3 flex flex-col items-start text-base lg:text-lg font-medium text-blue-400 text-center flex-1">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center justify-center gap-3"
                    >
                      <span>
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="black"
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
              {/* Glow effect on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-blue-500 blur-3xl rounded-[2.5rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
