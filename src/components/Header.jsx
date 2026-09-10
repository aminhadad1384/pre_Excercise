import React from "react";
import { ShoppingCart, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full  flex items-center justify-between px-3  py-2">
      <div className="flex gap-1.5">
        <ShoppingCart />
        <h2>فروشگاه</h2>
      </div>
      <div className="">
        <ul className="flex gap-4 text-fg *:hover:text-primary cursor-pointer">
          <li>خانه</li>
          <li>محصولات</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div>
        <input
          dir="rtl"
          className="rounded border-card-border border-2 bg-bg-app px-0.5 py-1 "
          type="text"
          placeholder="جستجو..."
        />
      </div>
      <div className="relative">
        <ShoppingBag />
        <div className="bg-danger text-white text-[12px] text-center rounded-full w-3.5 h-3.5 absolute bottom-4.5 -right-2">
          2
        </div>
      </div>
    </div>
  );
}
