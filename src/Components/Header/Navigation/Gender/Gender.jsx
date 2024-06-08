import s from './Gender.module.scss'
import {NavLink} from "react-router-dom";
import cn from "classnames";

export const Gender = ({list}) => (
  <ul className={s.gender}>
    {list.map((item, index) => (
        <li key={index} className={s.item}>
            <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive) } to={item.link}>{item.title}</NavLink>
        </li>
    ))}
  </ul>
);