import { useEffect, useState } from 'react'
import StoryList from './StoryList'

function App() {
  const apiURL = "https://hacker-news.firebaseio.com/v0/topstories.json"

  const [idList, setIdList] = useState([])

  useEffect(() => {
    fetch(apiURL)
      .then(r => r.json())
      .then(arr => {
        setIdList(arr.slice(0, 10))
      })
  }, [])

  return (
    <div className="App">
      <header>HN Clone</header>
      <StoryList id_list={idList}/>
    </div>
  );
}

export default App;
