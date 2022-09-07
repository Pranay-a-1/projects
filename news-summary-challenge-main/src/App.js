import mockNewsData from './mockNewsData.json';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Summary from "./components/Summary";
import AllCards from "./components/AllCards";
import getDataFromAPI from './components/utils/getDataFromApi';
import { useState, useEffect } from 'react';
import NewsLoader from './NewsLoader';

function App() {

  //const allNewsData = mockNewsData.response.results; // used for static mock JSON data

  const [allNewsData, setAllNewsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getDataFromAPI()
      .then(data => {
        setAllNewsData(data.response.results);
      })
      .catch(err => console.log('rejected: ', err.message));
  }
  if (allNewsData.length > 0) {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <AllCards allNewsData={allNewsData} />
          </Route>
          <Route path='/summary/:id'>
            <Summary allNewsData={allNewsData} />
          </Route>
        </Switch>
      </Router>
    )
  }

  return (
    <div>
      <NewsLoader />
    </div>
  )
}
export default App;
