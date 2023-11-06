import "./myprojectssection-styles.css";

const MyProjectsSection = () => {
  return (
    <div className="myProjectsSection">
      <h1 className="headText text-right">My projects</h1>
      <div className="projectsText">
        Throughout my journey in computer science and technology, I've had the
        opportunity to work on diverse and exciting projects that have allowed
        me to apply my knowledge and skills in practical ways. One of the
        projects that I'm particularly proud of is the creation of a platform
        for renting semi-trucks (tractor units) and various types of trailers.
      </div>
      <br /> <br />
      <div className="responsiveProjects1">
        <img
          src="/about-me/freshrental.png"
          alt="freshRental"
          className="freshRental"
        />
        <div className="projectsText">
          <br />
          <h3 className="text-xl font-semibold">Fresh Truck Rental</h3>
          <br />
          In this project, I developed a user-friendly platform that connects
          individuals and businesses with a need for semi-trucks and trailers to
          those who have these resources available for rent. The system
          streamlines the rental process, making it efficient and convenient for
          users to find and secure the equipment they require.
        </div>
      </div>
      <br />
      <br />
      <div className="responsiveProjects2 justify-between">
        <div className="projectsText">
          <h3 className="text-xl font-semibold">Key features:</h3>
          <li>User-friendly interface for easy navigation and booking.</li>
          <li>
            Detailed listings of available trucks and trailers with
            specifications.
          </li>
          <li>Secure payment processing for seamless transactions</li>
          <li>Real-time availability updates to ensure accurate booking.</li>
          <li>Integration of user reviews and ratings for trustworthiness.</li>
        </div>
        <img
          src="/about-me/freshrental2.png"
          alt="freshRental2"
          className="freshRental"
        />
      </div>
      <div className="text-center m-5 text-xl">
        Explore my{" "}
        <a
          className="font-bold text-blue-800"
          href="https://zprzemek378.github.io/fresh-car-rental"
        >
          Fresh Truck Rental
        </a>{" "}
        website!
        <br />
        <span className=" text-sm">(Under Construction)</span>
      </div>
    </div>
  );
};

export default MyProjectsSection;
