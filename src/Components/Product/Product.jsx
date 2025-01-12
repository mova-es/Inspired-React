import s from "./Product.module.scss";
import {API_URL} from "../../const.js";
import {NavLink} from "react-router-dom";
import Like from "../../assets/heart.svg?react"
import { ColorList } from "../ColorList/ColorList.jsx";

export const Product = ({ id, pic, title, price, colors }) => {
  return (
    <article className={s.product}>
      <NavLink to={`product/${id}`} className={s.link}>
        <img className={s.image} src={`${API_URL}/${pic}`} />
        <h3 className={s.title}>{title}</h3>
      </NavLink>
      <div className={s.row}>
        <p className={s.price}>руб {price}</p>

        <button className={s.favourite}>
          <Like />
        </button>
      </div>

      <ColorList colors={colors} />
    </article>
  )
}