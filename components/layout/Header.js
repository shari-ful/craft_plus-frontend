import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>
                        Grand opening, <strong>up to 15%</strong> off all items.
                        Only <strong>3 days</strong> left
                    </span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                    <ul>
                                        <li>
                                            <Link href="/page-about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page-account">
                                                <a>My Account</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-wishlist">
                                                <a>Wishlist</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page-account">
                                                <a>Order Tracking</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div
                                        id="news-flash"
                                        className="d-inline-block"
                                    >
                                        <ul>
                                            <li>
                                                Get great devices up to 50% off
                                                <Link href="/shop-grid-right">
                                                    <a> View details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>
                                            Need help? Call Us:{" "}
                                            <strong className="text-brand">
                                                {" "}
                                                + 1800 900
                                            </strong>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a className="language-dropdown-active">
                                                    <i className="fi-rs-world"></i>
                                                    English
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-fr.png"
                                                                alt=""
                                                            />
                                                            Français
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-dt.png"
                                                                alt=""
                                                            />
                                                            Deutsch
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-ru.png"
                                                                alt=""
                                                            />
                                                            Pусский
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                className="language-dropdown-active"
                                                href="#"
                                            >
                                                USD{" "}
                                                <i className="fi-rs-angle-small-down"></i>
                                            </a>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/flag-fr.png"
                                                            alt=""
                                                        />
                                                        INR
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/flag-dt.png"
                                                            alt=""
                                                        />
                                                        MBP
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/flag-ru.png"
                                                            alt=""
                                                        />
                                                        EU
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={scroll ? "header-bottom header-bottom-bg-color sticky-bar stick" : "header-bottom header-bottom-bg-color sticky-bar"}>
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a
                                        className="categories-button-active"
                                        onClick={handleToggle}
                                    >
                                        <span className="fi-rs-apps"></span>
                                        <span className="et">Browse</span> All
                                        Categories
                                        <i className="fi-rs-angle-down"></i>
                                    </a>

                                    <div
                                        className={
                                            isToggled
                                                ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                                                : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                                        }
                                    >
                                        <div className="d-flex categori-dropdown-inner">
                                            <CategoryProduct2 />
                                            <CategoryProduct3 />
                                        </div>
                                        <div
                                            className="more_slide_open"
                                            style={{ display: "none" }}
                                        >
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-1.svg"
                                                                alt=""
                                                            />
                                                            Milks and Dairies
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-2.svg"
                                                                alt=""
                                                            />
                                                            Clothing & beauty
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-3.svg"
                                                                alt=""
                                                            />
                                                            Wines & Drinks
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-4.svg"
                                                                alt=""
                                                            />
                                                            Fresh Seafood
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories">
                                            <span className="icon"></span>{" "}
                                            <span className="heading-sm-1">
                                                Show more...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="header-wrap">

                                <div className="header-right">
                                    <div className="search-style-2">
                                        <Search />
                                    </div>

                                    <div className="header-action-right">
                                        <div className="header-action-2">

                                            <div className="header-action-icon-2">
                                                <Link href="/shop-compare">
                                                    <a>
                                                        <img
                                                            className="svgInject"
                                                            alt="Evara"
                                                            src="/assets/imgs/theme/icons/icon-compare.svg"
                                                        />
                                                        <span className="pro-count blue">
                                                            {totalCompareItems}
                                                        </span>
                                                    </a>
                                                </Link>
                                                <Link href="/shop-compare">
                                                    <a>
                                                        <span className="lable ml-0">
                                                            Compare
                                                        </span>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="header-action-icon-2">
                                                <Link href="/shop-wishlist">
                                                    <a>
                                                        <img
                                                            className="svgInject"
                                                            alt="Evara"
                                                            src="/assets/imgs/theme/icons/icon-heart.svg"
                                                        />
                                                        <span className="pro-count blue">
                                                            {totalWishlistItems}
                                                        </span>
                                                    </a>
                                                </Link>
                                                <Link href="/shop-wishlist">
                                                    <span className="lable">
                                                        Wishlist
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="header-action-icon-2">
                                                <Link href="/shop-cart">
                                                    <a className="mini-cart-icon">
                                                        <img
                                                            alt="Evara"
                                                            src="/assets/imgs/theme/icons/icon-cart.svg"
                                                        />
                                                        <span className="pro-count blue">
                                                            {totalCartItems}
                                                        </span>
                                                    </a>
                                                </Link>
                                                <Link href="/shop-cart">
                                                    <a>
                                                        <span className="lable">
                                                            Cart
                                                        </span>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="header-action-icon-2">
                                                <Link href="/page-account"><a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Nest"
                                                        src="/assets/imgs/theme/icons/icon-user.svg"
                                                    />
                                                </a></Link>
                                                <Link href="/page-account"><a>
                                                    <span className="lable ml-0">
                                                        Account
                                                    </span>
                                                </a></Link>
                                                <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                    <ul>
                                                        <li>
                                                            <Link href="/page-account">
                                                                <a>
                                                                    <i className="fi fi-rs-user mr-10"></i>
                                                                    My Account
                                                                </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/page-account"><a>
                                                                <i className="fi fi-rs-location-alt mr-10"></i>
                                                                Order Tracking
                                                            </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/page-account"><a>
                                                                <i className="fi fi-rs-label mr-10"></i>
                                                                My Voucher
                                                            </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/shop-wishlist"><a>
                                                                <i className="fi fi-rs-heart mr-10"></i>
                                                                My Wishlist
                                                            </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/page-account"><a>
                                                                <i className="fi fi-rs-settings-sliders mr-10"></i>
                                                                Setting
                                                            </a></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/page-login"><a>
                                                                <i className="fi fi-rs-sign-out mr-10"></i>
                                                                Sign out
                                                            </a></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
