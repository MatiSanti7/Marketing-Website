import iconChecked from "../assets/icons/icon-checked.png";
import dataPricing from "../assets/data/pricing.json";
import PropsTypes from "prop-types";

const SectionPricing = ({ refe }) => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen gap-12"
      ref={refe}
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
              <p className="text-center text-balance">{pricing.description}</p>
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
  );
};

SectionPricing.propTypes = {
  refe: PropsTypes.object,
};

export default SectionPricing;
