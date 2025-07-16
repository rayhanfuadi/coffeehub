import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Sora } from "next/font/google";
import "../styles/globals.css";
import AppShell from "@/components/layout/AppShell/AppShell";

const sora = Sora({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sora.className}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </main>
  )
}
