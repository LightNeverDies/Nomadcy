import React from "react";
import style from './rectbox.module.css'
import { Arrow } from "./rectBoxStyle"
import { default as smile } from '../Header/favicon/smile.png' 
import { connect } from 'react-redux'

class RectBox extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            ids: [0, 1, 2],
            buttonNames: ["GREAT!", "GOOD", "AT RISK!"],
            title: "How are you doing?",
            boldFooter: "significantly more risk"
        }
    }

    smileRender = (name: string) => {
        switch(name) {
            case "GREAT!":
                return (
                    <nav>
                        <img className={style.imageContainer} src={smile}/>
                        <img className={style.imageContainer} src={smile}/>
                    </nav>
                )
            case "GOOD": {
                return (
                <nav>
                    <img className={style.imageContainer} src={smile}/>
                </nav>
                )
            }
            default: 
            <></>
        }
    }

    specificTriangle = (value: string, element: number) => {
        if(value !== undefined) {
            if(value >= "0.79" && value <= "0.85" && element === 0) {
                return (
                    <Arrow/>
                )
            } else if(value >= "0.86" && value <= "0.92" && element === 1) {
                return (
                    <Arrow/>
                )
            } else if(value >= "0.93" && value <= "1.00" && element === 2){
                return (
                    <Arrow/>
                )
            }
        }
    }

    render() {
        const value = (this.props?.values[2]?.['number'] / 700).toFixed(2)

        return(
            <fieldset className={style.field}>
                <legend className={style.textStyle}>{this.state.title}</legend>
                <div className={style.columnContainer}>
                    <div className={style.triangleContainer}>
                        {this.state.ids.map((element: number) => {
                            return (
                                <nav key={element}>
                                    {this.specificTriangle(value, element)}
                                </nav>
                            )
                        })}
                    </div>
    
                    <div className={style.verticalLine}/>
                    <div className={style.columnButtons}>
                            {this.state.buttonNames.map((element:any, i: number) => {
                                return ( 
                                    <button className={style.buttonStyle} key={i}>{element}
                                    {this.smileRender(element)}
                                    </button>
                                )
                            })}
                    </div>
                </div>
                <div className={style.textFooter}>You are at <b>{this.state.boldFooter}</b> than similar businesses in your area!</div>           
            </fieldset>
        )
    }

}

const mapStateToProps = (state: any) => {
    return {
        values: state.findDomain.values
    }
}

export default connect(mapStateToProps, null) (RectBox)