"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
