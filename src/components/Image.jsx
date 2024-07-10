import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Image = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          Loading...
        </div>
      )}

      <img
        src={props.src}
        alt={props.alt}
        onLoad={() => {
          setLoading(false);
        }}
        className={props.className}
        css={css`
          display: ${loading ? "none" : "block"};
        `}
      />
    </>
  );
};

export { Image };
export default Image;
