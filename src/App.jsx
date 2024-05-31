import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import features from "../features.json";
import { useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feature/:id" element={<FeatureWrapper />} />
      </Routes>
    </Router>
  );
}

const FeatureWrapper = () => {
  const { id } = useParams();
  const feature = features.find((feature) => feature.id === parseInt(id, 10));
  return <FeaturePage feature={feature} />;
};

export default App;
