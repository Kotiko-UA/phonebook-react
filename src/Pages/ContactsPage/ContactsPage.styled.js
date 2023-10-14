import { styled } from 'styled-components';
import catImg from '../../components/img/cute-cat-glasses.jpg';

export const PageWrapper = styled.div`
  height: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${catImg});
  background-position: top -15% right 0;
  background-size: 550px 625px;
  background-repeat: no-repeat;
`;
export const Text = styled.p`
  font-size: 24px;
  color: #7d6026;
  margin-bottom: 12px;
`;
