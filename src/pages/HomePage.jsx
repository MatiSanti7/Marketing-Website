import ImageHeader from "../assets/image/image-header.webp";
import isotipo from "../assets/isotipo.png";
import features from "../assets/data/features.json";
import Feature from "../components/Feature";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header className="flex flex-col w-full">
        <div className="relative xl:h-[340px] ">
          <img
            src={ImageHeader}
            alt="image-header"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-300/70"></div>
          <div className="absolute flex flex-col items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img src={isotipo} alt="" className="w-20" />
            <h1 className="mb-12 text-4xl font-bold text-center text-white sm:text-8xl">
              Discover Our Features
            </h1>
            <Link
              to={"/landing"}
              className="px-5 py-3 text-xl text-white transition-all duration-300 bg-blue-300 rounded-md xl:text-2xl hover:bg-blue-400 xl:px-7 hover:shadow-md "
            >
              Explore more
            </Link>
          </div>
        </div>
        <p className="w-11/12 mx-auto text-sm text-center md:text-xl md:w-2/3 text-balance mt-14">
          Discover the key features that make our product stand out. Designed
          with performance, security, and customization in mind, our product
          offers everything you need for a seamless and secure experience.
          Explore the highlights below to see how our features can benefit you.
        </p>
      </header>
      <main className="flex flex-col w-5/6 gap-10 mx-auto my-14 justify-evenly xl:flex-row xl:gap-0">
        {features.map((feature, index) => (
          <Link key={index} to={`/feature/${feature.id}`}>
            <Feature feature={feature} />
          </Link>
        ))}
      </main>
      <footer className="flex flex-col items-center justify-center w-1/2 mx-auto mb-14">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="flex items-center justify-center gap-14">
          <p className="w-[670px] my-4 text-xl  text-balance">
            We{"'"}re here to help. If you have questions or need more
            information about our services, don{"'"}t hesitate to reach out to
            us.
          </p>
          <Link
            to={"/landing"}
            className="w-1/4 py-2 text-2xl text-center text-white transition-all bg-blue-300 rounded-md hover:bg-blue-400 hover:shadow-md"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
