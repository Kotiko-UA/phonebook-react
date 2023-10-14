import styled from 'styled-components';
import catImg from '../../components/img/cute-cat-glasses.jpg';

export const HomePageWrap = styled.div`
  height: 1280px;
  background-image: url(${catImg});
  background-position: top 0 right 50%;
  background-size: 550px 625px;
  background-repeat: no-repeat;
`;
export const HomeTitle = styled.h1`
  font-size: 48px;
  color: #9f7b33;
  text-align: center;
`;
