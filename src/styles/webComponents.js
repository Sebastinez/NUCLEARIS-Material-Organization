// webComponents.js
import styled from 'styled-components';
import { NavPhrase } from './navComponents';

export const Explain = styled.div`
  color: #5d5d5d;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 700;
`;

export const NavPhraseFixed = styled(NavPhrase)`
  background: #333;
  position: absolute;
  width: 75%;
  padding: 0 10px 10px calc(((100vw - 1010px) / 2) + 227px);
  & div {
    width: 200px;
  }
  @media (max-width: 1010px) {
    padding-left: calc(25vw - 20px);
  }
  @media (max-width: 880px) {
    padding-left: 200px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 20px;
    font-size: 14px;
    & div {
      width: 100%;
    }
  }
`;

export const WebTop = styled.div`
  background-color: #000;
  width: 100%;
  height: 370px;
  @media (max-width: 768px) {
    height: 320px;
  }
`;

export const WebTopTit = styled.div`
  color: #fff;
  font-size: 26px;
  line-height: 37px;
  letter-spacing: 2px;
  font-weight: 500;
  position: absolute;
  bottom: 15px;
  max-width: 430px;
`;

export const WidthContent = styled.div`
  max-width: 550px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  height: 100%;
  @media (max-width: 767px) {
    max-width: calc(100vw - 40px);
  }
`;

export const ItemTit = styled.div`
  color: #8c6239;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 2px;
  font-weight: 700;
  margin-top: 20px;
`;

export const ItemDesc = styled.div`
  color: #5d5d5d;
  text-transform: uppercase;
  font-size: 11px;
  margin-top: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  text-align: justify;
  font-weight: 500;
  & a {
    font-weight: 700;
    color: #5d5d5d;
    font-size: 10px;
    text-decoration: none;
  }
  & a:hover {
    color: #8c6239;
  }
`;

export const BottomSpace = styled.div`
  height: 150px;
`;
