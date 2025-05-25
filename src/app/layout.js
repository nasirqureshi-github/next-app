import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head><link rel="icon" href="/image.png" type="image/png" sizes="32x32" /></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
