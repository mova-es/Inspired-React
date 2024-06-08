import s from "./Category.module.scss";
import {NavLink} from "react-router-dom";
import cn from "classnames";

export const Category = ({list}) => (
  <ul className={s.category}>
    {list.map((item, index) => (
      <li key={index}>
        <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive) } to={item.link}>{item.title}</NavLink>
      </li>
    ))}
  </ul>
);