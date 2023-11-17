import { useGlobalContext } from "../context"

const Favorites = () => {
  const {favourites, selectMeal, removeFromFav} = useGlobalContext()

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favourites</h5>
        <div className="favorites-container">
          {
            favourites.map(m => {
              const {idMeal, strMealThumb: image} = m

              return (
                <div className="favorite-item" key={idMeal}>
                  <img src={image} className="favorites-img img" onClick={() => selectMeal(idMeal, favourites)} />
                  <button className="remove-btn" onClick={() => removeFromFav(idMeal)}>
                    remove
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Favorites

