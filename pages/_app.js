import "@/styles/globals.css";
import Navbar from "@/src/components/Navbar";
import { useEffect, useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import CartProvider from "@/src/config/CartProvider";

export default function App({ Component, pageProps }) {
  const [supabaseAuth] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseAuth}
      initialSession={pageProps.initialSession}
    >
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </SessionContextProvider>
  );
}
