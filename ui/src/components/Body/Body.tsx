import React from 'react'
import style from './body.module.css'
import BodyTitle from '../BodyTitle/BodyTitle'
import BarCharts from '../Charts/BarChart/BarChart'
import Donut from '../Charts/Donut/Donut'
import RectBox from '../RectBox/RectBox'
import InfoSection from '../InfoSection/InfoSection'
import { connect } from 'react-redux'
import { findDomain } from '../../reduxStore/findDomain/actions/findDomain'

class Body extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            bodyTitle: ['Overall Cybersecurity Vulnerability: How do you compare?', 
            'Your Cybersecurity Vulnerability Score'],
            min: 555,
            max: 700
        }
    }

    componentDidMount = async() => {
        await this.findDomainInfo()
    }

    findDomainInfo = async() => {
        const currState = this.state
        await this.props.findDomain(this.props.type, currState.min, currState.max)
    }


    render() {
        return (
            <div style={{ display: 'flex'}}>
                <div className={style.sides}/>
                <div className={style.bodyLeftStyle}>
                    <BodyTitle text={this.state.bodyTitle[0]}/>
                    <BarCharts/>
                    <BodyTitle text={this.state.bodyTitle[1]}/>
                    <Donut/>
                </div>
                <div className={style.bodyRigthStyle}>
                    <RectBox/>
                    <InfoSection/>
                </div>
                <div className={style.sides}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        values: state.findDomain.values,
        text: state.findDomain.text
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    findDomain: (type: string, min: number, max: number) => dispatch(findDomain(type, min, max))
})

export default connect(mapStateToProps, mapDispatchToProps) (Body)