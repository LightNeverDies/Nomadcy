import styled, { css } from "styled-components";

export const DonutContainer: any = styled.div<any>`
  margin-top: 30px;
  width: 300px;
  height: 150px;
  position: relative;
  color: rgba(51,51,51,255);
  font-size: 22px;
  font-weight: 600;
  color: '#2196f3';
  display: flex;
  overflow: hidden;
  align-items: flex-end;
  justify-content: center;
  box-sizing : border-box;
  &:after{
    content: '';
    width: 300px;
    height: 300px;
    border:50px solid;
    border-color : rgba(33,150,243,0.05) rgba(205,231,252,0.05) var(--fill) var(--fill);
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    box-sizing : border-box;
    transform: rotate( calc( 1deg * ( -60 + var(--percentage) * 1.8)));
    animation : fillAnimation 4s ease-in;
  }
`;

export const Text: any = styled.div<any>`
    font-size: 35px;
`;

export const Container: any = styled.div<any>`
  text-align: center;
  margin-top: 20px;
`