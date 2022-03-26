import React from 'react'
import style from './header.module.css'
import Button  from '../Button/Button'
import { default as Apple } from './favicon/Apple.svg'
import { default as Google } from './favicon/Google.svg'
import { connect } from 'react-redux'

class Header extends React.Component <any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            buttonText: ['Overview', 'Score Details', 'Recommendations', 'Resources'],
            accountSettings: 'Profile & Settings',
            activeButton: 0
        }
    }

    menuButtons = () => {
        return (
            <>
                {this.state.buttonText.map((element: any, index: number) => {
                    return (
                        <nav key={index}>
                            <Button
                            onClick={() => this.setState({ activeButton: index})} 
                            id={index} 
                            active={this.state.activeButton === index ? true : false} 
                            text={element}
                            />
                        </nav> 
                    )
                })}
            </>

        )
    }

    profileButton = () => {
        return(
            <nav>
                <Button
                text={this.state.accountSettings}
                id={5}
                />
            </nav>
        )
    }

    logoRender = (type: string) => {
        switch(type) {
            case 'apple':
                return (
                    <Apple/>
                )
            case 'google':
                return (
                    <Google/>
                )
            default:
                return (
                <Apple/>
                )
        }
    }

    render() {
        return (
            <>
                <div className={style.line}/>
                <div className={style.mainContent}>
                    <nav className={this.props.status == true ? style.onActive : style.notActive}/>
                    <nav className={style.logo}>
                        {this.logoRender(this.props.type)}
                    </nav>
                    <nav className={style.menuButtons}>
                        {this.menuButtons()}
                    </nav>
                    <nav className={style.profile}>
                        {this.profileButton()}
                    </nav>
                </div>
                <div className={style.line}/>
            </>
            
        )
    }
}


const mapStateToProps = (state: any) => {
    return {
        status: state.appChecker.status,
        error: state.appChecker.error
    }
}

const mapDispatchToProps = (dispatch: any) => ({

})
export default connect(mapStateToProps, mapDispatchToProps) (Header)