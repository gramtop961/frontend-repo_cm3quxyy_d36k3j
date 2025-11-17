import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const scale = useTransform(scrollY, [0, 600], [1, 1.1])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.85])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0" aria-hidden>
        <motion.div style={{ y, scale, opacity }} className="w-full h-full">
          <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
        {/* Soft radial glow overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 md:pt-36 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Ultra‑fast, secure crypto conversions for the Web3 era
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg md:text-xl text-white/75"
        >
          Premium tools for instant pricing, seamless swaps, and next‑gen blockchain utilities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a href="#converter" className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Convert Crypto</span>
          </a>
          <a href="#features" className="group inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:text-white hover:border-purple-500/60 transition-colors">
            Get Started
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/70"
        >
          {[
            ['<1s', 'Live Prices'],
            ['Zero', 'Hidden Fees'],
            ['24/7', 'Global Markets'],
            ['Enterprise', 'Security'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4">
              <p className="text-2xl font-bold text-white">{k}</p>
              <p className="text-sm">{v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
