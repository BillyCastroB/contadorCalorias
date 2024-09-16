import { useState, ChangeEvent } from "react"
import { categories } from "../data/db"
export const Form = () => {

  const [activity, setActivity] = useState({
    category: 1,
    name: '',
    calories: 0
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) =>{
    setActivity({
      ...activity,
      [e.target.id]: e.target.value
    })
  }

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
      <div className=" grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category">Categoria: </label>
        <select
         className="border border-slate-300 p-2 rounded-lg w-full bg-white"
         name="category" 
         id="category"
         value={activity.category}
         onChange={handleChange}>
          {categories.map( category => (
            <option 
              value={category.id}
              key={category.id}
            >{category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
          <label className="font-bold" htmlFor="name">Actividad:</label>
          <input
           type="text"
           id="name"
           value={activity.name}
           onChange={handleChange}
           className="border-slate-300 p-2 rounded-lg"
           placeholder="Ej. comida, ejercicio, pesas, bicicleta" />
      </div>
      <div className="grid grid-cols-1 gap-3">
          <label className="font-bold" htmlFor="calories">Calorias:</label>
          <input
           type="number"
           value={activity.calories}
           id="calories"
           onChange={handleChange}
           className="border-slate-300 p-2 rounded-lg"
           placeholder="Ej. 300 500 " />
      </div>
      <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Guardar comida/ejercicio"  />
    </form>
  )
}
