import { useState } from "react";
import AppHeading from "./components/AppHeading";
import LinkInput from "./components/LinkInput";
import ResultTable from "./components/ResultTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [link, setLink] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-stretch font-body text-typo-0 py-6 px-[75px] h-screen overflow-hidden">
        <AppHeading />
        <LinkInput onChange={setLink} />
        <ResultTable link={link} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
