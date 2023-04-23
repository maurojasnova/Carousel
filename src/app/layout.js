import "../../styles/globals.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Street Burguer",
  description: "Comida rápida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
