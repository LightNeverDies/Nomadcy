import React from 'react'
import { Container, DonutContainer, Text } from './donutStyle'
import { connect } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle <any>`
    html {
        --fill: #2196f3;
        --percentage: ${(props) => props.percentage};
    }
`

const Donut = (props:any) => {
    const text = 'Your Score'
    const max = 700
    const min = props?.values[2]?.['number']
    const percentage = Math.round((min / max) * 100)

    return (
        <Container>
            <Text>{text}</Text>
            <GlobalStyle percentage={percentage}/>
            <DonutContainer>{min}</DonutContainer>
        </Container>
    )
}

const mapStateToProps = (state: any) => {
    return {
        values: state.findDomain.values
    }
}

export default connect(mapStateToProps, null) (Donut)