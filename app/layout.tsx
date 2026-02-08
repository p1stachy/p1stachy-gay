import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"] 
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0c0e10',
}

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
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-straight/css/uicons-bold-straight.css' />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
