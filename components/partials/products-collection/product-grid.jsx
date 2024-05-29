// Import Custom Component
import ProductOne from '../../features/products/product-one';

export default function ProductsGrid ( props ) {
    const { products = [], gridClass = "col-6 col-sm-4 col-lg-3 custom-shopproduct", loading, perPage, addClass = '' } = props;
    return (
        <>
            <div className="custom-divide-line">
                <div className={ `row row-joined  products-group skeleton-body skel-shop-products ${addClass} ${!loading ? 'loaded' : ''}` } style={{marginRight:"-1px", marginLeft:"-1px"}}>
                    {
                        loading ?
                            new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) =>
                                <div className={ `skel-pro skel-pro-grid pr-3 pl-3 ${gridClass}` } key={ "ProductGrid:" + index }></div>
                            )
                            :
                            products.map( ( item, index ) => (
                                <div className={ gridClass } key={ `product-${index}` } style={{border: "1px solid #B9B9B9",borderTop:"transparent",borderRight:"transparent"}}>
                                    <ProductOne adClass="inner-quickview inner-icon" product={ item } />
                                </div>
                            ) )
                    }
                </div>
            </div>
            {
                !loading && products.length === 0 ?
                    <div className="info-box with-icon" ><p>No products were found matching your selection.</p></div>
                    : ''
            }
        </>
    )
}