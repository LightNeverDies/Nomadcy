import React from 'react'
import style from './bodyTitle.module.css'

const BodyTitle = (props: any) => {
    return (
        <div className={style.bodyTitle}>
            <div className={style.divLine}/>
            <div className={style.text}>{props.text}</div>
        </div>
    )
}

export default BodyTitle