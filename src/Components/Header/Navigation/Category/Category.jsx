import s from "./Category.module.scss";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Category = () => {
  const { activeGender, categories } = useSelector(state => state.navigation);

  return (
    <ul className={s.category}>
      {categories[activeGender]?.list?.map((item) => (
        <li key={item.slug}>
          <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive) } to={`/catalog/${activeGender}/${item.slug}`}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  )
};