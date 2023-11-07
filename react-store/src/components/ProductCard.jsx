

export function ProductCard({product, cart, setCart}) {

    function handleclick() {
        setCart([...cart, product])
    }

    return (
        <>
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <button>${product.price}</button>
            <button onClick={() => handleclick()}>
                {cart.find((item) => item.title == product.title) ? "Added To Cart" : "Add To Cart"}
            </button>
        </>
    )
}