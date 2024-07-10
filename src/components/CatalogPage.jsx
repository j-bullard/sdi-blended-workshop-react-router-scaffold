import { useProductCatalog } from "@/hooks/useProductCatalog";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import nProgress from "nprogress";
import { Link } from "react-router-dom";
import { Image } from "./Image";

export default function CatalogPage() {
  const { products, loading } = useProductCatalog();

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
      <h2
        css={css`
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: rgb(17 24 39 / 1);
        `}
      >
        Wallets
      </h2>

      <ul
        css={css`
          --num-cols: 1;

          margin-top: 1rem;
          display: grid;
          grid-template-columns: repeat(var(--num-cols), minmax(0, 1fr));
          row-gap: 2.5rem;
          column-gap: 1.5rem;

          @media (min-width: 640px) {
            & {
              --num-cols: 2;
            }
          }

          @media (min-width: 1024px) {
            & {
              --num-cols: 3;
            }
          }

          @media (min-width: 1280px) {
            & {
              --num-cols: 4;
            }
          }
        `}
      >
        {products.map((product) => (
          <li
            key={product.id}
            css={css`
              &:hover {
                opacity: 0.75;
              }
            `}
          >
            <Link to={`/${product.id}`}>
              <div
                css={css`
                  width: 100%;
                  overflow: hidden;
                  border-radius: 0.5rem;
                  background-color: rgb(229 231 235 / 1);
                `}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  css={css`
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                    transition: transform 0.3s ease-in-out;

                    &:hover {
                      transform: scale(1.1);
                    }
                  `}
                />
              </div>
              <h3
                css={css`
                  margin-top: 1rem;
                  font-size: 0.875rem;
                  line-height: 1.25rem;
                  color: rgb(55 65 81 / 1);
                `}
              >
                {product.name}
              </h3>
              <p
                css={css`
                  margin-top: 0.25rem;
                  font-size: 1.125rem;
                  line-height: 1.75rem;
                  font-weight: 500;
                  color: rgb(17 24 39 / 1);
                `}
              >
                ${product.price}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
