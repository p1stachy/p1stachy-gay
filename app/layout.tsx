import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({ 
  weight: ["400", "700"],
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
      <body className={spaceMono.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
