import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useCallback, useState } from "react";
import FetchData from "./hooks/FetchData";

const Header = () => {
    const [icon, setIcon] = useState(null);
    var [show, setShow] = useState("invisible");
    var [inputBox, setInputBox] = useState("");

    var change = useCallback(() => {
        setShow("visible");
    }, []);

    var hideBox = useCallback(() => {
        setShow("invisible");
    }, []);

    FetchData("icon.json", setIcon);

    return (
        <header className="relative">
            {icon ? (
                <div className="flex justify-between w-full bg-none h-[80px] sticky items-center max-sm:h-32 p-3 max-sm:px-2 px-20">
                    <h1 className=" font-bold text-3xl max-sm:absolute max-sm:top-3">
                        Logo
                    </h1>
                    <nav className="border max-sm:absolute max-sm:right-0 max-sm:top-14 max-sm:w-full  shadow rounded-full">
                        <ul className="flex justify-center items-center h-[50px]">
                            <li className="px-12 max-sm:px-6">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="px-12 max-sm:px-6 border-l">
                                <Link to="/product">Products</Link>
                            </li>
                            <button
                                onClick={change}
                                className="px-12 max-sm:px-6 SearchButton  border-l"
                            >
                                <Search />
                            </button>
                        </ul>
                    </nav>
                    <div className="flex justify-center max-sm:absolute max-sm:top-0 max-sm:right-0 items-center p-2">
                        <div className="flex justify-center items-center max-sm:px-0 px-2">
                            <p className="px-3 font-bold">Login</p>
                            <img
                                src={icon[0].image}
                                alt="profile photo"
                                className="w-8 h-8 rounded-full "
                            />
                        </div>
                        <div className="flex justify-center items-center ml-6 max-sm:ml-2 w-11 h-11 rounded-full bg-slate-50">
                            <img src={icon[6].image} className="w-8 h-8" />
                        </div>
                    </div>
                </div>
            ) : (
                <p>loading...</p>
            )}
            <div
                className={`absolute ${show} w-[800px] h-[300px] top-5 max-sm:w-full max-sm:left-0  left-72 bg-[#00003a] rounded-lg`}
            >
                <form onSubmit={hideBox} className="flex relative">
                    <input
                        onChange={(e) => setInputBox(e.target.value)}
                        className="w-[600px] h-12 rounded-full block text-white px-4 m-0 m-auto mt-8 bg-[#0000008a]"
                    />
                    <Link to={"/search?query=" + inputBox}>
                        <button className="absolute top-11 right-28 max-sm:right-3  text-white">
                            <Search />
                        </button>
                    </Link>
                </form>
            </div>
        </header>
    );
};

export default Header;
