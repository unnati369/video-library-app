import { NavLink } from "react-router-dom"
import { categories } from "../components/CategoriesData"
export const Home = () =>{
    return(
        <div>
            <h2>Categories</h2>
            <div>
{
    categories?.map(category=><ul>
        <NavLink to={category.src}><img src={category.thumbnail} height="300px" alt={category.category}/></NavLink>
        <NavLink to={`/${category.category}`}><h3>{category.category}</h3></NavLink>
    </ul>)
}
            </div>
        </div>
    )
}