import styled, { css } from "styled-components";

export const Container: any = styled.div`
  width: 50%;
  height: 390px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainContainer: any = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BarChartContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%
`;

export const Chart: any = css`
  margin: 2px;
  width: 110px;
  border-radius: 105px
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Number: any = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: black;
`;



export const MakeBar: any = styled.div<any>`
  border-radius: 15px 15px 0px 0px;
  height: ${(props) => props.height / 2}px;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors},
    ${(props) => props.colors}
  );
  ${Chart};
`;

export const Text: any = styled.span<any>`
    width: ${(props) => props.size === 'NC IDEA' ? '100px' : 'min-content' };
    margin: ${(props) => props.size === 'NC IDEA' ? '9px': '0px'};
    font-weight: ${(props) => props.size === 'NC IDEA' ? 'bold' : 'none'};
`;