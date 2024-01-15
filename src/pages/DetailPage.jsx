import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import FetchData from "./hooks/FetchData";
import { useEffect, useState } from "react";

const DetailPage = () => {
    const { productid } = useParams();
    const [products, setProducts] = useState("");
    const [filterData, setFilterData] = useState("");

    FetchData("Products.json", setProducts);

    useEffect(() => {
        if (products) {
            const ProductResult = products.filter(
                (data) => data.id == productid
            );
            setFilterData(ProductResult);
        }
    }, [products, productid]);

    return (
        <div>
            <Header />
            <div className="px-20 w-full  bg-slate-100">
                <div className=" w-full mb-2 bg-white p-3 ">
                    {filterData ? (
                        filterData.map((product) => (
                            <div
                                key={product.id}
                                className="flex items-center justify-center"
                            >
                                <div className="w-56 h-64 m-4">
                                    <img
                                        src={product.image}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="h-full w-[700]">
                                    <p className="m-3 font-semibold text-xl">
                                        {product.name}
                                    </p>
                                    <p className=" w-[600px]">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="bg-white">
                    <h2 className="text-2xl font-bold">Similar Products</h2>
                    <div className="w-full flex flex-wrap items-center">
                        {filterData ? (
                            products
                                .filter((product) =>
                                    product.name
                                        .toLowerCase()
                                        .includes(filterData[0].name.toLowerCase())
                                )
                                .map((data) => (
                                    <div
                                        key={data.id}
                                        className=" w-52 h-52 rounded-xl p-3"
                                    >
                                        <Link to={"/detail/" + data.id}>
                                            <div className=" bg-slate-100 w-44 h-48">
                                                <img
                                                    src={data.image}
                                                    className=" w-full h-full"
                                                />
                                            </div>
                                            <p>{data.name}</p>
                                        </Link>
                                    </div>
                                ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
