import { useState, useEffect } from 'react'

function Story({ id }) {
  const apiURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`

  const [story, setStory] = useState(undefined)

  useEffect(() => {
    fetch(apiURL)
    .then(r => r.json())
    .then(rObj => {
      setStory(rObj)
    })
  }, [])

  return (
    <div>
      {story !== undefined ?
        <>
          <h4>{story.title} (<a href={story.url}>url</a>)</h4>
          <div>by {story.by}</div>
          <div>{story.score}</div>
        </>
        :
        <div>Story loading</div>}
    </div>
  )
}

export default Story
