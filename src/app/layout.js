import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "فروشگاه| پروژه تمرینی",
  description:
    "یک فروشگاه آنلاین ساده، پروژه تمرینی برای یادگیری React و Next.j",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body
        className={`${vazirmatn.className} antialiased min-h-full flex flex-col bg-bg-app`}
      >
        {children}
      </body>
    </html>
  );
}
