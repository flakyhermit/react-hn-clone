import StoryList from './StoryList'

function App() {
  const apiURL = "https://hacker-news.firebaseio.com/v0/topstories.json"
  let id_list = []

  fetch(apiURL)
    .then(r => r.json())
    .then(arr => {
      id_list = arr
    })

  return (
    <div className="App">
      <header>HN Clone</header>
      <StoryList id_list={id_list}/>
    </div>
  );
}

export default App;
