/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Emotion = () => {
  const containerStyle = css`
    border: solid 1px #444;
    border-radius: 4px;
    width: 100%;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css`
    margin: 0;
    color: #3d84a8;
  `;

  const buttonStyle = css`
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

  return (
    <>
      <div css={containerStyle}>
        <p css={titleStyle}>Emotion</p>
        <button css={buttonStyle}>Fight</button>
        <SC_button>Fight</SC_button>
      </div>
    </>
  );
};

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

export default Emotion;
