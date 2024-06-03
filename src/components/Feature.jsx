import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  return (
    <div
      id={feature.id}
      className="transition-all duration-500 cursor-pointer text-white bg-blue-300 rounded-b-md hover:shadow-xl hover:bg-blue-400 w-[400px] h-[210px] mx-auto"
    >
      <img
        src={feature.image}
        alt=""
        className="object-cover w-full rounded-t-md h-3/4"
      />
      <h3 className="my-2 text-2xl text-center h-1/4">{feature.title}</h3>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Feature;
