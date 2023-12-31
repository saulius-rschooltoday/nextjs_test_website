import Navbar from "../components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "../components/footer/Footer";
import AuthProvider from "../components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js test website.",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        
      </body>
    </html>
  );
}
