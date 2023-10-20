import { useContext } from "react"
import { AppContext } from "../context"

const Meals = () => {
  const context = useContext(AppContext) // get context
  console.log(context)

  return (
    <div>
      meals
    </div>
  )
}

export default Meals

