/**
 * Main Home page component
 *
 * @returns {React.ReactElement} The JSX element for the Home page
 */
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

  return (
    <div>
      <div
        className="flex items-center justify-center h-screen p-4"
        style={{
          backgroundImage: 'url("src/assets/Home.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-col items-center justify-center text-center max-w-2xl w-full bg-gray-900/50 backdrop-blur-md rounded-lg p-8"
          style={{ marginTop: "-200px", paddingTop: "100px" }}
        >
          <h1
            className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-snug"
            style={{ marginTop: "-0px" }}
          >
            Welcome to{" "}
            <span className="text-blue-500 animate-pulse">
              Addval Solutions
            </span>
          </h1>
          <p
            className="text-xl mb-8 font-bold text-white gap-2"
            style={{ marginTop: 40 }}
          >
            Transform your dreams into reality with our innovative solutions!
            Let us help you achieve success with cutting-edge expertise.
          </p>
          <div
            className="bg-blue-500 animate-pulse open-sans hover:bg-blue-700 text-white dark:text-black w-40 sm:w-48 dark:bg-blue-700 hover:bg-blue-500 mb-8 px-6 py-3 rounded-lg shadow-lg mx-auto cursor-pointer transition"
            style={{ marginTop: 40 }}
          >
            Get Started
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <CarousalComponent />
      </div>

      {/* our project section  */}
      <section className="dark:bg-gray-900 h-screen py-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-4">
            <h1
              className="text-4xl md:text-5xl xl:text-3xl open-sans font-bold font-serif text-white dark:text-blue-400 tracking-tight lg:mt-2 mb-2"
              style={{ padding: 60 }}
            >
              Our Projects
            </h1>
            {/* <p className="text-lg text-gray-600 font-serif font-bold dark:text-gray-300 max-w-2xl mx-auto" style={{ paddingTop: 20 }}>
        We are proud to collaborate with some of the world’s most recognizable brands and innovators.
      </p> */}
          </div>
          <div className="grid sm:h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
            {projects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  className={`group flex flex-col items-center justify-between bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-blue-400 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 text-center h-full min-h-[420px] rounded-xl`}
                  style={{
                    padding: "30px",
                  }}
                >
                  <div className="flex flex-col items-center flex-1 w-full">
                    <span className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6">
                      <img
                        src={project.logo}
                        alt={`${project.name} Logo`}
                        className="w-48 h-14 object-contain rounded-full"
                        loading="lazy"
                      />
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-1 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {project.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>
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

export default Home;
