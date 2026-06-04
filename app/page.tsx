export default function Home() {
  const faqs = [
    {
      q: 'What metrics does it track?',
      a: 'MRR, churn rate, CAC, and LTV — the four metrics every SaaS founder needs to watch.'
    },
    {
      q: 'How are benchmarks calculated?',
      a: 'Benchmarks are aggregated from anonymized submissions, segmented by company stage and vertical.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Compare your SaaS metrics to{' '}
          <span className="text-[#58a6ff]">industry benchmarks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track MRR, churn, CAC, and LTV. See how you stack up against anonymized peers filtered by stage and vertical — so you know exactly where to focus.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $14/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Metric preview cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          {[
            { label: 'MRR', yours: '$12,400', bench: '$9,800', up: true },
            { label: 'Churn', yours: '3.2%', bench: '4.1%', up: false },
            { label: 'CAC', yours: '$320', bench: '$410', up: false },
            { label: 'LTV', yours: '$2,100', bench: '$1,750', up: true }
          ].map((m) => (
            <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-xs text-[#484f58] mb-1">{m.label}</p>
              <p className="text-lg font-bold text-white">{m.yours}</p>
              <p className="text-xs mt-1">
                <span className={m.up ? 'text-[#3fb950]' : 'text-[#f85149]'}>{m.up ? '▲' : '▼'}</span>
                {' '}<span className="text-[#8b949e]">Bench: {m.bench}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-xs text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-sm text-[#8b949e] mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Track MRR, Churn, CAC & LTV',
              'Industry benchmarks by stage & vertical',
              'Historical trend charts',
              'CSV export',
              'Slack digest (weekly)'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} SaaS Metric Benchmark Tracker · $14/mo
      </footer>
    </main>
  )
}
