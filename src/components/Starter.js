const Starter = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <main className='animate-pulse'>
      <div className='bg-gray-300 rounded-lg h-72'></div>
    </main>
  ))
}

export default Starter