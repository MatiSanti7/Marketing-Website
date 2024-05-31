import PropTypes from "prop-types";
const SubFeature = ({ subfeature }) => {
  return (
    <div className="flex flex-col gap-5 xl:flex-row">
      <div className="flex w-full h-36 xl:h-48 xl:w-1/3">
        <div className="flex justify-end w-full h-full bg-blue-200 rounded-md">
          <img
            src={"../" + subfeature.image}
            alt={subfeature.title}
            className="object-cover w-[98%] xl:w-[96%] h-full rounded-r-md"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 xl:w-2/3">
        <h2 className="mt-2 text-xl font-bold xl:text-3xl">
          {subfeature.title}
        </h2>
        <p className="text-sm xl:text-lg">{subfeature.description}</p>
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
