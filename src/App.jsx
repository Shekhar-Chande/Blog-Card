import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  return (
    <>
    <div className='flex flex-wrap justify-center items-center h-screen'> 
      <Card tag='Interior' heading='Top 5 Living Rooms Inspirations' text='Curated vibrant colors for your living, make it pop and calm in the same time'/>
     </div>
    </>
  )
}

export default App
