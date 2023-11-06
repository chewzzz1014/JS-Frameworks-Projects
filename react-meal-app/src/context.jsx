import React, {useContext, useEffect, useState} from "react";
import axios from 'axios'

export const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php'

export const AppProvider = ({children}) => {
    const [allMeals, setAllMeals] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        axios
            .get(allMealsUrl, {params: {s: 'a'}})
            .then((response) => {
                if (response.data.meals) {
                    setAllMeals(response.data.meals)
                } else {
                    setAllMeals([])
                }
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <AppContext.Provider value={{allMeals, loading}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}