import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
// import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from "../../../server/apollo";
// import { GET_PRODUCT } from '../../../server/queries';

// Import Custom Component
import ALink from "../../../components/common/ALink";
import ProductMediaOne from "../../../components/partials/product/media/product-media-one";
import ProductDetailOne from "../../../components/partials/product/details/product-detail-one";
import ProductWidgetContainer from "../../../components/partials/product/widgets/product-widget-container";
import RelatedProducts from "../../../components/partials/product/widgets/related-products";
import SingleTabOne from "../../../components/partials/product/tabs/single-tab-one";
import { IoMdHome } from "react-icons/io";
import { gql, useQuery } from "@apollo/client";
import { Helmet } from "react-helmet";

const GET_PRODUCT = gql`
  query GetProduct($input: ProductId!) {
    getProduct(input: $input) {
      message
      product {
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
        productDetailImages {
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
      }
    }
  }
`;

function ProductDefault() {
  if (!useRouter().query.slug)
    return (
      <div className="loading-overlay">
        <div className="bounce-loader">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    );

  const slug = useRouter().query.slug;

  // const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
  // const product = data && data.product.data;
  // const related = data && data.product.related;

  const [product, setProduct] = useState();

  // if ( productError ) {
  //     return useRouter().push( '/pages/404' );
  // }

  const id = slug;

  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useQuery(GET_PRODUCT, { variables: { input: { _id: id.toString() } } });



  useEffect(() => {
    if (productData && productData.getProduct) {
      setProduct(productData.getProduct.product);
    } else if (productError) {
      router.push("/pages/404");
    }
  }, [productData, productError]);

  // console.log(product,"productdfghjklvbnm," )

  return (
    <>
      <Helmet>
        <title>{product && product.productName}</title>
      </Helmet>
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
              <li className="breadcrumb-item">
                <ALink href="/shop">Shop</ALink>
              </li>
              {/*TODO: when add the category is to the api uncomment and 
                    {/* <li className="breadcrumb-item">
                        {
                            product && product.categories.map( ( item, index ) => (
                                <React.Fragment key={ `category-${index}` }>
                                    <ALink href={ { pathname: "/shop", query: { category: item.slug } } }>{ item.name }</ALink>
                                    { index < product.categories.length - 1 ? '' : '' }
                                </React.Fragment>
                            ) )
                        }
                    </li> */}
              <li className="breadcrumb-item active" aria-current="page">
                <ALink className="activeitem" href="">
                  {/* {product && product.categoryNamePath
                    ? product.categoryNamePath.split(" ").slice(0, 1)
                    : ""} */}
                  {product && product.brandName}
                </ALink>
              </li>
            </ol>
          </div>
        </nav>
        <hr style={{ height: "1px", color: "#F0F0F0", marginTop: "-10px" }} />
        <div
          className={`container pt-2 skeleton-body skel-shop-products ${
            productLoading ? "" : "loaded"
          }`}
        >
          <div className="product-single-container product-single-default">
            <div className="row product-detail-row">
              <ProductMediaOne product={product} />

              <ProductDetailOne
                product={product}
                // prev={ product && product }
                // next={ product && product }
              />
            </div>
          </div>

          <SingleTabOne product={product} />

          <RelatedProducts products={product} loading={productLoading} />
        </div>
      </main>
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(ProductDefault);
