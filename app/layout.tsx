import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"] 
})

export const metadata: Metadata = {
  title: "p1stachy",
  description: "p1stachy links",
  icons: {
    icon: "/pfp/p1stachy.webp",
  },
  openGraph: {
    title: "p1stachy",
    description: "p1stachy links",
    images: ["/pfp/p1stachy.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
