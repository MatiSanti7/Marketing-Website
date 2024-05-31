import features from "../../features.json";
import Feature from "./Feature";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="flex flex-col gap-10 justify-evenly xl:flex-row xl:gap-0">
      {features.map((feature, index) => (
        <Link key={index} to={`/feature/${feature.id}`}>
          <Feature feature={feature} />
        </Link>
      ))}
    </main>
  );
};

export default Main;
