//Import Custom Component
import OwlCarousel from '../../../features/owl-carousel';
import ProductOne from '../../../features/products/product-one';

//Import Settings
import { productSlider } from '../../../../utils/data/slider';

function RelatedProducts ( props ) {
    const { adClass = "", products = [], loading, isContainer = false } = props;
    const sliderOption = { ...productSlider,  dots: true, nav: false, responsive: { ...productSlider.responsive, 1200: { items: 5 } } };

    return (
        !loading && !products.length ?
            ''
            :
            <>
            <section className={ `products-section  pt-0 pb-2 ${adClass}` } style={{marginTop:"100px"}}>
                <div className={ isContainer ? 'container' : '' }>
                    <h2 className="section-title pb-4">Related Products</h2>
                    {
                        !loading && !products.length ?
                            <div className="info-box with-icon"><p>No products were found matching your selection.</p></div>
                            :
                            <OwlCarousel adClass="products-slider dots-top dots-small" options={ sliderOption }>
                                {
                                    loading ?
                                        [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "product-skel" + index }></div>
                                        )
                                        :
                                        products.map( ( item, index ) => (
                                            <div
                                            className={`border-1 custom-border-remove ${index === 0 ? 'first-item' : ''}`}
                                            style={{borderColor: '#B9B9B9'}}
                                            key={ "product-one" + index }
                                            >

                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                />
                                                </div>
                                        ) )
                                }
                            </OwlCarousel>
                    }
                </div>

             

            </section>


        


            {/* <div
          style={{
            width: "1728px",
            height: "502px",
         
          }}
        > */}
          <img
            src="images\brands\deatail-banner.svg" 
          
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        {/* </div> */}
            </>
            


    )
}

export default RelatedProducts;