import Footer from "@/components/footer/Footer";
import Header from "../components/header/Hearder";
import "./globals.css";
export const metadata = {
  title: "Express Convert",
  description: "Convert units of measurement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
    
      >
        <header>
        <Header />
        </header>
        <main>

        {children}
        </main>
        <footer>
          <Footer/> 
        </footer>
      </body>
    </html>
  );
}
