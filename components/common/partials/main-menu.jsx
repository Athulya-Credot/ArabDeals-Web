import { withRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
// Import Apollo Server
import withApollo from "../../../server/apollo";
import { GET_HOME_DATA } from "../../../server/queries";
// Import Custom Component
import ALink from "../ALink";
import ProductCountdown from "../../features/product-countdown";
import OwlCarousel from "../../features/owl-carousel";
import ProductThree from "../../features/products/product-three";
import Carousel from "react-owl-carousel2";

import { AiOutlineArrowLeft } from "react-icons/ai";
// Import Utils
import { mainMenu } from "../../../utils/data/menu";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import { usePathname, useRouter, useSearchParams } from 'next/router';
export const LEVEL_CATEGORY = gql`
  query Query {
    getActiveCategoryTree {
      records {
        _id
        categoryName
        categoryImage {
          fileType
          fileURL
          originalName
        }
        isLeaf
      } 
    }
  }
`;

export const GET_CHILD_CATEGORIES = gql`
  query GetActiveChildCategories($input: GetActiveChildCategoriesInput!) {
    getActiveChildCategories(input: $input) {
      records {
        _id
        categoryName
        isLeaf
      }
    }
  }
`;

export const BRAND_LISTING = gql`query GetBrandDetailsWithCategory($input: BrandsDetailsWithCategoryIdInput!) {
  getBrandDetailsWithCategory(input: $input) {
    message
    records {
      _id
      brandName
      logo {
        fileType
        originalName
        fileURL
      }
      isPopular
      priority
    }
  }
}`;
export const VARIENT = gql`query GetVariants($input: VariantsInput!) {
  getVariants(input: $input) {
    variants {
      _id
      attributeDescription
      attributeId
      attributeName
      attributeValue
      attributeValueId
      colorCode
    }
  }
}`;
const options = {
  items: 5,
  margin: 0,  
  loop: true,  
  center: false,
  left:true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  freeDrag: false, 
  stagePadding: 0,  
  merge: true,
  mergeFit: false,
  autoWidth: true,
  startPosition: 0,
  URLhashListener: false,
  nav: true,
  rewind: false, 
  navText: [
      '<button style="background-color: white; border: 2px solid rgb(240, 240, 240);   margin: 10px -12px; padding:2.8px  5px; outline: none; cursor: pointer; position:relative; left:-50px;" ><i class="icon-angle-left" style="color: black;   margin: 12px ;"></i></button>',
      '<button style="background-color: white; border: 2px solid rgb(240, 240, 240);  margin: 10px -12px; padding:2.8px  5px; outline: none; cursor: pointer;position:relative; right:-50px;" ><i class="icon-angle-right" style="color: black;   margin: 12px ;"></i></button>'
  ],
  slideBy: 1,
  dots: false,
  dotsEach: false,
  dotData: false,
  lazyLoad: false,
  lazyContent: true,
  autoplay: false,
  // autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 250,
  fluidSpeed: false,
  autoplaySpeed: false,
  navSpeed: false,
  dotsSpeed: false,
  dragEndSpeed: false,
  callbacks: true,

  // responsiveRefreshRate: 200,

  video: false,
  videoHeight: false,
  videoWidth: false,
  animateOut: false,
  animateIn: false,
  fallbackEasing: 'swing',
  info: false,
  nestedItemSelector: false,
  itemElement: 'div',
  stageElement: 'div',
  navElement: 'button',
  navContainer: false,
  dotsContainer: false,
  checkVisibility: false,
  animate: false,
  autoHeight: false,
  lazyLoadEager: 0,
  autoHeightClass: 'owl-height'
};

function MainMenu({ router }) {
  const { data, loading, error } = useQuery(LEVEL_CATEGORY);
  // console.log(data);
  const { data: varientData } = useQuery(VARIENT, {
    variables: { input: { _id: "65b76b1448ffd4fbf7782e19" } },
  });
  // console.log(varientData);
  const [parentcategory, setParentcategory] = useState({
    cat1: "",
    cat2: "",
    cat3: "",
    cat4: "",
    cat5: "",
    cat6: "",
    cat7: "",
  });
  const [isLeaf, setIsLeaf] = useState("");

  const [brands, setBrands] = useState([]);
  const [brandFetchToggle, setBrandFetchToggle] = useState(false);


  const [selectedcategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const pathname = router.pathname;
  // const router = useRouter();
  // const { data, loading, error } = useQuery(GET_HOME_DATA, {
  //   variables: { productsCount: 10, postsCount: 6 },
  // });

  // const featured = data && data.specialProducts.featured;

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  function isOtherPage() {
    return mainMenu.other.find((variation) => variation.url === pathname);
  }

  function activeHandler(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mmenu-depart-active");
    e.currentTarget.querySelector(".menu-depart").classList.toggle("opened");
  }

  const movebackward = () => {
    const array = Object.entries(parentcategory);
    // console.log(array);

    let index = array?.findIndex((item) => item[1] === "");
    if (index === -1) {
      index = array.length;
    }
    const element = array[index - 1][0];
    // console.log(element);
    setParentcategory((e) => ({ ...e, [element]: "" }));
  };

  const [lev2catid, setLev2id] = useState("");

  const [catLevel2, { loading: level2loading, error: level2error, data: level2Data }] = useLazyQuery(GET_CHILD_CATEGORIES, { fetchPolicy: "network-only" });
  const [catLevel3, { loading: level3loading, error: level3error, data: level3Data }] = useLazyQuery(GET_CHILD_CATEGORIES, { fetchPolicy: "network-only" });
  const [catLevel4, { loading: level4loading, error: level4error, data: level4Data }] = useLazyQuery(GET_CHILD_CATEGORIES, { fetchPolicy: "network-only" });
  const [catLevel5, { loading: level5loading, error: level5error, data: level5Data }] = useLazyQuery(GET_CHILD_CATEGORIES, { fetchPolicy: "network-only" });
  const [catLevel6, { loading: level6loading, error: level6error, data: level6Data }] = useLazyQuery(GET_CHILD_CATEGORIES, { fetchPolicy: "network-only" });
  const [catLevel7, { loading: level7loading, error: level7error, data: level7Data }] = useLazyQuery(GET_CHILD_CATEGORIES, { fetchPolicy: "network-only" });

  const [brandlist, { loading: brandloading, error: branderror, data: brandData }] = useLazyQuery(BRAND_LISTING, { fetchPolicy: "network-only" });

  const handleLevel2category = async (id) => {
    // console.log(id);
    try {
      catLevel2({ variables: { input: { parent: id } } });
      // console.log(level2Data);
    }
    catch (error) {
      console.error(error);
    }
  };
  const handleLevel3category = async (id) => {
    try {
      catLevel3({ variables: { input: { parent: id } } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLevel4category = async (id) => {
    try {
      catLevel4({ variables: { input: { parent: id } } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLevel5category = async (id) => {
    try {
      catLevel5({ variables: { input: { parent: id } } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLevel6category = async (id) => {
    try {
      catLevel6({ variables: { input: { parent: id } } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLevel7category = async (id) => {
    try {
      catLevel7({ variables: { input: { parent: id } } });
    } catch (error) {
      console.error(error);
    }
  };





  const handleBrandList = async (id) => {
    try {
      await brandlist({ variables: { input: { categoryId: id } } });
      setBrandFetchToggle(!brandFetchToggle);
    }
    catch (error) {
      console.error(error);
    }
  };
  const mainNav = (data?.getActiveCategoryTree?.records || []);

  const child1 = level2Data?.getActiveChildCategories?.records;

  const child2 = level3Data?.getActiveChildCategories?.records;

  const child3 = level4Data?.getActiveChildCategories?.records;

  const child4 = level5Data?.getActiveChildCategories?.records;

  const child5 = level6Data?.getActiveChildCategories?.records;

  const child6 = level7Data?.getActiveChildCategories?.records;





  // console.log(child1, 'child1');
  // console.log(child2, 'child2');
  // console.log(child2?.length, 'child2 length');

  const varient = [
    { key: "ddr1", label: "DDR 1" },
    { key: "ddr2", label: "DDR 2" },
    { key: "ddr3", label: "DDR 3" },
    { key: "ddr4", label: "DDR 4" },
  ];

  useEffect(() => {
    if (brandData) {
      setBrands(brandData?.getBrandDetailsWithCategory?.records);
    }
  }, [brandFetchToggle]);


  return (
    <>
      <nav
        className={`w-100 skeleton-body skel-shop-products ${
          // !loading ? "loaded" : ""
          false ? "loaded" : ""
          }`}
      >
        <ul className="custom__menu w-100" >
          <Carousel options={options}  style={{display:"grid",placeObject:"center" }}>
          {mainNav?.map((item) => (
            <li
              key={item._id}
              className={`custom__menu__item px-2 ${item._id === parentcategory.cat1 ? "activate" : ""
                }`}
              onClick={() => {
                setSelectedCategory(item?._id);
                setParentcategory((e) => ({
                  cat1: item._id,
                  cat2: "",
                  cat3: "",
                  cat4: "",
                  cat5: "",
                }));
                setIsLeaf(item.isLeaf ? item?._id : "");
                if (item.isLeaf) {
                  handleBrandList(item?._id);
                } else {
                  handleLevel2category(item?._id);
                  setBrands([]);
                }

              }}
            >
              <div className="custom__menu__item-image">
                <img src={item.categoryImage?.fileURL} alt={item.categoryName} />
              </div>
              <p className="custom__menu__item-label">{item.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}</p>
         
              </li> 
            ))}
            </Carousel>
        </ul>

        {/* mobile responsive menu */}
        <ul className="custom__mobilemenu w-100">
          {mainNav?.map((item) => (
            <li
              className={`custom__mobile__item px-2 ${item._id === parentcategory.cat1 ? "activate" : ""
                }`}
              onClick={() => {
                setIsLeaf(item.isLeaf ? item?._id : "");
                setSelectedCategory(item?._id);
                setParentcategory((e) => ({
                  cat1: item._id,
                  cat2: "",
                  cat3: "",
                  cat4: "",
                  cat5: "",
                }));
                if (item.isLeaf) {
                  handleBrandList(item?._id);
                } else {
                  handleLevel2category(item?._id);
                  setBrands([]);
                }
              }}
            >
              <div className="custom__mobilemenu__item-circle">
                <span className="custom__mobilemenu__item-image">
                  <img src={item.categoryImage?.fileURL} alt={item.categoryName} style={{
                    width: "30px",
                    height: "30px",
                  }}
                  />
                </span>
              </div>
              <p
                style={{ textAlign: "center", }}
              >{item.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}</p>
            </li>
          ))}
        </ul>

        {parentcategory?.cat2 ? (
          <BackArrow movebackward={movebackward} />
        ) : null}

        {parentcategory?.cat1 && parentcategory?.cat1 !== isLeaf ? (
          <ul
            className={`custom__menufirstchild w-100 ${parentcategory.cat2 ? "active_container_hidden" : ""
              }`}
          >
            {child1?.map((item) => (
              <li
                key={item._id}
                className={`custom__menufirstchild__item px-2 ${(item._id === parentcategory.cat2 || item?._id === selectedcategory) ? "customactive" : ""
                  }`}
                onClick={() => {
                  setIsLeaf(item.isLeaf ? item?._id : "");
                  setSelectedCategory(item?._id);
                  setParentcategory((e) => ({
                    ...e,
                    cat2: item._id,
                    cat3: "",
                    cat4: "",
                    cat5: "",
                    cat6: "",
                    cat7: "",
                  }));
                  if (item.isLeaf) {
                    handleBrandList(item?._id);
                  } else {
                    setBrands([]);
                    handleLevel3category(item?._id);
                  }

                }}
              >
                <p className="custom__menufirstchild__item-label">
                  {item.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}
                </p>
              </li>
            ))}
            {
              !!!child1?.length && <p className="custom__menufirstchild__item px-2">No Sub Category</p>
            }
          </ul>
        ) : null}
        {parentcategory?.cat2 && parentcategory?.cat2 !== isLeaf ? (
          (<>
            <p
              className={`customheading ${parentcategory.cat3 ? "active_container_hidden" : ""
                }`}
            >
              SELECT SUB CATEGORY
            </p>
            <ul
              className={`custom__menusecondchild w-100 ${parentcategory?.cat3 ? "active_container_hidden" : ""
                }`}
            >
              {child2?.map((item) => (
                <li
                  key={item._id}
                  className={`custom__menusecondchild__item px-4 ${item._id === parentcategory.cat3 ? "customactive" : ""
                    }`}
                  onClick={() => {
                    setSelectedCategory(item?._id);
                    setIsLeaf(item.isLeaf ? item?._id : "");
                    console.log(item.isLeaf, 'isLeaf');
                    setParentcategory((e) => ({
                      ...e,
                      cat3: item._id,
                      cat4: "",
                      cat5: "",
                      cat6: "",
                      cat7: "",
                    }));
                    if (item.isLeaf) {
                      handleBrandList(item?._id);
                    } else {
                      setBrands([]);
                      handleLevel4category(item?._id);
                    }

                  }}
                >
                  <p className="custom__menusecondchild__item-label">

                    {item?.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}
                  </p>
                </li>
              ))}
              {!!!child2?.length && <p className="custom__menufirstchild__item px-2">No Sub Category</p>}
            </ul>
          </>)
        ) : null}

        {
          parentcategory?.cat3 && parentcategory?.cat3 !== isLeaf ? (
            <>
              <p
                className={`customheading ${parentcategory.cat4 ? "active_container_hidden" : ""
                  }`}
              >
                SELECT SUB CATEGORY
              </p>
              <ul
                className={`custom__menusecondchild w-100 ${parentcategory?.cat4 ? "active_container_hidden" : ""
                  }`}
              >
                {child3?.map((item) => (
                  <li
                    key={item._id}
                    className={`custom__menusecondchild__item px-4 ${(item._id === parentcategory.cat4 || item?._id === selectedcategory) ? "customactive" : ""
                      }`}
                    onClick={() => {
                      setSelectedCategory(item?._id);
                      setIsLeaf(item.isLeaf ? item?._id : "");
                      setParentcategory((e) => ({
                        ...e,
                        cat4: item._id,
                        cat5: "",
                        cat6: "",
                        cat7: "",
                      }));
                      if (item.isLeaf) {
                        handleBrandList(item?._id);
                      } else {
                        setBrands([]);
                        handleLevel5category(item?._id);

                      }

                    }}
                  >
                    <p className="custom__menusecondchild__item-label">
                      {item?.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}
                    </p>
                  </li>
                ))}
                {!!!child3?.length && <p className="custom__menufirstchild__item px-2">No Sub Category</p>}
              </ul>
            </>
          ) : null
        }
        {
          parentcategory?.cat4 && parentcategory?.cat4 !== isLeaf ? (
            <>
              <p
                className={`customheading ${parentcategory.cat5 ? "active_container_hidden" : ""
                  }`}
              >
                SELECT SUB CATEGORY
              </p>
              <ul
                className={`custom__menusecondchild w-100 ${parentcategory?.cat5 ? "active_container_hidden" : ""
                  }`}
              >
                {child4?.map((item) => (
                  <li
                    key={item._id}
                    className={`custom__menusecondchild__item px-4 ${(item._id === parentcategory.cat5 || item?._id === selectedcategory) ? "customactive" : ""
                      }`}
                    onClick={() => {
                      setSelectedCategory(item?._id);
                      setIsLeaf(item.isLeaf ? item?._id : "");
                      setParentcategory((e) => ({
                        ...e,
                        cat5: item._id,
                        cat6: "",
                        cat7: "",
                      }));
                      if (item.isLeaf) {
                        handleBrandList(item?._id);
                      } else {
                        setBrands([]);
                        handleLevel6category(item?._id);

                      }


                    }}
                  >
                    <p className="custom__menusecondchild__item-label">
                      {item?.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}
                    </p>
                  </li>
                ))}
                {!!!child4?.length && <p className="custom__menufirstchild__item px-2">No Sub Category</p>}
              </ul>
            </>
          ) : null
        }

        {
          parentcategory?.cat5 && parentcategory?.cat5 !== isLeaf ? (
            <>
              <p
                className={`customheading ${parentcategory.cat6 ? "active_container_hidden" : ""
                  }`}
              >
                SELECT SUB CATEGORY
              </p>
              <ul
                className={`custom__menusecondchild w-100 ${parentcategory?.cat6 ? "active_container_hidden" : ""
                  }`}
              >
                {child5?.map((item) => (
                  <li
                    key={item._id}
                    className={`custom__menusecondchild__item px-4 ${(item._id === parentcategory.cat6 || item?._id === selectedcategory) ? "customactive" : ""
                      }`}
                    onClick={() => {
                      setSelectedCategory(item?._id);
                      setParentcategory((e) => ({
                        ...e,
                        cat6: item._id,
                        cat7: "",
                      }));
                      setIsLeaf(item.isLeaf ? item?._id : "");
                      if (item.isLeaf) {
                        handleBrandList(item?._id);
                      } else {
                        setBrands([]);

                        handleLevel7category(item?._id);

                      }
                    }}
                  >
                    <p className="custom__menusecondchild__item-label">
                      {item?.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}
                    </p>
                  </li>
                ))}
                {!!!child5?.length && <p className="custom__menufirstchild__item px-2">No Sub Category</p>}
              </ul>
            </>
          ) : null
        }

        {
          parentcategory?.cat6 && parentcategory?.cat6 !== isLeaf ? (
            <>
              <p
                className={`customheading ${parentcategory.cat7 ? "active_container_hidden" : ""
                  }`}
              >
                SELECT SUB CATEGORY
              </p>
              <ul
                className={`custom__menusecondchild w-100 ${parentcategory?.cat7 ? "active_container_hidden" : ""
                  }`}
              >
                {child6?.map((item) => (
                  <li
                    key={item._id}
                    className={`custom__menusecondchild__item px-4 ${(item._id === parentcategory.cat7 || item?._id === selectedcategory) ? "customactive" : ""
                      }`}
                    onClick={() => {
                      setSelectedCategory(item?._id);
                      setIsLeaf(item.isLeaf ? item?._id : "");
                      setParentcategory((e) => ({
                        ...e,
                        cat7: item._id,
                      }));
                      if (item.isLeaf) {
                        handleBrandList(item?._id);
                      } else {
                        setBrands([]);

                      }
                    }}
                  >
                    <p className="custom__menusecondchild__item-label">
                      {item?.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)}
                    </p>
                  </li>
                ))}
                {!!!child6?.length && <p className="custom__menufirstchild__item px-2">No Sub Category</p>}
              </ul>
            </>
          ) : null
        }

        {isLeaf ? (
          <>
            <p className="pb-4 customheading">SELECT BRAND</p>
            <ul className="custom__menulastchild w-100">
              {brands?.map((item) => (
                <li
                  key={item._id}
                  className={`custom__menulastchild__item px-4 ${item._id === selectedBrand ? "customactive" : ""
                    }`}
                  onClick={() => {
                    setSelectedBrand(item?._id);
                    router.push(`/shop?cat_id=${selectedcategory}&brands=${item?._id}`);
                  }}
                >
                  <span className="custom__menulastchild__item-image">
                    <img src={item?.logo?.fileURL} alt={item?.brandName} style={{borderRadius:"50px"}} />
                  </span>
                  <p className="custom__menulastchild__item-label">
                    {item?.brandName}
                  </p>
                </li>
              ))}
              {!!!brands?.length && <p className=" px-2">No Brand Available</p>}
            </ul>
          </>
        ) : null}
      </nav>
    </>
  );
}

const BackArrow = ({ movebackward }) => {
  return (
    <div className="mobile_backward" onClick={movebackward}>
      <AiOutlineArrowLeft />
    </div>
  );
};

export default withApollo({ ssr: typeof window === "undefined" })(
  withRouter(MainMenu)
);
