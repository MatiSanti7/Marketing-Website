import PropTypes from "prop-types";
const SubFeature = ({ subfeature }) => {
  return (
    <div className="flex w-2/3 gap-2">
      <div className="flex justify-end w-3 h-full bg-blue-200"></div>
      <div className="flex gap-4">
        <img
          src={"../" + subfeature.image}
          alt={subfeature.title}
          className="object-cover h-52 w-72"
        />
        <div className="flex flex-col gap-2">
          <h2 className="mt-2 text-3xl font-bold">{subfeature.title}</h2>
          <p className="text-lg">{subfeature.description}</p>
        </div>
      </div>
    </div>
  );
};

SubFeature.propTypes = {
  subfeature: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SubFeature;
