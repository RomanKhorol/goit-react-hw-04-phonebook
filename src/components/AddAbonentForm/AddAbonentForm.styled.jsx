import styled from '@emotion/styled';
export const InputList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-left: 20px;
  margin-top: 0;
  width: 100%;
`;
export const Button = styled.button`
  border: none;
  width: 100px;
  margin-left: 10px;
  margin-bottom: 10px;
  background: #00bfff;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #c0c0c0;
  :active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
export const Label = styled.label`
  font-size: 20px;
  margin-right: 20px;
`;
