import { useRef } from "react";
import Nav from "../components/Nav";
import bgImage from "../assets/image/image-header.webp";
import iconChecked from "../assets/icons/icon-checked.png";
import dataFeatures from "../assets/data/features.json";
import FeatureResume from "../components/FeatureResume";
import dataTestimonial from "../assets/data/testimonials.json";
import dataPricing from "../assets/data/pricing.json";

const LandingPage = () => {
  const tringles =
    "w-0 h-0 border-t-[15px] border-t-transparent border-r-[25px] border-r-slate-200 border-b-[15px] border-b-transparent";

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const contactRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative">
      <Nav
        scrollToSection={scrollToSection}
        headerRef={headerRef}
        featureRef={featureRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        pricingRef={pricingRef}
      />
      <header className="relative h-screen" ref={headerRef}>
        <img src={bgImage} alt="" className="object-cover w-full h-full" />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-300/70"></div>
        <div className="absolute flex flex-col w-3/5 gap-16 -translate-y-1/3 -translate-x-1/3 top-1/2 left-1/3">
          <p className="font-bold text-white text-7xl">
            Welcome to Our Marketing Solution Boost Your Business with Our
            Advanced Features
          </p>
          <div className="space-x-3 text-3xl">
            <button className="px-10 py-4 transition-all rounded-md hover:shadow-md py-b-4 bg-slate-200 hover:bg-slate-100">
              Learn More
            </button>
            <button className="px-10 py-4 font-medium text-white transition-all bg-blue-300 rounded-md hovershadow-md hover:bg-blue-400 hover:shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </header>
      <section
        className="flex flex-col items-center justify-center h-screen gap-20 text-center"
        ref={featureRef}
      >
        <div className="space-y-5 pt-14">
          <h2 className="text-4xl font-bold">Our Features</h2>
          <p className="w-2/3 mx-auto text-2xl text-balance">
            Explore our marketing solution{"'"}s innovative features, designed
            for seamless performance and security. With responsive designs for
            all devices and advanced security measures, we prioritize your
            success. Dive in to see how our technology can elevate your
            business.
          </p>
        </div>
        <ul className="flex justify-between w-2/3 my-4">
          {dataFeatures.map((feature, index) => (
            <FeatureResume key={index} feature={feature} />
          ))}
        </ul>
      </section>
      <section
        className="flex flex-col items-center justify-center h-screen gap-12"
        ref={pricingRef}
      >
        <div className="space-y-5 pt-14">
          <h2 className="text-4xl font-bold text-center">Pricing Plans</h2>
          <p className="mx-auto text-2xl text-center">
            Choose a plan that fits your needs.
          </p>
        </div>
        <ul className="flex items-start gap-10">
          {dataPricing.map((pricing, index) => (
            <li
              key={index}
              className={`flex flex-col rounded-md w-[370px] p-10 gap-16 ${
                index == 1 ? "bg-blue-500 text-white" : "bg-slate-200"
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <h4 className="text-3xl font-bold">{pricing.title}</h4>
                <strong className="flex items-center text-3xl font-normal">
                  $
                  <span className="px-2 pb-2 text-6xl font-bold">
                    {pricing.price}
                  </span>
                  <span className="pb-5 text-xl">/{pricing.duration}</span>
                </strong>
                <p className="text-center text-balance">
                  {pricing.description}
                </p>
                <ul className="flex flex-col w-full gap-3">
                  {pricing.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-lg font-medium"
                    >
                      <img src={iconChecked} alt="" className="w-7" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-3 font-bold  ${
                  index == 1
                    ? "bg-slate-100 text-blue-500 hover:bg-slate-200"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                } rounded-md transition-all `}
              >
                Chose Plan
              </button>
            </li>
          ))}
        </ul>
        <div></div>
      </section>
      <section
        className="flex flex-col items-center justify-center h-screen gap-12"
        ref={aboutRef}
      >
        <div className="space-y-5 pt-14">
          <h2 className="text-4xl font-bold text-center">
            What Our Client Say
          </h2>
          <p className="w-2/3 mx-auto text-2xl text-center text-balance">
            Explore our marketing solution{"'"}s innovative features, designed
            for seamless performance and security. With responsive designs for
            all devices and advanced security measures, we prioritize your
            success.
          </p>
        </div>
        <ul className="grid w-5/6 grid-cols-1 mx-auto gap-7 xl:grid-cols-2 ">
          {dataTestimonial.map((testimonial, index) => (
            <li key={index} className="flex items-center">
              <div className="flex items-center w-2/5 h-full gap-3">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <strong className="text-2xl text-blue-300">
                    {testimonial.name}
                  </strong>
                  <small className="text-base text-left text-balance text-slate-400">
                    {testimonial.profession}
                  </small>
                </div>
              </div>
              <div className="relative w-3/5">
                <div
                  className={`absolute -translate-y-1/2 top-1/2 ${tringles}`}
                ></div>
                <p className="p-4 ml-5 rounded-md text-start bg-slate-200">{`"${testimonial.testimonial}"`}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section
        className="flex flex-col items-center justify-center h-screen gap-12"
        ref={contactRef}
      >
        <div className="space-y-5 pt-14">
          <h2 className="text-4xl font-bold text-center">Contact</h2>
          <p className="w-2/3 mx-auto text-2xl text-center text-balance">
            We{"'"}d love to hear from you! Whether you have a question about
            features, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
        </div>
        <form action="" className="flex flex-col w-1/4 gap-10 mx-auto text-2xl">
          <input
            className="px-4 py-2 transition-all border-b-4 outline-none border-b-blue-300 focus:border-b-blue-400 hover:border-b-blue-400"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            placeholder="Email"
            className="px-4 py-2 transition-all border-b-4 outline-none border-b-blue-300 focus:border-b-blue-400 hover:border-b-blue-400"
            type="email"
            name=""
            id=""
          />
          <textarea
            placeholder="Message"
            name=""
            id=""
            className="h-40 px-4 py-2 transition-all border-b-4 outline-none resize-none border-b-blue-300 focus:border-b-blue-400 hover:border-b-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-1/2 px-4 py-2 mx-auto my-5 font-medium text-white transition-all bg-blue-300 rounded-md hover:bg-blue-400"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
