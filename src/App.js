import React, { useState } from "react";
import Repos from "./Repos"
import axios from "axios"

function App() {
  const [repositories, setRepositories] = useState([])
  
  axios.get("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc")
  .then(res => {
    setRepositories(res.data.items.map(items => items.name))
  })
  
  return (
   <Repos repositories={repositories} />
  );
}

export default App;
