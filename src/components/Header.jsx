"use client";

import React, { useState } from "react";
import { ShoppingCart, ShoppingBag, Search, Menu, X } from "lucide-react";
export default function Header() {
  const [searchBoxIsOpen, setSearchBoxIsOpen] = useState(false);
  const [setHamburgerMenuIsOpen, hamburgerMenuIsOpen] = useState(true);
  const navLinks = [
    { label: "خانه", href: "#" },
    { label: "محصولات", href: "#" },
    { label: "درباره ما", href: "#" },
    { label: "تماس با ما", href: "#" },
  ];
  return (
    <header className="w-full  flex  items-center justify-between px-3  py-2">
      <div className="flex gap-1.5">
        <ShoppingCart />
        <h2>فروشگاه</h2>
      </div>
      <div className={`hidden mx-24 sm:flex`}>
        <ul
          className={` gap-6 text-fg  text-[19px] *:hover:text-primary cursor-pointer sm:flex`}
        >
          <li>خانه</li>
          <li>محصولات</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div
        className={`flex items-center  sm:gap-7 ${searchBoxIsOpen ? "gap-2" : "gap-5"}`}
      >
        <button onClick={() => setSearchBoxIsOpen(true)}>
          <Search className={`sm:hidden ${searchBoxIsOpen ? "hidden" : ""}`} />
        </button>
        <label htmlFor="search" className="sr-only">
          جستجوی محصول
        </label>

        <input
          dir="rtl"
          className={`${searchBoxIsOpen ? "w-52" : "hidden"} rounded border-card-border border-2 bg-bg-app px-1 py-1 sm:flex w-64`}
          type="text"
          placeholder="جستجو..."
        />
        {/* در بخش افزودن به سبد خرید آن کلیکش کامل بشه : */}
        <button className="relative">
          <ShoppingBag className={`${searchBoxIsOpen ? "hidden" : ""}`} />
          <div
            className={`${searchBoxIsOpen ? "hidden " : "absolute"}  bg-danger text-white text-[12px] text-center rounded-full w-3.5 h-3.5  bottom-4.5 -right-2 `}
          >
            2
          </div>
        </button>
        {searchBoxIsOpen ? (
          <button onClick={() => setSearchBoxIsOpen(false)}>
            <X className="sm:hidden" />
          </button>
        ) : (
          <button onClick={() => setHamburgerMenuIsOpen(true)}>
            <Menu className="sm:hidden" />
          </button>
        )}
      </div>
    </header>
  );
}
