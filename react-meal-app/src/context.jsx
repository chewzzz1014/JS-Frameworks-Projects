import React, {useContext, useEffect, useState} from "react";
import axios from 'axios'

export const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php'
const randonMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const parseFavFromLocalStorage = () => {
    let fav = localStorage.getItem('favouriteMeals')
    return fav ? JSON.parse(fav) : []
}

const saveFavToLocalStorage =(favs) => {
    localStorage.setItem('favouriteMeals', JSON.stringify(favs))
}

export const AppProvider = ({children}) => {
    const [allMeals, setAllMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favourites, setFavourites] = useState(parseFavFromLocalStorage())

    const fetchMeal = (url) => {
        setLoading(true)
        axios
            .get(url, {params: {s: searchTerm}})
            .then((response) => {
                if (response.data.meals) {
                    setAllMeals(response.data.meals)
                } else {
                    setAllMeals([])
                }
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const fetchRandomMeal = () => {
        fetchMeal(randonMealUrl)
    }

    useEffect(() => {
        fetchMeal(allMealsUrl)
    }, [])

    useEffect(() => {
        if (!searchTerm) return
        fetchMeal(allMealsUrl)
    }, [searchTerm])

    const selectMeal = (id, favouriteMeal) => {
        let meal = allMeals.find(m => m.idMeal === id)
        if (favouriteMeal) {
            meal = favourites.find(m => m.idMeal=== id)
        }
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const addToFav = (id) => {
        const meal = allMeals.find(m => m.idMeal === id)
        const alreadyFav = favourites.find(m => m.idMeal === id)
        if (alreadyFav) return
        setFavourites([...favourites, meal])
        saveFavToLocalStorage(favourites)
    }

    const removeFromFav = (id) => {
        setFavourites(favourites.filter(m => m.idMeal !== id))
        saveFavToLocalStorage(favourites)
    }

    return (
        <AppContext.Provider value={{allMeals, loading, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, favourites, addToFav, removeFromFav}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}