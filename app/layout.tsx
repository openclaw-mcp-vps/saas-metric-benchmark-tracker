import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaaS Metric Benchmark Tracker',
  description: 'Compare your SaaS metrics to industry benchmarks. Track MRR, churn, CAC, and LTV against anonymized data by stage and vertical.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b77d3a9b-7c55-44c3-b158-a566ae53300c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
