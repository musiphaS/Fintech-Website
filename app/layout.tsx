// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fintech Website',
  description: 'Your fintech website description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}