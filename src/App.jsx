import { Route, Routes } from "react-router-dom";
import Code from "./routes/Code";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Code />} />
      </Routes>
    </div>
  );
}
