import { useState, useEffect } from "react";
const Clients = () => {
  /**
   * List of client data to display in the clients section
   *
   * @type {Array<{ id: number, name: string, description: string, logo: string }>}
   */
  const clients = [
    {
      id: 1,
      name: "Accenture",
      description:
        "A leading technology company specializing in software solutions and digital transformation services.",
      logo: "https://addvalsolutions.com/assets/images/clients/logos/accenture.png",
      industry: "Technology Consulting",
      partnership: "Since 2019",
      projects: "25+ Projects",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      darkBgGradient: "from-blue-900/20 to-indigo-900/20",
      accentColor: "blue",
      descriptionClasses: "text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      name: "Vodafone",
      description:
        "A global leader in telecommunications and technology, connecting millions worldwide.",
      logo: "https://addvalsolutions.com/assets/images/clients/logos/vodafone.png",
      industry: "Telecommunications",
      partnership: "Since 2020",
      projects: "18+ Projects",
      gradient: "from-red-600 to-pink-600",
      bgGradient: "from-red-50 to-pink-50",
      darkBgGradient: "from-red-900/20 to-pink-900/20",
      accentColor: "red",
      descriptionClasses: "text-red-600 dark:text-red-400",
    },
    {
      id: 3,
      name: "Calvin Klein",
      description:
        "Premium fashion brand known for iconic design, style, and innovative marketing approaches.",
      logo: "https://addvalsolutions.com/assets/images/clients/logos/ck.png",
      industry: "Fashion & Retail",
      partnership: "Since 2021",
      projects: "12+ Projects",
      gradient: "from-purple-600 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      darkBgGradient: "from-purple-900/20 to-violet-900/20",
      accentColor: "purple",
      descriptionClasses: "text-purple-600 dark:text-purple-400",
    },
  ];

  /**
   * Function to get the accent classes based on the accent color
   *
   * @param {string} color - The accent color
   * @returns {Object} - An object with the accent classes
   */
  const getAccentClasses = (color) => {
    const colorMap = {
      blue: {
        ring: "ring-blue-500/20",
        hoverRing: "hover:ring-blue-500/40",
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-800",
      },
      red: {
        ring: "ring-red-500/20",
        hoverRing: "hover:ring-red-500/40",
        text: "text-red-600 dark:text-red-400",
        bg: "bg-red-100 dark:bg-red-900/30",
        border: "border-red-200 dark:border-red-800",
      },
      purple: {
        ring: "ring-purple-500/20",
        hoverRing: "hover:ring-purple-500/40",
        text: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-100 dark:bg-purple-900/30",
        border: "border-purple-200 dark:border-purple-800",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto container">
        {/* Header Section */}
        <div className="text-center mb-16 " style={{ paddingTop: "70px" }}>
          <h1
            className={`
            text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight
            transition-all duration-700
          `}
          >
            <span
              className="text-gray-900 dark:text-white"
              style={{ fontFamily: "Open-Sans" }}
            >
              Our Esteemed{" "}
            </span>
            <span className="text-blue-500"> Clients</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`
            text-lg text-gray-600  pt-5  dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8
            transition-all duration-700 delay-200
          `}
          >
            We are proud to collaborate with some of the world's most
            recognizable brands and innovators, delivering exceptional results
            that drive their success forward.
          </p>

          {/* Decorative line */}
          <div
            className={`
            flex items-center justify-center
            transition-all duration-500 delay-400
          `}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`
          grid grid-cols-1 md:grid-cols-3 gap-8 mb-16
          transition-all duration-700 delay-500 pt-5 
       : "opacity-0 transform translate-y-4"
          }        `}
        >
          {[
            { number: "50+", label: "Global Clients", icon: "🌍" },
            { number: "200+", label: "Projects Delivered", icon: "🚀" },
            { number: "99%", label: "Client Satisfaction", icon: "⭐" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/50 border rounded-lg dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mb-24"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Clients Grid */}
        <div
          className={`
          grid grid-cols-1 lg:grid-cols-3 gap-8
          transition-all duration-700 delay-700  pt-8
          my-10
        `}
        >
          {clients.map((client, index) => {
            const accentClasses = getAccentClasses(client.accentColor);

            return (
              <div
                key={client.id}
                className={`
                  group relative bg-white border rounded-lg dark:bg-gray-800 rounded-3xl shadow-xl
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:scale-[1.02]
                  hover:shadow-2xl ${accentClasses.hoverRing}
                  overflow-hidden
                `}
                style={{
                  animationDelay: `${index * 200 + 800}ms`,
                }}
              >
                {/* Background gradient overlay */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${client.gradient} 
                  opacity-0 group-hover:opacity-5 transition-opacity duration-500
                `}
                ></div>

                {/* Card content */}
                <div className="relative p-8 flex flex-col items-center gap-3">
                  {/* Logo section */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`
                      relative ${accentClasses.bg} rounded-3xl p-6
                      transition-all duration-300 group-hover:scale-110 group-hover:rotate-2
                      shadow-lg group-hover:shadow-xl ring-4 ${accentClasses.ring}
                    `}
                    >
                      <img
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        className="w-16 h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        loading="lazy"
                      />

                      {/* Glow effect */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-br ${client.gradient} 
                        rounded-3xl opacity-0 group-hover:opacity-20 blur-xl 
                        transition-all duration-500
                      `}
                      ></div>
                    </div>
                  </div>

                  {/* Client name */}
                  <h2
                    className={`
                    text-2xl font-bold text-center mb-3
                    text-gray-900 dark:text-white
                    group-hover:${accentClasses.text}
                    transition-colors duration-300
                  `}
                  >
                    {client.name}
                  </h2>

                  {/* Industry tag */}
                  <div
                    className={`
                    inline-flex py-3 px-8 mx-auto justify-center rounded-full text-xs font-bold mb-4
                    ${accentClasses.bg} ${accentClasses.text} ${accentClasses.border}
                     block w-fit
                  `}
                  >
                    {client.industry}
                  </div>

                  {/* Description */}
                  <p className="eading-relaxed mb-6 text-center">
                    {client.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {client.partnership}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Partnership
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {client.projects}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Completed
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`
                    w-full py-3 px-6 rounded-xl font-semibold
                    bg-gradient-to-r ${client.gradient}
                    text-white shadow-lg hover:shadow-xl
                    transform hover:scale-105 transition-all duration-300
                    focus:outline-none focus:ring-4 focus:ring-offset-2 ${accentClasses.ring}
                  `}
                  >
                    View Case Studies
                  </button>

                  {/* Bottom accent */}
                  <div
                    className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r ${client.gradient}
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left
                  `}
                  ></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`
          text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl
          transition-all duration-700 delay-1000
        `}
        >
          <h3 className="text-2xl font-bold text-white mb-4 py-3">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto pb-10">
            Let's discuss how we can help transform your business with our
            proven expertise and innovative solutions.
          </p>
          <button
            className="
            inline-flex items-center gap-2 px-8 py-4 
            bg-white text-blue-600 font-semibold rounded-xl
            shadow-lg hover:shadow-xl hover:bg-gray-50
            transform hover:-translate-y-1 hover:scale-105
            transition-all duration-300
            focus:outline-none focus:ring-4 focus:ring-white/50
          "
          >
            <span>Start Your Project</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
