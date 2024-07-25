import styled from "styled-components";

const StyledComponents = () => {
  return (
    <>
      <SC_container>
        <SC_title>Styled Components</SC_title>
        <SC_button>Fight</SC_button>
      </SC_container>
    </>
  );
};

const SC_container = styled.div`
  border: solid 1px #444;
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SC_title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SC_button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;

export default StyledComponents;
