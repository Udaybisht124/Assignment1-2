import React from "react";
import "../index.css";

// Work items data array with enhanced structure
const workItems = [
  {
    id: 1,
    title: "Consumer Internet",
    icon: "https://cdn-icons-png.flaticon.com/512/4144/4144497.png",
    points: ["Native Mobile Apps", "Web Applications", "Cloud Orchestration"],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    textColor: "text-blue-600",
    hoverShadow: "hover:shadow-blue-500/25",
  },
  {
    id: 2,
    title: "Robotics & Automation",
    icon: "https://cdn-icons-png.flaticon.com/512/1061/1061164.png",
    points: [
      "Drive by Wire Systems",
      "Autonomous Mobile Robots",
      "Indoor Guided Systems",
    ],
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    textColor: "text-emerald-600",
    hoverShadow: "hover:shadow-emerald-500/25",
  },
  {
    id: 3,
    title: "Internet of Things",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    points: ["Hardware Solutions", "Scalable Interfaces", "Multi-protocol Gateway"],
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    textColor: "text-purple-600",
    hoverShadow: "hover:shadow-purple-500/25",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    icon: "https://cdn-icons-png.flaticon.com/512/2942/2942927.png",
    points: ["Predictive Modeling", "Recommender Systems", "Intelligent Chatbots"],
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    textColor: "text-orange-600",
    hoverShadow: "hover:shadow-orange-500/25",
  },
];

export default function OurWorkSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our <span className="bg-blue-400 dark:bg-blue-500  bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming visions into reality through cutting-edge technology solutions. 
            We deliver excellence across multiple domains with innovation at our core.
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {workItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                border border-gray-200 dark:border-gray-700
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:scale-[1.02]
                hover:shadow-2xl ${item.hoverShadow}
                overflow-hidden
              `}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative p-8">
                {/* Icon section */}
                <div className="flex justify-center mb-6">
                  <div className={`
                    relative ${item.iconBg} dark:bg-gray-700 rounded-2xl p-4
                    transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                    shadow-lg group-hover:shadow-xl
                  `}>
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                    />
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`
                  text-xl font-bold text-center mb-6 
                  text-gray-900 dark:text-white
                  group-hover:${item.textColor} dark:group-hover:text-white
                  transition-colors duration-300
                `}>
                  {item.title}
                </h3>

                {/* Features list */}
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <div className={`
                        flex-shrink-0 w-2 h-2 rounded-full mt-2
                        bg-gradient-to-r ${item.gradient}
                        group-hover:scale-125 transition-transform duration-300
                      `}></div>
                      <span className="text-sm font-medium leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 
                  bg-gradient-to-r ${item.gradient}
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left
                `}></div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Ready to bring your vision to life?
          </p>
          <button className="
            inline-flex items-center gap-2 px-8 py-4 
            bg-gradient-to-r from-blue-600 to-indigo-600 
            text-white font-semibold rounded-xl
            shadow-lg hover:shadow-xl
            transform hover:-translate-y-1 hover:scale-105
            transition-all duration-300
            focus:outline-none focus:ring-4 focus:ring-blue-500/50
          ">
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
