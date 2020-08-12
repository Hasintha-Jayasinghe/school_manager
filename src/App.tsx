import React from "react";
import ClassCard from "./components/classCard";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <ClassCard label="hello" teacher="String" />
    </div>
  );
};

export default App;
