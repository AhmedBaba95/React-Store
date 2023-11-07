import { ProductCard } from "../components/productCard"

export function Products({cart, setCart}) {

    const protein = {title: "Protein Powder", desc: "Whey protein powder used for building muscle", price: "40"}
    const creatine = {title: "Creatine", desc: "Creatine monohydrate used to supplement your athleticism", price: "25"}
    const massGainer = {title: "Mass Gainer", desc: "Dense carb loaded powder for packing on weight", price: "50"}

    const products = [protein, creatine, massGainer]
    
    return (
        <>
            {products.map((product) => {
                return (
                    <ProductCard product={product} cart={cart} setCart={setCart}/>
                )
            })}
        </>
    )
    }