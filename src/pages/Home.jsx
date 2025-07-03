/**
 * Main Home page component
 *
 * @returns {React.ReactElement} The JSX element for the Home page
 */
import { CardComponent } from "../Component/Card";
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
      logo: "data:image/jpeg;base64,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REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=",
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
      <section
        className="dark:bg-gray-900 h-screen py-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex items-center"
        style={{ marginTop: "-100px", marginBottom: "70px" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-4">
            <h1
              className="text-4xl md:text-5xl xl:text-3xl open-sans font-bold font-serif text-blue-500 dark:text-blue-400 tracking-tight lg:mt-2 mb-2"
              style={{ padding: 60 }}
            >
              Our Projects
            </h1>
            {/* <p className="text-lg text-gray-600 font-serif font-bold dark:text-gray-300 max-w-2xl mx-auto" style={{ paddingTop: 20 }}>
        We are proud to collaborate with some of the world’s most recognizable brands and innovators.
      </p> */}
          </div>
          <div className="grid sm:h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
            {projects.map((project) => {
              return (
                <CardComponent
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  logo={project.logo}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
