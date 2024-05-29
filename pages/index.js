// import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from "../server/apollo";
import { GET_HOME_DATA } from "../server/queries";

// Import Custom Component
import BrandSection from "../components/partials/home/brand-section";
import CategorySection from "../components/partials/home/category-section";
import CategoryFilterSection from "../components/partials/home/category-filter-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import PromoSection from "../components/partials/home/promo-section";
import InfoSection from "../components/partials/home/info-section";
import BannerSection from "../components/partials/home/banner-section";
import DealSection from "../components/partials/home/deal-section";
import ElectronicCollection from "../components/partials/home/electronic-collection";
import GiftCollection from "../components/partials/home/gift-collection";
import GardenCollection from "../components/partials/home/garden-collection";
import SelectedCollection from "../components/partials/home/selected-collection";
import RecentCollection from "../components/partials/home/recent-collection";
import TopBrand from "../components/partials/home/top-brand";
import FooterBannerSection from "../components/partials/home/footerbanner";
import AppleProducts from "../components/partials/home/apple-products";
import MainMenu from "../components/common/partials/main-menu";
import { useQuery, gql, useMutation } from "@apollo/react-hooks";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export const CMS = gql`
  query getCmsRecord($input: cmsRecordFilter!) {
    getCmsRecord(input: $input) {
      record {
        _id
        images {
          fileType
          fileURL
          originalName
        }
        buttons {
          buttonText
          redirectionURL
        }
        sectionName
        pageName
      }
    }
  }
`;

function Home() {
  const [sectionOneDatastate, setSectionOneDataState] = useState({});
  const [sectionTwoDatastate, setSectionTwoDataStae] = useState({});
  const [sectionThreeDatastate, setSectionThreeDataState] = useState({});
  const [sectionFourDatastate, setSectionFourDataState] = useState({});
  const [sectionFiveDatastate, setSectionFiveDataState] = useState({});
  const [sectionSixDatastate, setSectionSixDataState] = useState({});

  const {
    data: sectionOneData,
    loading,
    error,
  } = useQuery(CMS, {
    variables: { input: { pageName: "Home", sectionName: "SECTION-1" } },
  });

  const {
    data: sectionTwoData,
    loading: loading2,
    error: error2,
  } = useQuery(CMS, {
    variables: { input: { pageName: "Home", sectionName: "SECTION-2" } },
  });

  const {
    data: sectionThreeData,
    loading: loading3,
    error: error3,
  } = useQuery(CMS, {
    variables: { input: { pageName: "Home", sectionName: "SECTION-3" } },
  });

  const {
    data: sectionFourData,
    loading: loading4,
    error: error4,
  } = useQuery(CMS, {
    variables: { input: { pageName: "Home", sectionName: "SECTION-4" } },
  });

  const {
    data: sectionFiveData,
    loading: loading5,
    error: error5,
  } = useQuery(CMS, {
    variables: { input: { pageName: "Home", sectionName: "SECTION-5" } },
  });

  useEffect(() => {
    if (sectionOneData) {
      setSectionOneDataState(sectionOneData?.getCmsRecord?.record);
    }
    if (sectionTwoData) {
      setSectionTwoDataStae(sectionTwoData?.getCmsRecord?.record);
    }
    if (sectionThreeData) {
      setSectionThreeDataState(sectionThreeData?.getCmsRecord?.record);
    }
    if (sectionFourData) {
      setSectionFourDataState(sectionFourData?.getCmsRecord?.record);
    }
    if (sectionFiveData) {
      setSectionFiveDataState(sectionFiveData?.getCmsRecord?.record);
    }
  }, [sectionOneData, sectionTwoData, sectionThreeData, sectionFourData, sectionFiveData]);

  return (
    <>
      <Helmet>
        <title>Home | Arab Deals</title>
      </Helmet>
      <main className="home">
        <div style={{ position: "relative" }}>
          <div
            className="header-bottom d-flex"
            style={{ position: "relative", width: "100%", marginBottom:"-50px"}}
          >
            <div className="container" >  
              <div>
                <MainMenu />
              </div>
            </div>
          </div>
          <div className="homebannerpadding">
            {!loading && <HomeSection className="pb-5" data={sectionOneDatastate} />}
          </div>
        </div>
        <div className={`container skeleton-body skel-shop-products my-sm-1 ${false ? "" : "loaded"}`}>
          {!loading2 && !loading3 && (
            <BannerSection
              sectionTwoData={sectionTwoDatastate}
              sectionThreeData={sectionThreeDatastate}
              sectionSixData={sectionSixDatastate}
            />
          )}
          <DealSection />
        </div>

        <div className={`container skeleton-body skel-shop-products `}>
          {!loading4 && <BrandSection />}
        </div>

        <FooterBannerSection data={sectionFourDatastate} />

        <div className={` skeleton-body skel-shop-products ${false ? "" : "loaded"}`}>
          <ElectronicCollection />

          {/* <RecentCollection bestSelling={bestSelling} /> */}
        </div>
        {/* <CategoryFilterSection /> */}
        {/* <AppleProducts products={bestSelling}/> */}
        {!loading5 && <FooterBannerSection data={sectionFiveDatastate} />}
      </main> 

      {/* <NewsletterModal /> */}
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(Home);
