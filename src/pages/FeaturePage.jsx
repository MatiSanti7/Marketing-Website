import PropTypes from "prop-types";
import SubFeature from "../components/SubFeature";

const FeaturePage = ({ feature }) => {
  return (
    <div className="flex">
      <div className="relative flex w-1/4 h-screen">
        <img
          src={"../" + feature.image}
          alt=""
          className="object-cover w-full h-screen"
        />
        <div className="absolute top-0 w-full h-full bg-black opacity-70"></div>
        <h1 className="absolute text-5xl font-bold text-white uppercase w-[100vh] -rotate-90 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center">
          {feature.title}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 h-screen gap-10">
        <p className="text-xl font-bold ">{feature.description}</p>
        {feature.subFeatures.map((subfeature, index) => (
          <SubFeature subfeature={subfeature} key={index} />
        ))}
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
