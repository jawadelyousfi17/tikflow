import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tikfoo : Free tiktok followers",
  description: "boost your account for free, in 3 steps : give us your username and get free followers fast and easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}

        <Footer></Footer>
      </body>
    </html>
  );
}
