import { useState, Fragment } from "react";
import Reviews from "./Components/Reviews";
import data from './Components/data';


function App() {
  const [index, setIndex] = useState(0)

  const currentReview = data[index];

  return (
    <Fragment >
      <Reviews currentReview={currentReview} />
    </Fragment>
  );
}

export default App;
