/**
 * Our Work Section component
 *
 * This component renders the "Our Work" section on the homepage.
 * It displays a grid of cards with different technologies and their corresponding descriptions.
 * Each card also includes a list of features and a call to action button.
 */

import React from "react";
import { ArrowRight, Sparkles, Zap, Shield, Target } from "lucide-react";

const workItems = [
  {
    id: 1,
    title: "Consumer Internet",
    description:
      "Building next-generation digital experiences that connect and engage users worldwide.",
    icon: <Target className="w-8 h-8" />,
    points: ["Native Mobile Apps", "Web Applications", "Cloud Orchestration"],
    colors: {
      primary: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800",
      hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    },
  },
  {
    id: 2,
    title: "Robotics & Automation",
    description:
      "Pioneering intelligent automation solutions that revolutionize industrial processes.",
    icon: <Zap className="w-8 h-8" />,
    points: [
      "Drive by Wire Systems",
      "Autonomous Mobile Robots",
      "Indoor Guided Systems",
    ],
    colors: {
      primary: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800",
      hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    },
  },
  {
    id: 3,
    title: "Internet of Things",
    description:
      "Creating interconnected ecosystems that bridge the physical and digital worlds.",
    icon: <Shield className="w-8 h-8" />,
    points: [
      "Hardware Solutions",
      "Scalable Interfaces",
      "Multi-protocol Gateway",
    ],
    colors: {
      primary: "text-purple-600 dark:text-purple-400",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800",
      hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    },
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description:
      "Harnessing artificial intelligence to unlock insights and automate decision-making.",
    icon: <Sparkles className="w-8 h-8" />,
    points: [
      "Predictive Modeling",
      "Recommender Systems",
      "Intelligent Chatbots",
    ],
    colors: {
      primary: "text-orange-600 dark:text-orange-400 px-10",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800",
      hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    },
  },
];

export default function OurWorkSection() {
  /**
   * Array of work items
   *
   * @type {Array<{ id: number, title: string, description: string, icon: React.ReactNode, points: Array<string> }>}
   */
  const workItems = [
    {
      id: 1,
      title: "Consumer Internet",
      description:
        "Building next-generation digital experiences that connect and engage users worldwide.",
      icon: <Target className="w-8 h-8" />,
      points: ["Native Mobile Apps", "Web Applications", "Cloud Orchestration"],
      colors: {
        primary: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800 rounded-xl",
        hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      },
    },
    {
      id: 2,
      title: "Robotics & Automation",
      description:
        "Pioneering intelligent automation solutions that revolutionize industrial processes.",
      icon: <Zap className="w-8 h-8" />,
      points: [
        "Drive by Wire Systems",
        "Autonomous Mobile Robots",
        "Indoor Guided Systems",
      ],
      colors: {
        primary: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800 rounded-xl",
        hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      },
    },

    {
      id: 3,
      title: "Internet of Things",
      description:
        "Creating interconnected ecosystems that bridge the physical and digital worlds.",
      icon: <Shield className="w-8 h-8" />,
      points: [
        "Hardware Solutions",
        "Scalable Interfaces",
        "Multi-protocol Gateway",
      ],
      colors: {
        primary: "text-purple-600 dark:text-purple-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800 rounded-xl",
        hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      },
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description:
        "Harnessing artificial intelligence to unlock insights and automate decision-making.",
      icon: <Sparkles className="w-8 h-8" />,
      points: [
        "Predictive Modeling",
        "Recommender Systems",
        "Intelligent Chatbots",
      ],
      colors: {
        primary: "text-orange-600 dark:text-orange-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800 rounded-xl",
        hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      },
    },
  ];
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-10 mt-10  justify-center w-16 h-16 bg-blue-600 rounded-xl mb-8 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our{" "}
            <span className="text-blue-500 dark:text-blue-400">Expertise</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming ambitious visions into exceptional digital realities
            through cutting-edge technology solutions
          </p>

          <div className="flex items-center justify-center mt-8 pb-10 ">
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {workItems.map((item) => (
            <div
              key={item.id}
              className={`
                bg-white dark:bg-gray-800 shadow-lg border

                ${item.colors.border} ${item.colors.hover}
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-xl
                cursor-pointer group
              `}
            >
              <div className="p-6">
                {/* Icon Section */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`
                    ${item.colors.bg} rounded-xl p-4 shadow-md
                    group-hover:scale-105 transition-transform duration-300
                  `}
                  >
                    <div className={item.colors.primary}>{item.icon}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-center mb-4 text-blue-400 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${item.colors.primary.replace(
                          "text-",
                          "bg-"
                        )}`}
                      ></div>
                      <span className="text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div
            className="max-w-3xl mx-auto mb-8"
            style={{ paddingTop: "60px" }}
          >
            <h3 className="text-3xl font-bold text-blue-500 dark:text-white mb-4">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 pb-10">
              Let's collaborate to build something extraordinary. Our team of
              experts is ready to bring your ideas to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="
              inline-flex items-center gap-3 px-8 py-4
              bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl
              shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
              transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50
            "
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              className="
              inline-flex items-center gap-3 px-8 py-4
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl
              border border-gray-300 dark:border-gray-700
              shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
              transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/20
            "
            >
              <span>View Our Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
