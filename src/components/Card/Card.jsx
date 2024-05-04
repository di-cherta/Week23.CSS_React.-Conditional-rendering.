import React from "react";
import Styles from "./Card.module.css";
import Cn from "classnames";
import { useState } from "react";

function Card(props) {
    const [selected, setSelected] = useState(false);
    const handleSelectedState = () => {
        setSelected(!selected)
    }

    const {colorHeader, colorPrice} = props;
    const header = Cn(Styles[colorHeader], Styles.headers);
    const price = Cn(Styles[colorPrice], Styles.prices);
    const colorSpeed = Cn(Styles.speed);
    const colorFooter = Cn(Styles.footer);
    const label = Cn(Styles.label, {[Styles.selected]:selected});
    const sizePrice = Cn(Styles.sizePrice)


    return (
    <div className={label} onClick={handleSelectedState}>
        <header className={header}>
            <h3>Безлимитный {props.value}</h3>
        </header>
        <section>
            <p className={price}>руб <span className={sizePrice}>{props.value}</span> /мес</p>
        </section>
        <section>
        <p className={colorSpeed}>до {props.speed} Мбит/сек</p>
        </section>
        <footer className={colorFooter}>
            <p>Объем включенного <br />трафика не ограничен</p>
        </footer>
    </div>
    );
}

export default Card;