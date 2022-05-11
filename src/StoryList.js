import Story from './Story'

function StoryList({ id_list }) {
  return (
    <>
      {id_list.map((id, index) => (
        <>
          <div>{index + 1}</div>
          <Story id={id} />
        </>
      ))}
    </>
  );
}

export default StoryList
