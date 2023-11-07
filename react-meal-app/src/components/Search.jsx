import {useState} from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const {setSearchTerm, fetchRandomMeal} = useGlobalContext()
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      setSearchTerm(text)
      // setText('')
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="form-input"
          placeholder="type favourite meal"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button className="btn btn-hipster" type="button" onClick={handleRandomMeal}>
          Surprise Me!
        </button>
      </form>
    </header>
  )
}

export default Search
