/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

  return (
    <>
      <div css={containerStyle}>
        <p className="">Styled JSX</p>
        <button className="">Fight</button>
      </div>
    </>
  );
};

export default Emotion;
