import {useState} from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  return (
    <header className="search-container">
      <form>
        <input 
          type="text" 
          className="form-input"
          placeholder="type favourite meal"
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button className="btn btn-hipster" type="button">
          Surprise Me!
        </button>
      </form>
    </header>
  )
}

export default Search
