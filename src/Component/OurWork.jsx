import "../index.css";

const workItems = [
  {
    title: "Consumer Internet",
    icon: "https://cdn-icons-png.flaticon.com/512/4144/4144497.png", // Cloud icon
    points: [
      "Native Mobile Apps",
      "Web Apps",
      "Cloud Orchestration",
    ],
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
    points: [
      "Hardware",
      "Scalable Interfaces",
      "Multi protocol gateway",
      "Network Security",
    ],
  },
  {
    title: "AI & ML",
    icon: "https://cdn-icons-png.flaticon.com/512/2942/2942927.png", // AI/ML icon
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
    <section className="min-h-screen bg-black flex items-center ">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-5xl font-semibold text-center mb-2 text-blue-400 pt-10">Our Work</h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          Visions become reality with the right team and the right plan.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {workItems.map((item) => (
            <div
              key={item.title}
              className="bg-blue-400 text-white dark:bg-white dark:font-bold text-white relative rounded-2xl shadow-md hover:shadow-lg my-8 transition-shadow p-8 flex flex-col min-h-[240px] overflow-hidden group"
            >
              {/* Manual Icon Image */}
              <div className="absolute top-6 right-6 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title + " icon"}
                  className="w-24 h-24 mx-10 object-contain"
                  aria-hidden="true"
                />
              </div>
              {/* Title */}
              <div className="mb-4">
                <span className="block font-bold text-xl text-gray-800">{item.title}</span>
                <span className="block w-8 border-b-2 text-blue-400 border-blue-500 mt-1" />
              </div>
              {/* List */}
              <ul className="mt-2 mb-10 space-y-1 text-white font-serif dark:text-blue-600">
                {item.points.map((point, idx) => (
                  <li key={idx} className="pl-4 list-disc">{point}</li>
                ))} 
              </ul>
              {/* Manual Arrow Icon */}
              <div className="absolute bottom-6 right-6 text-blue-400 text-xl">
                {/* Unicode right arrow */}
                <span aria-hidden="true">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}