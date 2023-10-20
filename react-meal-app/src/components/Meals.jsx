import { useGlobalContext } from "../context"

const Meals = () => {
  const {allMeals, randomMeal} = useGlobalContext() // get context
  console.log(allMeals, randomMeal)

  return (
    <div>
      <h1>all meals</h1>
      {
        allMeals.map(meal => (
          <div key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
          </div>
        ))
      }

      <h1>random meal</h1>
      {
        randomMeal.map(meal => (
          <div key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Meals

