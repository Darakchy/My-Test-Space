import { number } from 'prop-types';
import { FC } from 'react';
import * as S from './styled';

export const SquareData: FC = () => {
  return (
    <S.Container>
      <div className="header">
        <div className="text1">Paper Money</div>
        <div className="title2">Manual</div>
      </div>
      <div className="title">My test space 004</div>
      <div className="data">
        <div className="label">Risc Limit:</div>
        <div className="numer">€2.000,00</div>
        <div className="label">Buying Power:</div>
        <div className="numer">€1.500,00</div>
        <div className="label">Earnings:</div>
        <div className="numer earn-color">-€1007,10</div>
        <div className="label">Backfire:</div>
        <div className="numer backfire-color">-€524,12</div>
      </div>
    </S.Container>
  );
};
