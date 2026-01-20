import React, { useContext, useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { CartContext } from "./CartContext.jsx";
import { CiSearch, CiUser, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import whatsappIcon from "../assets/whatsapp.jpg";

const Navbar = () => {
  const { cart, openCart } = useContext(CartContext);
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
      const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // 🔍 Search handler
    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setResults([]);
            return;
        }

        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/products/search?q=${value}`
            );

            if (!res.ok) throw new Error("Search failed");

            const data = await res.json();
            setResults(data);
        } catch (err) {
            console.error("Search error:", err);
        }
    };

    return (
        <header className="navbar">
            <div className="nav-container">

                {/* LOGO */}
                <div className="nav-left">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={logo} className="nav-logo" alt="logo" />
                    </Link>
                </div>

                {/* NAV LINKS */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                    <Link to="/product" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
                    <Link to="/admin/login" onClick={() => setMenuOpen(false)}>ADMIN</Link>
                </nav>

                {/* ICONS */}
                <div className="nav-icons">

                    {/* CUSTOMER CARE */}
                    <div className="customer-care">
                        <img src={whatsappIcon} alt="WhatsApp" />
                        <a href="tel:+917510155444" className="phone-number">
                            +91 00000000
                        </a>
                    </div>

                    {/* SEARCH */}
                    <CiSearch
                        size={24}
                        className="nav-icon"
                        onClick={() => setSearchOpen(!searchOpen)}
                    />

                    {/* USER */}
                    {/* <CiUser size={24} className="nav-icon" /> */}

                    {/* CART */}
                   <div
  className="cart-icon-container"
  onClick={openCart}
>
  <CiShoppingCart size={26} className="nav-icon" />
  {totalItems > 0 && (
    <span className="cart-count">{totalItems}</span>
  )}
</div>

                </div>
            </div>
            {searchOpen && (
                <div className="search-bar-container">
                
                      <input type="text" name="text" class="input1" placeholder="Search Products.... " value={query}
                            onChange={handleSearch}/> 
                        <button
                
                            className="search-close-btn"
                            onClick={() => {
                                setSearchOpen(false);
                                setQuery("");
                                setResults([]);
                            }}
                        >
                            ✕
                        </button>
                

                    {results.length > 0 && (
                        <div className="search-results">
                            {results.map((item) => (
                                <Link
                                    to={`/product/${item._id}`}
                                    key={item._id}
                                    className="search-item"
                                    onClick={() => {
                                        setSearchOpen(false);
                                        setQuery("");
                                        setResults([]);
                                    }}
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
    );
};

export default Navbar;
