import Story from './Story'

function StoryList({ id_list }) {
  return (
    <>
      {id_list.map((id) => (
        <Story id={id} />
      ))}
    </>
  );
}

export default StoryList
