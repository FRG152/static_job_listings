import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import "./style/main.css";
import { data } from "./utils/data";

function App() {
  const [jobs, setJobs] = useState([...data]);
  const [selection, setSelection] = useState([]);
  useEffect(() => {
    if (selection.length > 0) {
      const newArr = jobs.filter(({ role, level, languages }) => {
        return (
          [...selection].includes(role) ||
          [...selection].includes(level) ||
          [...selection].includes(...languages)
        );
      });
      setJobs(newArr);
    } else {
      setJobs(data);
    }
  }, [selection]);
  return (
    <>
      <Header selection={selection} setSelection={setSelection} />
      {jobs.map((data, index) => (
        <Card
          selection={selection}
          setSelection={setSelection}
          key={index}
          data={data}
        />
      ))}
    </>
  );
}

export default App;
