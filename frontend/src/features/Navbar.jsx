import React, { useContext, useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import top from "../assets/sree.png";
import top1 from "../assets/fssai.png";
import top2 from "../assets/mse.png";
import { CartContext } from "./CartContext.jsx";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

import whatsappIcon from "../assets/whatsapp.jpg";

const Navbar = () => {
    const { cart, openCart } = useContext(CartContext);
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/products/search?q=${value}`
            );
            const data = await res.json();
            setResults(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <header className="navbar">
                <div className="nav-container">

                    {/* LOGO */}
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={logo} className="nav-logo" alt="logo" />
                    </Link>

                    {/* NAV LINKS */}
                    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                        <Link to="/product" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
                        <Link to="/admin/login" onClick={() => setMenuOpen(false)}>ADMIN</Link>
                    </nav>

                    {/* ICONS */}
                    <div className="nav-icons">
                        <div className="top-img2">
                            <img src={top2} alt="nav-img" />
                        </div>
                        <div className="top-img">
                            <img src={top} alt="nav-img" />

                        </div>
                        <div className="top-img1"><img src={top1} alt="nav-img" />
                        </div>


                        <div className="customer-care">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            <a href="tel:+917510155444">+91 8129230500</a>
                        </div>

                        <CiSearch
                            size={34}
                            className="nav-icon"
                            onClick={() => setSearchOpen(!searchOpen)}
                        />

                        <div className="cart-icon-container" onClick={openCart}>
                            <CiShoppingCart size={26} className="nav-icon" />
                            {totalItems > 0 && (
                                <span className="cart-count">{totalItems}</span>
                            )}
                        </div>

                        {/* HAMBURGER / CLOSE */}
                        {!menuOpen ? (
                            <CiMenuBurger
                                size={28}
                                className="hamburger"
                                onClick={() => setMenuOpen(true)}
                            />
                        ) : (
                            <AiOutlineClose
                                size={30}
                                className="hamburger close"
                                onClick={() => setMenuOpen(false)}
                            />
                        )}

                    </div>
                </div>

                {/* SEARCH */}
                {searchOpen && (
                    <div className="search-bar-container">
                        <input
                            className="input1"
                            placeholder="Search products..."
                            value={query}
                            onChange={handleSearch}
                        />
                        <button
                            className="search-close-btn"
                            onClick={() => setSearchOpen(false)}
                        >
                            ✕
                        </button>

                        {results.length > 0 && (
                            <div className="search-results">
                                {results.map(item => (
                                    <Link
                                        key={item._id}
                                        to={`/product/${item._id}`}
                                        className="search-item"
                                        onClick={() => setSearchOpen(false)}
                                    >
                                        <img src={item.images[0]} alt={item.spicesName} />
                                        <span>{item.spicesName}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </header>

            {/* OVERLAY */}
            {menuOpen && (
                <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
            )}
        </>
    );
};

export default Navbar;
