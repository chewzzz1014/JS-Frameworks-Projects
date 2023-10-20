import { useGlobalContext } from "../context"
import {GrLike} from 'react-icons/gr'

const Meals = () => {
  const {allMeals} = useGlobalContext() // get context
  console.log(allMeals)

  return (
    <section className="section-center">
      {
        allMeals.map(meal => {
          const {idMeal, strMeal: title, strMealThumb: image} = meal
          return (
            <article  key={idMeal} className="single-meal">
              <img src={image} className="img"/>
              <footer>
                <h5>{title}</h5>
                <button className="like-btn">
                  <GrLike />
                </button>
              </footer>
            </article>
          )
        })
      }
    </section>
  )
}

export default Meals

