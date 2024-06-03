import PropTypes from "prop-types";

const FeatureResume = ({ feature }) => {
  const { icon, title, description, subFeatures } = feature;

  return (
    <li className="flex flex-col items-center w-1/4 gap-5">
      <img src={icon} alt="" className="object-contain w-36 h-3w-36" />
      <div className="flex flex-col gap-3">
        <strong className="text-3xl">{title}</strong>
        <p className="mb-4 text-xl text-center text-balance">{description}</p>
        <ul className="flex flex-col items-center gap-3">
          {subFeatures.map((sf, index) => (
            <li
              key={index}
              className="px-5 py-2 font-medium text-white bg-blue-300 rounded-md"
            >
              {sf.title}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

FeatureResume.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subFeatures: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default FeatureResume;
