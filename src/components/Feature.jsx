import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  return (
    <div
      id={feature.id}
      className="transition-all duration-500 cursor-pointer hover:text-white bg-slate-200 rounded-b-md hover:shadow-xl hover:bg-blue-300 w-[400px] mx-auto"
    >
      <img src={feature.image} alt="" className="object-cover rounded-t-md" />
      <h3 className="py-5 text-2xl text-center">{feature.title}</h3>
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
