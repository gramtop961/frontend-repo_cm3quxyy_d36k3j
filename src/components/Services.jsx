import { motion } from 'framer-motion'
import { Shield, Zap, Wallet, Layers, LineChart, Code2 } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Instant Crypto Conversion', desc: 'Live pricing with lightning execution and zero hidden fees.' },
  { icon: Shield, title: 'Secure Wallet Tools', desc: 'Enterprise‑grade security and hardware wallet support.' },
  { icon: Wallet, title: 'Fast Transactions', desc: 'Optimized routes to minimize slippage and network costs.' },
  { icon: Layers, title: 'Web3 Integrations', desc: 'Plug‑and‑play with leading chains and DeFi protocols.' },
  { icon: LineChart, title: 'Portfolio Tracking', desc: 'Unified analytics with real‑time market insights.' },
  { icon: Code2, title: 'API for Developers', desc: 'Powerful endpoints for quotes, prices, and historical data.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#08010f] text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold text-center">Services</motion.h2>
        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">Premium Web3 infrastructure wrapped in a beautiful interface.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:scale-[1.02] transition-transform">
              <div className="absolute -inset-px bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/10 group-hover:to-fuchsia-600/10 rounded-2xl" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="rounded-xl bg-black/50 p-3 border border-white/10">
                  <it.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
