import { useParams } from "react-router";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { VisuallyHidden } from "@/components/VisuallyHidden";
import { useProduct } from "../hooks/useFetchProduct";
import nProgress from "nprogress";

const Colors = {
  black: "#030712",
  tan: "#ac9a7e",
  teal: "#0891b2",
  mahogany: "#450a0a",
  brown: "#44403c",
};

export default function ProductPage() {
  const { id } = useParams();
  const { product, loading } = useProduct(id);

  const [selectedImage, setSelectedImage] = useState("image");

  if (loading) return <></>;

  nProgress.done();

  return (
    <div
      css={css`
        margin-inline: auto;
        max-width: 42rem;
        width: 100%;
        padding: 4rem 1rem;

        @media (min-width: 640px) {
          & {
            padding: 6rem 1.5rem;
          }
        }

        @media (min-width: 1280px) {
          & {
            max-width: 80rem;
            padding-inline: 2rem;
          }
        }
      `}
    >
      <div
        css={css`
          @media (min-width: 1280px) {
            & {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              align-items: flex-start;
              column-gap: 2rem;
            }
          }
        `}
      >
        {/* Image gallery */}
        <div
          css={css`
            display: flex;
            flex-direction: column-reverse;
          `}
        >
          {/* Image selector */}
          <div
            css={css`
              margin-inline: auto;
              margin-top: 1.5rem;
              width: 100%;
              max-width: 42rem;

              @media (min-width: 1280px) {
                max-width: unset;
              }
            `}
          >
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 1.5rem;
              `}
            >
              <button
                onClick={() => setSelectedImage("image")}
                css={css`
                  position: relative;
                  background-color: #fff;
                  font-size: 0.875rem;
                  line-height: 1.25rem;
                  display: flex;
                  height: 6rem;
                  cursor: pointer;
                  align-items: center;
                  justify-content: center;
                  border-radius: 0.375rem;
                  font-weight: 500;
                  text-transform: uppercase;
                  color: rgb(17 24 39 / 1);
                `}
              >
                <span
                  css={css`
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    border-radius: 0.375rem;
                  `}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} front view`}
                    css={css`
                      height: 100%;
                      width: 100%;
                      object-fit: cover;
                      object-position: bottom;
                    `}
                  />
                </span>
              </button>

              <button
                onClick={() => setSelectedImage("back")}
                css={css`
                  position: relative;
                  background-color: #fff;
                  font-size: 0.875rem;
                  line-height: 1.25rem;
                  display: flex;
                  height: 6rem;
                  cursor: pointer;
                  align-items: center;
                  justify-content: center;
                  border-radius: 0.375rem;
                  font-weight: 500;
                  text-transform: uppercase;
                  color: rgb(17 24 39 / 1);
                `}
              >
                <span
                  css={css`
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    border-radius: 0.375rem;
                  `}
                >
                  <img
                    src={product.back}
                    alt={`${product.name} back view`}
                    css={css`
                      height: 100%;
                      width: 100%;
                      object-fit: cover;
                      object-position: center;
                    `}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Selected image */}
          <div
            css={css`
              width: 100%;
            `}
          >
            <img
              src={product[selectedImage]}
              alt={product.name}
              css={css`
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;

                @media (min-width: 640px) {
                  border-radius: 0.5rem;
                }
              `}
            />
          </div>
        </div>

        {/* Product Info */}
        <div
          css={css`
            margin-top: 2.5rem;
            padding-inline: 1rem;

            @media (min-width: 640px) {
              & {
                margin-top: 4rem;
                padding-inline: 0px;
              }
            }

            @media (min-width: 1280px) {
              & {
                margin-top: 0px;
              }
            }
          `}
        >
          <h1
            css={css`
              font-size: 1.875rem;
              line-height: 2.25rem;
              font-weight: 700;
              letter-spacing: -0.025em;
              color: rgb(17 24 39 / 1);
            `}
          >
            {product.name}
          </h1>

          <div
            css={css`
              margin-top: 0.75rem;
            `}
          >
            <VisuallyHidden as="h2">Product Information</VisuallyHidden>
            <p
              css={css`
                font-size: 1.875rem;
                line-height: 2.25rem;
                letter-spacing: -0.025em;
                color: rgb(17 24 39 / 1);
              `}
            >
              ${product.price}
            </p>
          </div>

          <div
            css={css`
              margin-top: 1.5rem;
            `}
          >
            <VisuallyHidden as="h3">Description</VisuallyHidden>
            <div
              css={css`
                font-size: 1rem;
                line-height: 1.5rem;
                color: rgb(55 65 81 / 1);
              `}
            >
              <p>{product.info.join(". ")}</p>
            </div>
          </div>

          <form
            css={css`
              margin-top: 1.5rem;
            `}
            onSubmit={(e) => {
              e.preventDefault();

              // TODO: Implment add to cart feature
              alert("The `Add to cart` feature has not been implemented yet.");
            }}
          >
            <h3
              css={css`
                font-size: 0.875rem;
                line-height: 1.25rem;
                font-weight: 500;
                color: rgb(75 85 99 / 1);
              `}
            >
              Color
            </h3>
            <fieldset
              aria-label="Wallet color"
              css={css`
                margin-top: 0.5rem;
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <label
                  aria-label={product.color}
                  css={css`
                    position: relative;
                    margin: -0.125rem;
                    display: flex;
                    cursor: pointer;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9999px;
                    padding: -0.125rem;

                    &:focus {
                      outline: 2px solid transparent;
                      outline-offset: 2px;
                    }
                  `}
                >
                  <VisuallyHidden
                    as="input"
                    type="radio"
                    name="color-choice"
                    value={product.color}
                  />
                  <span
                    aria-hidden={true}
                    css={css`
                      width: 2rem;
                      height: 2rem;
                      border-radius: 9999px;
                      border: 1px solid rgb(0 0 0 / 0.1);
                      background-color: ${Colors[product.color.toLowerCase()]};
                    `}
                  ></span>
                </label>
              </div>
            </fieldset>

            <div
              css={css`
                margin-top: 2.5rem;
              `}
            >
              <button
                type="submit"
                css={css`
                  display: flex;
                  flex: 1 1 0%;
                  align-items: center;
                  justify-content: center;
                  border-radius: 0.375rem;
                  max-width: 20rem;
                  border: 1px solid transparent;
                  background-color: #4f46e5;
                  color: white;
                  padding: 0.75rem 2rem;
                  font-weight: 500;

                  @media (min-width: 640px) {
                    & {
                      width: 100%;
                    }
                  }
                `}
              >
                Add to cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
