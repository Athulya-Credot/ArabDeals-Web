import React, { useEffect } from "react";
import Reveal from "react-awesome-reveal";

//Import Custom Component
import ProductOne from "../../features/products/product-one";
import ProductFour from "../../features/products/product-four";
import { useQuery, gql, useLazyQuery } from "@apollo/react-hooks";
// Import Settigns
import { fadeInUpShorter } from "../../../utils/data/keyframes";
import ALink from "../../common/ALink";
const GET_PRODUCTS = gql`query GetProducts($input: ProductFilters) {
  getProducts(input: $input) {
    maxRecords
    records {
      _id
      attributes {
        attributeValue
        attributeName
      }
      brandId
      brandName
      categoryId
      categoryIdPath
      categoryNamePath
      description
      images {
        fileURL
        originalName
        fileType
      }
      mrp
      offerPrice
      price
      productCode
      productInfo
      productName
      productShortInfo
      rating
      sellingPrice
      shortDescription
      skuId
      status
      stock
      tags
      vendorId
      isBlocked
    }
  }
}`

function DealSection() {
  // const {data,loading,error}=useQuery(GET_PRODUCTS)
  const [getProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS)
  useEffect(() => {
    getProducts({
      variables: {
        input: {
          discount: 10,
          size: 6
        }
      }
    })
  }, [])

  const products = data?.getProducts?.records
  return (
    <section className="deal-products-section">

      <div className="deal-section-head">
        <h2 className="section-title d-flex align-items-center text-transform-none">
          Deals of the day
        </h2>
        <ALink href="/shop?discount=10"> <p style={{ color: "rgba(0, 0, 0, 1)", fontWeight: "500",marginTop:'15px', }}>View All Products</p></ALink>

      </div>
      <h4 className="recommendmob">Deals of the day</h4>
      <Reveal
        keyframes={fadeInUpShorter}
        delay={100}
        duration={1000}
        triggerOnce
      // style={{ border: "1px solid rgba(185, 185, 185, 1)" }}
      >
        <div className="row">
          <div className="col-lg-4 col-md-5 mb-2 mb-md-0">
            {products
              ? products
                .slice(0, 15)
                // .filter((item) => item.until && item.until !== null)
                .slice(0, 1)
                .map((item, index) => {
                  return (
                    <ProductFour
                      adClass="deal-product"
                      product={item}
                      key={"All Products:" + index}
                    />
                  )
                }
                )
              : [0].map((item, index) => (
                <div
                  className="skel-pro skel-pro-grid"
                  key={"Skeleton:" + index}
                ></div>
              ))}
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="products-with-divide">
              <div className="row row-joined">
                {products
                  ? products
                    // .filter((item) => item.until === null)
                    .slice(0, 6)
                    .map((item, index) => (
                      <div
                        className="col-xl-4 col-sm-4 col-6 m-0 customdeal-border"
                        key={"All Products:" + index}
                      // style={{ border: "1px solid rgba(185, 185, 185, 1)", borderRight:"none" }}
                      >
                        <ProductOne
                          // adClass="inner-quickview inner-icon"
                          product={item}
                        // customStyle="65%"

                        />
                      </div>
                    ))
                  : new Array(6).fill(1).map((item, index) => (
                    <div
                      className="col-xl-3 col-sm-4 col-6"
                      key={"All Products:" + index}
                    >
                      <div
                        className="skel-pro skel-pro-grid"
                        key={"Skeleton:" + index}
                      ></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default React.memo(DealSection);
