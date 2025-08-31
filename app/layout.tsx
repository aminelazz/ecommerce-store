import type { Metadata } from "next"
import { Urbanist, Nunito } from "next/font/google"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
