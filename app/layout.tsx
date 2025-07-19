import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Manrope, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import MouseGradient from "@/components/MouseGradient"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfolio - Kartik",
  description: "Minimalistic portfolio showcasing my work",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-space-grotesk antialiased`}
      >
        <MouseGradient/>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
