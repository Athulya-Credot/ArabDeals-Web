import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/router";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql, useQuery } from "@apollo/client";
import ALink from "../../components/common/ALink";
import ShopBanner from "../../components/partials/shop/shop-banner";
import ShopSidebarOne from "../../components/partials/shop/sidebar/shop-sidebar-one";
import Pagination from "../../components/features/pagination";
import ProductsGrid from "../../components/partials/products-collection/product-grid";
import { IoMdHome } from "react-icons/io";
// import { GET_PRODUCTS } from "../../server/queries";
import withApollo from "../../server/apollo";
// import { useRouter } from 'next/router'

const GET_PRODUCTS = gql`
  query GetProducts($input: ProductFilters) {
    getProducts(input: $input) {
      maxRecords
      records {
        _id
        vendorId
        brandId
        brandName
        productName
        shortDescription
        skuId
        description
        productInfo
        productShortInfo
        images {
          fileType
          fileURL
          mimeType
          originalName
        }
        rating
        sellingPrice
        price
        mrp
        tags
        productCode
        categoryId
        categoryNamePath
        categoryIdPath
        isBlocked
        stock
        status
        offerPrice
        attributes {
          attributeId
          attributeName
          attributeValueId
          attributeValue
          attributeDescription
        }
        productDetailImages {
          fileType
          fileURL
          mimeType
          originalName
        }
        warehouseSkuId
      }
    }
  }
`;

function Shop() {
  const router = useRouter();

  const query = router.query;

  const { cat_id, page, ...rest } = query;
  const {
    category,
    brands,
    max_price,
    min_price,
    sort_order,
    discount,
    bestSeller,
    search,
    ...filteredAttributes
  } = rest;
  const categoryValues = category ? category.split(",").map((id) => id.trim()) : [];
  const brandValues = brands ? brands.split(",") : [];
  const attributes = Object.entries(filteredAttributes).map(([id, values]) => ({
    id,
    values: values.split(","),
  }));
  const [getProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS, {
    fetchPolicy: "network-only",
  });

  const [perPage, setPerPage] = useState(12);

  const [sortBy, setSortBy] = useState(query.sortBy ? query.sortBy : "default");

  const products = data && data?.getProducts?.records;
  const totalPage = data
    ? parseInt(data?.getProducts?.maxRecords / perPage) +
      (data?.getProducts?.maxRecords % perPage ? 1 : 0)
    : 0;

  const attributesWithNonEmptyValues = attributes.filter((attribute) =>
    attribute.values.some((value) => value !== "")
  );

  useEffect(() => {
    getProducts({
      variables: {
        input: {
          query: search,
          size: perPage,
          page: parseInt(page ?? 0),
          categories: categoryValues ? categoryValues : [],
          brands: brandValues,
          maxPrice: parseInt(query.max_price),
          minPrice: parseInt(query.min_price),
          attributes: attributesWithNonEmptyValues,
          parentCategory: query?.cat_id,
          discount: parseInt(discount),
          bestSeller: bestSeller === "true" ? true : false,
          priceHighToLow: sort_order && sort_order === "highToLow" ? true : false,
          priceLowToHigh: sort_order && sort_order === "lowToHigh" ? true : false,
        },
      },
    });
  }, [query, perPage]);

  function sidebarToggle(e) {
    let body = document.querySelector("body");
    e.preventDefault();
    if (body.classList.contains("sidebar-opened")) {
      body.classList.remove("sidebar-opened");
    } else {
      body.classList.add("sidebar-opened");
    }
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">
                <IoMdHome style={{ fontSize: "16px" }} />
                {/* <i className="icon-home"></i> */}
              </ALink>
            </li>
            {query.category ? (
              <>
                <li className="breadcrumb-item">
                  <ALink href={{ pathname: router.pathname, query: {} }} scroll={false}>
                    shop
                  </ALink>
                </li>
              </>
            ) : query.tag ? (
              <>
                <li className="breadcrumb-item">
                  <ALink href={{ pathname: router.pathname, query: {} }} scroll={false}>
                    shop
                  </ALink>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                >{`Product Tag - ${query.tag}`}</li>
              </>
            ) : (
              <li className="breadcrumb-item active" aria-current="page">
                <ALink className="activeitem" href="/shop">
                  Shop
                </ALink>
              </li>
            )}
          </ol>
        </div>
      </nav>

      <div className="container ">
        <div
          style={{
            width: "228px",
            height: "26px",
            marginTop: "60px",
            marginBottom: "33px",
          }}
        >
          <p
            style={{
              fontWeight: "400px",
              fontSize: "13px",
              lineHeight: "26px",
            }}
          >
            {data?.getProducts?.maxRecords} Search Results Found
          </p>
        </div>

        <div className="row" style={{ border: "1px solid #B9B9B9" }}>
          <div
            className="col-lg-9 main-content"
            style={{ padding: 0, borderLeft: "1px solid #B9B9B9" }}
          >
            <nav className="toolbox sticky-header mobile-sticky" style={{ margin: "0" }}>
              <div className="toolbox-left">
                <a href="#" className="sidebar-toggle" onClick={(e) => sidebarToggle(e)}>
                  <svg
                    data-name="Layer 3"
                    id="Layer_3"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="15" x2="26" y1="9" y2="9" className="cls-1"></line>
                    <line x1="6" x2="9" y1="9" y2="9" className="cls-1"></line>
                    <line x1="23" x2="26" y1="16" y2="16" className="cls-1"></line>
                    <line x1="6" x2="17" y1="16" y2="16" className="cls-1"></line>
                    <line x1="17" x2="26" y1="23" y2="23" className="cls-1"></line>
                    <line x1="6" x2="11" y1="23" y2="23" className="cls-1"></line>
                    <path
                      d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                      className="cls-2"
                    ></path>
                    <path
                      d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                      className="cls-2"
                    ></path>
                    <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" className="cls-3"></path>
                    <path
                      d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                      className="cls-2"
                    ></path>
                  </svg>
                  <span>Filter</span>
                </a>
              </div>
            </nav>

            <div>
              <ProductsGrid products={products} loading={loading} perPage={perPage} />
            </div>
          </div>

          <ShopSidebarOne category={category} />
        </div>
      </div>

      {loading || (products && products.length) ? (
        <div className="container">
          <nav className="toolbox toolbox-pagination border-0">
            <Pagination totalPage={totalPage} />
          </nav>
        </div>
      ) : (
        ""
      )}

      {/* <div className=" container" style={{ paddingTop: "37px" }}>
        <div>
          <img
            src="images\brands\banner Image Lising.svg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div> */}

      <div className="mb-xl-4 mb-0"></div>
    </main>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(Shop);
