import React, { useEffect, useState } from "react";

interface CartItem {
    id: string | number;
    image: string;
    Name: string;
    price: string;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[] | null>(null);

    useEffect(() => {
        const storedItems = localStorage.getItem("cartItem");
        console.log(storedItems);

        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    return (
        <div className="">
            <div className="absolute w-96 h-96 top-8 right-20 rounded-3xl bg-white">
                {cartItems ? (
                    cartItems.map((item: CartItem) => (
                        <div key={item.id}>
                            <div className="flex p-3">
                                <div className="w-24 h-24">
                                    <img src={item.image} alt={item.Name} />
                                </div>
                                <div>
                                    <p>{item.Name}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
