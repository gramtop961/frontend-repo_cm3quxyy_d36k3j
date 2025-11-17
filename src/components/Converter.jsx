import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const CRYPTOS = ['BTC', 'ETH', 'USDT', 'SOL', 'BNB', 'XRP', 'ADA', 'DOGE', 'MATIC', 'DOT', 'LTC']
const FIATS = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'INR']

export default function Converter() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [amount, setAmount] = useState('1000')
  const [fiat, setFiat] = useState('USD')
  const [symbol, setSymbol] = useState('BTC')
  const [loading, setLoading] = useState(false)
  const [price, setPrice] = useState(null)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const glow = 'shadow-[0_0_40px_rgba(133,0,255,0.35)]'

  const fetchPrice = async () => {
    setError('');
    setLoading(true)
    try {
      const r = await fetch(`${baseUrl}/api/price?symbol=${symbol}&fiat=${fiat}`)
      if (!r.ok) throw new Error('Failed to fetch price')
      const data = await r.json()
      setPrice(data.price)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol, fiat])

  const converted = useMemo(() => {
    if (!price) return 0
    const amt = parseFloat(amount || '0')
    if (isNaN(amt) || amt <= 0) return 0
    return amt / price
  }, [amount, price])

  const handleConvert = async (e) => {
    e?.preventDefault?.()
    setError('');
    setLoading(true)
    try {
      const r = await fetch(`${baseUrl}/api/convert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseFloat(amount), fiat, symbol })
      })
      if (!r.ok) throw new Error('Conversion failed')
      const data = await r.json()
      setResult(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="converter" className="relative w-full py-24 bg-gradient-to-b from-black via-black to-[#0b0012] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-center"
        >
          Instant Crypto Converter
        </motion.h2>
        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
          Enter your local amount and instantly preview how much crypto you get.
        </p>

        <motion.form
          onSubmit={handleConvert}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-10 mx-auto grid w-full max-w-3xl grid-cols-1 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6 ${glow}`}
        >
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">Amount ({fiat})</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-2 w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-purple-500/70"
              placeholder="1000"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Fiat</label>
            <select value={fiat} onChange={(e) => setFiat(e.target.value)} className="mt-2 w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-purple-500/70">
              {FIATS.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-white/70">Crypto</label>
            <select value={symbol} onChange={(e) => setSymbol(e.target.value)} className="mt-2 w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-purple-500/70">
              {CRYPTOS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="md:col-span-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-sm">Live Price:</span>
              <span className="text-lg font-semibold text-white">{price ? `${fiat} ${price.toLocaleString()}` : '—'}</span>
            </div>
            <button type="submit" disabled={loading} className={`relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all ${loading ? 'opacity-70' : 'hover:scale-[1.02]'} before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-600 before:to-fuchsia-600 before:opacity-80 before:blur-md`}>
              <span className="relative z-10">{loading ? 'Converting…' : 'Convert Now'}</span>
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6 text-center"
        >
          {error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <>
              <p className="text-white/70">You receive</p>
              <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                {converted ? converted.toFixed(6) : '0.000000'} {symbol}
              </p>
              {result && (
                <p className="mt-2 text-sm text-white/60">Locked at price: {fiat} {result.price?.toLocaleString?.() || result.price}</p>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
