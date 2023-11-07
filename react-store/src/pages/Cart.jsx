

export function Cart({cart, setCart}) {
    return (
        <>
            {cart.map((item) => {

                function handleClick(item) {
                    setCart(cart.filter((product) => product.title != item.title))
                }

                return (
                    <>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => handleClick(item)}>Remove Item</button>
                    </>
                )
            })}
        </>
    )
}