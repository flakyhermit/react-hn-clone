import useState from 'react'

function Story({ id }) {
  const apiURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`

  const [story, setStory] = useState(undefined)

  fetch(apiURL)
    .then(r => r.jon())
    .then(rObj => {
      alert(rObj)
      setStory(rObj)
    })

  return (
    <>
      <h3>{story.title}</h3>
      <p>{story.by}</p>
      <p>{story.score}</p>
      <a href={story.url}/>
    </>
  )
}

export default Story
