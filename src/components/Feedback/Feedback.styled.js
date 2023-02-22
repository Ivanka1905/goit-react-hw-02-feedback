import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonG = styled.button`
  background-color: #66cd00;
  transition: all 500ms ease;
  :hover {
	cursor: pointer;
  transform: scale(1.15);
}
`;

export const ButtonN = styled.button`
  background-color: #e9d66b;
  transition: all 500ms ease;
  :hover {
	cursor: pointer;
  transform: scale(1.15);
`;

export const ButtonB = styled.button`
  background-color: #ff7256;
  transition: all 500ms ease;
  :hover {
	cursor: pointer;
  transform: scale(1.15);
`;
