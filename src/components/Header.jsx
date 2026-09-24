"use client";

import React, { useState } from "react";
import { ShoppingCart, ShoppingBag, Search, Menu, X } from "lucide-react";
export default function Header() {
  let [searchBoxIsOpen, setSearchBoxIsOpen] = useState(false);
  let [hamburgaryMenuIsOpen, setHamburgaryMenuIsOpen] = useState(true);
  return (
    <div className="w-full  flex  items-center justify-between px-3  py-2">
      <div className="flex gap-1.5">
        <ShoppingCart />
        <h2>فروشگاه</h2>
      </div>
      <div className={`bg-accent mx-24 sm:flex`}>
        <ul
          className={`flex gap-6 text-fg  text-[19px] *:hover:text-primary cursor-pointer ${hamburgaryMenuIsOpen ? "flex flex-col absolute" : "hidden"}`}
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
        <Search
          className={`sm:hidden ${searchBoxIsOpen ? "hidden" : ""}`}
          onClick={() => setSearchBoxIsOpen(true)}
        />
        <input
          dir="rtl"
          className={`${searchBoxIsOpen ? "w-64" : "hidden"} rounded border-card-border border-2 bg-bg-app px-0.5 py-1 sm:flex`}
          type="text"
          placeholder="جستجو..."
        />
        <div className="relative">
          <ShoppingBag className={`${searchBoxIsOpen ? "hidden" : ""}`} />
          <div
            className={`${searchBoxIsOpen ? "hidden " : "absolute"}  bg-danger text-white text-[12px] text-center rounded-full w-3.5 h-3.5  bottom-4.5 -right-2 `}
          >
            2
          </div>
        </div>
        {searchBoxIsOpen ? (
          <X className="sm:hidden" onClick={() => setSearchBoxIsOpen(false)} />
        ) : (
          <Menu
            className="sm:hidden"
            onClick={() => setHamburgaryMenuIsOpen(true)}
          />
        )}
      </div>
    </div>
  );
}
