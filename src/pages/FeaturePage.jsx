import PropTypes from "prop-types";
import SubFeature from "../components/SubFeature";

const FeaturePage = ({ feature }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex h-screen">
        <div className="relative flex w-1/4">
          <img
            src={"../" + feature.image}
            alt=""
            className="object-cover w-full h-screen"
          />
          <div className="absolute top-0 w-full h-full bg-blue-400/70 opacity-70"></div>
          <h1 className="absolute text-6xl font-bold text-white uppercase w-[100vh] -rotate-90 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center">
            {feature.title}
          </h1>
        </div>
        <div className="flex flex-col items-center w-3/4 xl:justify-center">
          <p className="w-11/12 my-10 text-base font-bold xl:text-xl xl:w-2/3">
            {feature.description}
          </p>
          <div className="flex flex-col w-11/12 gap-10 mb-5 xl:w-2/3">
            {feature.subFeatures.map((subfeature, index) => (
              <SubFeature subfeature={subfeature} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturePage.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subFeatures: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default FeaturePage;
