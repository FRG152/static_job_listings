// HOOKS
import { useEffect, useState } from "react";
// COMPONENTS
import Filter from "./components/Filter";
import Card from "./components/Card";
// UTILS
import { data } from "./utils/data";
// STYLE
import "./style/main.css";

function App() {
  const [jobs, setJobs] = useState([...data]);
  const [selection, setSelection] = useState([]);
  // CREATE A NEW ARRAY ACCORDING TO THE FILTER AND THEN PASS IN THE NEW ARRAY
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
  // ADD ELEMENTS IN THE FILTER
  const addFilter = (e) => {
    let check = selection.some(() => {
      return [...selection].includes(e.target.innerHTML);
    });
    if (!check) setSelection([...selection, e.target.innerHTML]);
  };
  // REMOVE THE SELECTED ELEMENT FROM THE FILTER
  const removeSelection = (index) => {
    const newArr = [...selection];
    newArr.splice(index, 1);
    setSelection(newArr);
  };
  // REMOVE ALL THE ELEMENTS FROM THE FILTER
  const removeAll = () => {
    setSelection([]);
  };
  return (
    <>
      <header>
        <Filter
          selection={selection}
          removeAll={removeAll}
          removeSelection={removeSelection}
        />
      </header>
      {jobs.map((data, index) => (
        <Card id={index} key={index} data={data} addFilter={addFilter} />
      ))}
    </>
  );
}

export default App;
