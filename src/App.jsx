import Navbar from './components/Navbar/Navbar'
import Place from './components/Place/Place'
import placesData from './data/data'
import './App.css'

function App() {
  const places = placesData.map((item) => {
    return (
      <Place
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <main className='container'>
      <Navbar />
      <section className='places-section'>
        {places}
      </section>
    </main>
  )
}

export default App
