import useFetch from './Hooks/useFetch';
import ProductCard from './components/ProductCard'; // El que vas a crear
import SkeletonCard from './components/SkeletonCard';
import { useState } from 'react';

function App() {
  const { data, loading, errorMessage } = useFetch('https://jsonplaceholder.typicode.com/users');

  const [inputText, setInputText] = useState('')
  console.log(inputText)

  const filterData = data?.filter((item)=> item.name.toLowerCase().includes(inputText.toLowerCase()) || item.email.toLowerCase().includes(inputText.toLowerCase())) || []
  console.log(filterData)

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto flex flex-col">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Nuestros Usuarios
        </h1>

        <input type="text" className='border-2 border-gray-400 mb-8 py-2 px-4 rounded shadow text-black' placeholder='Search users' onChange={(e)=> setInputText(e.target.value)}/>

        {loading && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1,2,3,4,5,6].map(i=> (
              <SkeletonCard key={i}/>
            ))}
          </div>
        )}

        {errorMessage && (
          <h2 className='text-red-700'>There is an error: {errorMessage}</h2>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filterData && filterData.map(user =>(
            <ProductCard user={user} key={user.id}/>
          ))}
        </div>
      
      </div>
    </main>
  );
}
export default App