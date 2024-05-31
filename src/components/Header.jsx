import ImageHeader from "../assets/image/image-header.webp";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <div className="relative h-[350px]">
        <img
          src={ImageHeader}
          alt="image-header"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <h1 className="absolute w-full text-5xl font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 sm:text-8xl top-1/2 left-1/2">
          Discover Our Features
        </h1>
      </div>
      <p className="w-11/12 mx-auto my-12 text-sm text-center md:text-xl md:w-1/2 text-balance">
        Discover the key features that make our product stand out. Designed with
        performance, security, and customization in mind, our product offers
        everything you need for a seamless and secure experience. Explore the
        highlights below to see how our features can benefit you.
      </p>
    </header>
  );
};

export default Header;
