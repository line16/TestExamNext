import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const themify = localFont({
  src: "./fonts/themify.woff",
  variable:"--font-themify",
  weight: "100 500 900"
})

export const metadata = {
  title: "LeoSpa",
  description: "made by Line Sørensen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${themify.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
