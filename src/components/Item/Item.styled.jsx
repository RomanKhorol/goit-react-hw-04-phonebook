import styled from '@emotion/styled';

export const AbonentCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;
export const AbonentText = styled.span`
  font-size: 20px;
`;
export const AbonentDeleteBnt = styled.button`
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #808080;
  :active {
    background-color: #1e90ff;
    transition: color 0, 5s;
  }
`;
