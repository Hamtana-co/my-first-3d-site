/** @format */
import '../public/PlayCanvas/manifest.json'
import '../public/PlayCanvas/styles.css'
import * as pc from 'playcanvas'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Room',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <script src='./PlayCanvas/playcanvas-stable.min.js'></script>
        <script src='./PlayCanvas/__settings__.js'></script>
      </head>
      <body>{children}</body>
    </html>
  )
}