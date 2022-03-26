import React from 'react'
import style from './button.module.css'

const Button = (props: any) => {
    return(
        <>
            <button key={props.id} onClick={props.onClick} className={props.active ? style.activeButton : style.button}>{props.text}</button>
        </>
    )
}

export default Button