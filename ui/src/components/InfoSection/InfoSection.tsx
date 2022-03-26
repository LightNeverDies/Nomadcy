import React from "react"
import { connect } from 'react-redux'
import { Title, InfoSectionContainer, TextSection, ButtonSection } from "./infoSectionStyle"

const InfoSection = (props: any) => {
    const title = "What This Means To Your Business"
    const buttonTitle = "Tell Me More About My Score"

    return (
        <InfoSectionContainer>
            <Title>{title}</Title>
            <TextSection>{props.text.text}</TextSection>
            <ButtonSection>{buttonTitle}</ButtonSection>
        </InfoSectionContainer>

    )
}

const mapStateToProps = (state: any) => {
    return {
        text: state.findDomain.text
    }
}

export default connect(mapStateToProps, null) (InfoSection)