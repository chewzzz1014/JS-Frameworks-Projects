import React, {useContext, useEffect, useState} from "react";
import axios from 'axios'

export const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php'
const randonMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

export const AppProvider = ({children}) => {
    const [allMeals, setAllMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)

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

    const selectMeal = (id) => {
        let meal = allMeals.find(m => m.idMeal === id)
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <AppContext.Provider value={{allMeals, loading, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}