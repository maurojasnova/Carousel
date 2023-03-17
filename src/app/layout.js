import { Header } from './components/Header'

export const metadata = {
  title: "Street Burguer",
  description: "Comida rápida",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
