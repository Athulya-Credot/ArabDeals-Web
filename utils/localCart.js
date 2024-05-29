const localCart = (cartItems) => {
    const products = [];
    let maxPrice = 0;
    let subTotal = 0;
    let deliveryCharge = 0;

    if (cartItems.length) {
        cartItems.forEach((item) => {
            const product = {
                productId: item._id,
                quantity: item.quantity,
                name: item.productName,
                shortDescription: item.shortDescription,
                stock: item.stock,
                color: item.color,
                size: item.size,
                price: item.price,
                image: item?.images[0]?.fileURL || item.image,
                sellingPrice: item.sellingPrice,
                mrp: item.mrp
            };

            maxPrice += Number(item.mrp);
            subTotal += Number(item.price * item.quantity);
            products.push(product);
        });

        const grandTotal = subTotal + deliveryCharge;

        return {
            products,
            grandTotal,
            subTotal,
        };
    }

    return {
        products: [],
        grandTotal: 0,
        subTotal: 0,
        deliveryCharge: 0
    };
};

export default localCart;
