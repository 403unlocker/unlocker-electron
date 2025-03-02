import { useState } from "react";
import AppHeading from "./components/AppHeading";
import LinkInput from "./components/LinkInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [link, setLink] = useState("");

  return (
    <div className="flex flex-col items-stretch font-body text-typo-0 py-6 px-[75px] h-screen overflow-hidden">
      <AppHeading />
      <LinkInput onChange={setLink} />
      <ResultTable link={link} />
    </div>
  );
}

export default App;
