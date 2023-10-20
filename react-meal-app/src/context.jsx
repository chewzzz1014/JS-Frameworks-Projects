import React, {useContext, useEffect, useState} from "react";
import axios from 'axios'

export const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php' 

export const AppProvider = ({children}) => {
    const [allMeals, setAllMeals] = useState([])
    const [randomMeal, setRandomMeal] = useState([])
    
    useEffect(() => {
        axios
            .get(allMealsUrl, {params: {s: 'a'}})
            .then((response) => {
                console.log(response.data.meals)
                setAllMeals(response.data.meals)

                axios
                    .get(randomMealUrl)
                    .then(response1 => {
                        console.log(response1.data.meals)
                        setRandomMeal(response1.data.meals)
                    })
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <AppContext.Provider value={{allMeals, randomMeal}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}