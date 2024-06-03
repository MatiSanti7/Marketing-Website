import PropsTypes from "prop-types";

const SectionContact = ({ refe }) => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen gap-12"
      ref={refe}
    >
      <div className="space-y-5 pt-14">
        <h2 className="text-4xl font-bold text-center">Contact</h2>
        <p className="w-2/3 mx-auto text-2xl text-center text-balance">
          We{"'"}d love to hear from you! Whether you have a question about
          features, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
      </div>
      <form action="" className="flex flex-col w-1/4 gap-10 mx-auto text-2xl">
        <input
          className="px-4 py-2 transition-all border-b-4 outline-none border-b-blue-300 focus:border-b-blue-400 hover:border-b-blue-400"
          type="text"
          name=""
          id=""
          placeholder="Name"
        />
        <input
          placeholder="Email"
          className="px-4 py-2 transition-all border-b-4 outline-none border-b-blue-300 focus:border-b-blue-400 hover:border-b-blue-400"
          type="email"
          name=""
          id=""
        />
        <textarea
          placeholder="Message"
          name=""
          id=""
          className="h-40 px-4 py-2 transition-all border-b-4 outline-none resize-none border-b-blue-300 focus:border-b-blue-400 hover:border-b-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-1/2 px-4 py-2 mx-auto my-5 font-medium text-white transition-all bg-blue-300 rounded-md hover:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

SectionContact.propTypes = {
  refe: PropsTypes.object,
};

export default SectionContact;
