import localFont from "next/font/local";
import "./globals.css";


const themify = localFont({
  src: "./fonts/themify.ttf",
  variable:"--font-themify"
})

export const metadata = {
  title: "LeoSpa",
  description: "made by Line Sørensen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${themify.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
