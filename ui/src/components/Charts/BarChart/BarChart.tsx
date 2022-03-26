import React from "react";
import { MainContainer, Container, BarChartContainer, Number, MakeBar, Text } from "./barChartStyle";
import { connect } from 'react-redux'


const BarChart = (props: any) => {
  return (
    <Container>
      <MainContainer>
        {props?.values.map(({ color, number, text }: any, i: any) => {
          return (
            <BarChartContainer key={i}>
              <Number>{number}</Number>
              <MakeBar height={number}  colors={color} />
              <Text size={text}>{text}</Text>
            </BarChartContainer>
          )
        })}
      </MainContainer>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    values: state.findDomain.values
  }
}

export default connect(mapStateToProps, null) (BarChart)
