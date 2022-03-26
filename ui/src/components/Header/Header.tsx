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
            activeButton: 0,
            burgerUsed: 0
        }
    }

    componentWillUnmount = () => {
        this.setState({ burgerUsed: 0 })
    }

    menuButtons = () => {
        return (
            <div className={style.menuButtonContainer}>
                {this.state.buttonText.map((element: any, index: number) => {
                    return (
                        <div key={index}>
                            <Button
                            onClick={() => this.setState({ activeButton: index})} 
                            id={index} 
                            active={this.state.activeButton === index ? true : false} 
                            text={element}
                            />
                        </div> 
                    )
                })}
            </div>
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
                    <nav className={style.logo}>
                        <Apple/>
                    </nav>

                )
            case 'google':
                return (
                    <nav className={style.logo}>
                        <Google/>
                    </nav>
                )
            default:
                return (
                    <nav className={style.logo}>
                        <Apple/>
                    </nav>
                )
        }
    }

    openMenu = () => {
        if(this.state.burgerUsed === 1) {
            this.setState({ burgerUsed: 0 })
        } else {
            this.setState({ burgerUsed: 1 })
        }
    }

    renderMenu = () => {
        if(this.state.burgerUsed === 1) {
            return (
                <div className={style.menuButtons}>
                    {this.menuButtons()}
                    <nav>
                        {this.profileButton()}
                    </nav>
                </div>
            )
        } else if( this.state.burgerUsed === 0) {
            return (
                <>
                   <nav className={style.offMenuButtons}>
                    {this.menuButtons()}
                   </nav>
                    <div className={style.offProfile}>
                    {this.profileButton()}
                    </div>
                </>
            )
        }
    }

    render() {
        return (
            <>
                <div className={style.line}/>
                <div className={style.mainContent}>
                    <div className={style.logoContainer}>
                        <nav className={this.props.status == true ? style.onActive : style.notActive}/> 
                        {this.logoRender(this.props.type)}
                    </div>
                    {this.renderMenu()}
                    <div className={style.hamburger} onClick={() => this.openMenu()}>
                        <div className={style.burger}/>
                        <div className={style.burger}/>
                        <div className={style.burger}/>
                    </div>

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