/**
 * Main Home page component
 *
 * @returns {React.ReactElement} The JSX element for the Home page
 */
import { Card } from "flowbite-react";
import { CarousalComponent } from "../Component/Carousal";
const Home = () => {
  /**
   * Array of project data to display in the projects section
   *
   * @type {Array<{ id: number, name: string, description: string, logo: string }>}
   */
  const projects = [
    {
      id: 1,
      name: "kulcare",
      description:
        "Virtual care platform for India’s doctors. SaaS solution with full suite of digital clinic tools like telemedicine, scheduling, payments, eRx, and complete EHR.",
      logo: "https://addvalsolutions.com/assets/images/capabilities/web-and-mobile/kulcare-new.png",
    },
    {
      id: 2,
      name: "InAuth",
      description:
        "InAuth is a mobile security application that delivers the deepest device authentication technology in the market to authenticate, reduce risk and maximize digital transaction in today’s increasingly complex, mobile-first world",
      logo: "https://addvalsolutions.com/assets/images/work/inauth-opt.jpeg",
    },
    {
      id: 3,
      name: "Calvin Klein",
      description:
        "We built an Augmented Reality (AR) application back to showcase CK products. The AR app was launched simultaneously worldwide to showcase the ckOne brand.",
      logo: "https://addvalsolutions.com/assets/images/work/ck2.jpg",
    },
  ];

  /**
   * A React component that renders the home page with a hero section, carousel, and project showcase.
   * @returns {JSX.Element} The home page component with responsive styling.
   */
  const Home = () => {
    return (
      /**
       * Main container for the home page.
       * @type {JSX.Element}
       */
      <div>
        /** * Hero section with background image and call-to-action. * @type{" "}
        {JSX.Element}
        */
        <div
          className="flex items-center justify-center h-screen p-4 bg-red dark:bg-blue-700"
          style={{
            backgroundImage: 'URL("src/assets/Home.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center justify-center text-center max-w-2xl w-full">
            /** * Hero section title. * @type {JSX.Element}
            */
            <h1
              className="md:text-4xl lg:text-7xl animate-pulse font-extrabold mb-6 text-gray-800 dark:text-black leading-snug"
              style={{
                marginTop: -150,
                fontFamily: "open-sans",
                fontWeight: 800,
              }}
            >
              Welcome to <span className="text-blue-500">Addval Solutions</span>
            </h1>
            /** * Hero section description. * @type {JSX.Element}
            */
            <p
              className="text-lg sm:text-xl mb-8 font-bold text-white"
              style={{ marginTop: 40 }}
            >
              Transform your dreams into reality with our innovative solutions!
              Let us help you achieve success with cutting-edge expertise.
            </p>
            /** * Hero section call-to-action button. * @type {JSX.Element}
            */
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white dark:text-black w-40 sm:w-48 dark:bg-blue-700 hover:bg-blue-500 mb-8 px-6 py-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl rounded-lg shadow-lg mx-auto cursor-pointer transition"
              style={{ marginTop: 40 }}
            >
              Get Started
            </div>
          </div>
        </div>
        /** * Carousel section. * @type {JSX.Element}
        */
        <div className="mx-auto">
          <CarousalComponent />
        </div>
        /** * Projects section showcasing featured projects. * @type{" "}
        {JSX.Element}
        */
        <section
          className="bg-blue-400 h-screen px-4 sm:px-8 md:px-16 md:pt-96 lg:px-20 flex items-center"
          style={{ backgroundColor: "#212c3f", paddingTop: -200 }}
        >
          <div className="max-w-7xl mx-auto w-full">
            /** * Projects section header. * @type {JSX.Element}
            */
            <div className="text-center mb-6">
              <h1
                className="text-4xl text-white md:text-5xl font-bold font-serif text-gray-900 dark:text-blue-400 tracking-tight mt-2 mb-2"
                style={{ padding: 20 }}
              >
                Our Projects
              </h1>
            </div>
            /** * Grid of project cards. * @type {JSX.Element}
            */
            <div className="grid sm:h-screen grid-cols-1 sm:grid-cols-2 sm:mt-20 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                return (
                  // <Card/>
                  /**
                   * Individual project card with hover effects.
                   * @type {JSX.Element}
                   */
                  <div
                    key={project.id}
                    className={`
              group flex flex-col items-center justify-between
              bg-white dark:bg-gray-800 rounded-xl shadow-md
              border border-blue-400
              transition-all duration-300 ease-in-out
              hover:-translate-y-2 hover:scale-105
              hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500
              text-center h-full min-h-[420px]
            `}
                    style={{
                      padding: 30,
                      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
                    }}
                  >
                    <div className="flex flex-col items-center border flex-1 w-full">
                      /** * Project logo with hover animation. * @type{" "}
                      {JSX.Element}
                      */
                      <span
                        className={`
                inline-flex items-center justify-center w-20 h-20 rounded-full
                mb-6 shadow-md transition-transform duration-300 ease-in-out
                group-hover:scale-110 group-hover:rotate-6
              `}
                      >
                        <img
                          src={project.logo}
                          alt={`${project.name} Logo`}
                          className="w-24 h-14 object-contain rounded-full"
                          loading="lazy"
                        />
                      </span>
                      /** * Project name. * @type {JSX.Element}
                      */
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-1 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {project.name}
                      </h2>
                      /** * Project description. * @type {JSX.Element}
                      */
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>
                    /** * Project call-to-action button. * @type {JSX.Element}
                    */
                    <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition-transform transition-colors duration-200 mt-2 group-hover:scale-105 group-hover:shadow-lg">
                      Visit Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  };
};

export default Home;
