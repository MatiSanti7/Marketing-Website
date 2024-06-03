import dataFeatures from "../assets/data/features.json";
import FeatureResume from "./FeatureResume";
import PropsTypes from "prop-types";

const SectionFeature = ({ refe }) => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen gap-20"
      ref={refe}
    >
      <div className="space-y-5 pt-14">
        <h2 className="text-4xl font-bold text-center">Our Features</h2>
        <p className="w-2/3 mx-auto text-2xl text-center text-balance">
          Explore our marketing solution{"'"}s innovative features, designed for
          seamless performance and security. With responsive designs for all
          devices and advanced security measures, we prioritize your success.
          Dive in to see how our technology can elevate your business.
        </p>
      </div>
      <ul className="flex justify-between w-2/3 my-4">
        {dataFeatures.map((feature, index) => (
          <FeatureResume key={index} feature={feature} />
        ))}
      </ul>
    </section>
  );
};

SectionFeature.propTypes = {
  refe: PropsTypes.object,
};

export default SectionFeature;
