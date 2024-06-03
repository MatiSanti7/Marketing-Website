import PropTypes from "prop-types";

const FeatureResume = ({ feature }) => {
  return (
    <li className="flex flex-col items-center w-1/4 gap-5">
      <img src={feature.icon} alt="" className="object-contain w-36 h-3w-36" />
      <div className="flex flex-col gap-3">
        <strong className="text-3xl">{feature.title}</strong>
        <small className="mb-4 text-xl text-balance">
          {feature.description}
        </small>
        <ul className="flex flex-col items-center gap-3">
          {feature.subFeatures.map((subfeature, index) => (
            <li
              key={index}
              className="px-5 py-2 font-medium text-white bg-blue-300 rounded-md"
            >
              {subfeature.title}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

FeatureResume.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.number,
    subFeatures: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default FeatureResume;
