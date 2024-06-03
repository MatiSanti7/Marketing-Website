import dataTestimonial from "../assets/data/testimonials.json";
import PropsTypes from "prop-types";

const SectionAbout = ({ refe }) => {
  const tringles =
    "w-0 h-0 border-t-[15px] border-t-transparent border-r-[25px] border-r-slate-200 border-b-[15px] border-b-transparent";

  return (
    <section
      className="flex flex-col items-center justify-center h-screen gap-12"
      ref={refe}
    >
      <div className="space-y-5 pt-14">
        <h2 className="text-4xl font-bold text-center">What Our Client Say</h2>
        <p className="w-2/3 mx-auto text-2xl text-center text-balance">
          Explore our marketing solution{"'"}s innovative features, designed for
          seamless performance and security. With responsive designs for all
          devices and advanced security measures, we prioritize your success.
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
  );
};

SectionAbout.propTypes = {
  refe: PropsTypes.object,
};

export default SectionAbout;
