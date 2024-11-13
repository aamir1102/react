import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

const ThemeContext = createContext();
const DataContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState("dark");

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ChildA />
        </ThemeContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext, DataContext };
