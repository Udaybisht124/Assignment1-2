import { FaCloud, FaRobot, FaPlug, FaMicrochip, FaArrowRight } from "react-icons/fa";

const workItems = [
  {
    title: "Consumer Internet",
    icon: FaCloud,
    points: [
      "Native Mobile Apps",
      "Web Apps",
      "Cloud Orchestration",
    ],
  },
  {
    title: "Robotics & Automation",
    icon: FaRobot,
    points: [
      "Drive by Wire Systems",
      "Autonomous Mobile Robots",
      "Indoor Guided Systems",
    ],
  },
  {
    title: "Internet of Things",
    icon: FaPlug,
    points: [
      "Hardware",
      "Scalable Interfaces",
      "Multi protocol gateway",
      "Network Security",
    ],
  },
  {
    title: "AI & ML",
    icon: FaMicrochip,
    points: [
      "Predictive Modelling",
      "Recommender Systems",
      "Chatbots",
      "NLP & Computer Vision",
    ],
  },
];

export default function OurWorkSection() {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-5xl font-semibold text-center mb-2 text-blue-400 pt-10">Our Work</h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          Visions become reality with the right team and the right plan.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {workItems.map((item) => (
            <div
              key={item.title}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-lg my-8 transition-shadow p-8 flex flex-col min-h-[240px] overflow-hidden group"
            >
              {/* Animated Icon with Circle Background on Hover */}
              <div className="absolute top-6 right-6 flex items-center justify-center">
                <span
                  className="absolute w-16 h-16 rounded-full bg-blue-100 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  aria-hidden="true"
                />
                <item.icon
                  className="relative w-12 h-12 text-blue-500 transition-transform transition-colors duration-300 group-hover:scale-110 group-hover:text-blue-700"
                  aria-hidden="true"
                />
              </div>
              {/* Title */}
              <div className="mb-4">
                <span className="block font-bold text-xl text-gray-800">{item.title}</span>
                <span className="block w-8 border-b-2 border-blue-500 mt-1" />
              </div>
              {/* List */}
              <ul className="mt-2 mb-10 space-y-1 text-gray-600">
                {item.points.map((point, idx) => (
                  <li key={idx} className="pl-4 list-disc">{point}</li>
                ))}
              </ul>
              {/* Arrow */}
              <div className="absolute bottom-6 right-6 text-blue-400">
                <FaArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}