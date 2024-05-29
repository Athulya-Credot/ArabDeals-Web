import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/react-hooks";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Component
import ALink from "../ALink";

// Import Apollo Server and Query
import { GET_PRODUCTS } from "../../../server/queries";
import withApollo from "../../../server/apollo.js";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { set } from "react-hook-form";

const GET_PRODUCTS_AUTOCOMPLETE = gql`
  query GetProductsAutoComplete($input: GetProductsAutoCompleteInput!) {
    getProductsAutoComplete(input: $input) {
      suggestions {
        suggestion
        image
        categoryId
        categoryIdPath
      }
    }
  }
`;

function SearchForm(props) {
  const router = useRouter();
  const [cat, setCat] = useState("");
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);

  const [getProductsAutoComplete, { data }] = useLazyQuery(
    GET_PRODUCTS_AUTOCOMPLETE
  );

  useEffect(() => {
    document.querySelector("body").addEventListener("click", onBodyClick);
    return () => {
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);

  useEffect(() => {
    setSearch("");
    setCat("");
  }, [router.query.slug]);

  useEffect(() => {
    document.querySelector(".header-search.show-results") &&
      document
        .querySelector(".header-search.show-results")
        .classList.remove("show-results");
  }, [router.pathname]);

  function removeXSSAttacks(html) {
    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    // Removing the <script> tags
    while (SCRIPT_REGEX.test(html)) {
      html = html.replace(SCRIPT_REGEX, "");
    }

    // Removing all events from tags...
    html = html.replace(/ on\w+="[^"]*"/g, "");

    return {
      __html: html,
    };
  }

  function matchEmphasize(name) {
    let regExp = new RegExp(search, "i");
    return name.replace(regExp, (match) => "<strong>" + match + "</strong>");
  }

  function onSearchClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.parentNode.classList.toggle("show");
  }

  function onBodyClick(e) {
    if (e.target.closest(".header-search"))
      return (
        e.target.closest(".header-search").classList.contains("show-results") ||
        e.target.closest(".header-search").classList.add("show-results")
      );

    document.querySelector(".header-search.show") &&
      document.querySelector(".header-search.show").classList.remove("show");
    document.querySelector(".header-search.show-results") &&
      document
        .querySelector(".header-search.show-results")
        .classList.remove("show-results");
  }

  function onCatSelect(e) {
    setCat(e.target.value);
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: "/shop",
      query: {
        search: search,
        cat_id: cat,
      },
    });
  }

  const onSearchChange = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    if (searchText.length > 2) {
      getProductsAutoComplete({
        variables: {
          input: {
            query: searchText,
          },
        },
      });
    } else {
      setOptions([]);
    }
  };

  useEffect(() => {
    if (
      data &&
      data.getProductsAutoComplete &&
      data.getProductsAutoComplete.suggestions
    ) {
      setOptions(data.getProductsAutoComplete.suggestions);
      if (data.getProductsAutoComplete.suggestions.length > 0) {
        setCat(
          data.getProductsAutoComplete.suggestions[0].categoryIdPath.split("#")[
            data.getProductsAutoComplete.suggestions[0].categoryIdPath.split(
              "#"
            ).length - 1
          ]
        );
      }
    }
  }, [data]);

  return (
    <>
      <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mb-0  ">
        <a
          href="#"
          className="search-toggle"
          role="button"
          onClick={onSearchClick}
        >
          <i className="icon-search-3 d-none"></i>
        </a>

        <form action="#" method="get" onSubmit={(e) => onSubmitSearchForm(e)}>
          <div className="header-search-wrapper" style={{display:"flex",
            
          justifyContent:"center",
          maxWidth:"400px"
          }}>
            
            <input
              type="search"
              className="form-control"
              name="q"
              id={props.type === 1 ? "q" : "qqq"}
              placeholder="What are you looking for?"
              value={search}
              required
              onChange={(e) => onSearchChange(e)}
            />

            {/* <div className="select-custom">
                <select
                  id={`${props.type === 1 ? "cat1" : "cat"}`}
                  name="cat"
                  value={cat}
                  onChange={(e) => onCatSelect(e)}
                >
                  <option value="">All Categories</option>
                  <option value="fashion">Fashion</option>
                  <option value="women">- Women</option>
                  <option value="men">- Men</option>
                  <option value="jewellery">- Jewellery</option>
                  <option value="kids-fashion">- Kids Fashion</option>
                  <option value="electronics">Electronics</option>
                  <option value="smart-tvs">- Smart TVs</option>
                  <option value="cameras">- Cameras</option>
                  <option value="games">- Games</option>
                  <option value="home-garden">Home &amp; Garden</option>
                  <option value="motors">Motors</option>
                  <option value="cars-and-trucks">- Cars and Trucks</option>
                  <option value="motorcycles-powersports">
                    - Motorcycles &amp; Powersports
                  </option>
                  <option value="parts-accessories">
                    - Parts &amp; Accessories
                  </option>
                  <option value="boats">- Boats</option>
                  <option value="auto-tools-supplies">
                    - Auto Tools &amp; Supplies
                  </option>
                </select>
              </div> */}

            <button className="btn" title="search" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.18551 14C11.5138 14 14.2118 11.1645 14.2118 7.66668C14.2118 4.16887 11.5138 1.33334 8.18551 1.33334C4.85726 1.33334 2.15918 4.16887 2.15918 7.66668C2.15918 11.1645 4.85726 14 8.18551 14Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8463 14.6667L13.5776 13.3333"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div className="live-search-list bg-white">
              {options.length > 0 &&
                search.length > 2 &&
                options.map((product, index) => (
                  <div
                    // href={`/shop?page=0&category=${product.categoryId}`}
                    className="autocomplete-suggestion"
                    key={`search-result-${index}`}
                    style={{ borderBottom: "0px", cursor: "pointer" }}
                    // use onCLick instead of href and setSearch null
                    onClick={() => {
                      setSearch("");
                      setOptions([]);
                      router.push({
                        pathname: "/shop",
                        query: {
                          search: product.suggestion,
                          cat_id: product.categoryId,
                        },
                      });
                    }}
                  >
                    <LazyLoadImage
                      src={
                        product.image ? product.image : "images/icon/search.svg"
                      }
                      width={40}
                      height={40}
                      alt=""
                    />
                    <div
                      className="search-name"
                      dangerouslySetInnerHTML={removeXSSAttacks(
                        matchEmphasize(product.suggestion)
                      )}
                    ></div>
                  </div>
                ))}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(SearchForm);
