import styled from '@emotion/styled';
export const FitrTitle = styled.h2`
  margin: 0;
  margin-left: 20px;
  font-size: 20px;
`;
export const FitrWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const FitrInput = styled.input`
  outline: none;
  border-color: #a9a9a9;
  border-radius: 4px;
  :focus {
    border-color: #4169e1;
    box-shadow: 1px 1px 2px 0 #4169e1;
  }
`;
