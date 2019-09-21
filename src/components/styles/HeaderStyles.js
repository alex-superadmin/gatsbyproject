import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #0095da;
  margin-bottom: 1.45rem;
  height: 100px;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;

  img {
    max-width: 200px;
    margin: 0;
    padding: 12px 0 0 0;
  }

  .menu {
    display: flex;
    align-items: center;
  }
`;
