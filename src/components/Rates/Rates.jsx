import React from "react";
import Card from "../Card/Card";
import Styles from "./Rates.module.css"
import Cn from "classnames";

function Rates (){
    const ratesWrapper = Cn(Styles.wrapper)
    const date = [
        {
            value: '300',
            speed: '10',
            colorHeader: 'blue-header',
            colorPrice: 'blue-price',
        },
        {
            value: '450',
            speed: '50',
            colorHeader: 'green-header',
            colorPrice: 'green-price',
        },
        {
            value: '550',
            speed: '100',
            colorHeader: 'red-header',
            colorPrice: 'red-price',
            success: 'success'
        },
        {
            value: '1000',
            speed: '200',
            colorHeader: 'black-header',
            colorPrice: 'black-price',
        },
    ]
    return(
        <div className={ratesWrapper}>
            {date.map((item) =>{
                return <Card value={item.value} speed={item.speed} colorHeader={item.colorHeader} colorPrice={item.colorPrice} success={item.success}/>
            })}
        </div>
    );
}

export default Rates;