import { motion } from 'framer-motion'
import { ChevronDown, Star, Quote } from 'lucide-react'
import { useState } from 'react'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} px-4 md:px-6`}>
        <div className="overflow-hidden text-white/70 pb-4">{a}</div>
      </div>
    </div>
  )
}

export default function Extras() {
  return (
    <>
      {/* About */}
      <section id="about" className="relative bg-black text-white py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <h2 className="text-3xl md:text-5xl font-extrabold">Why Choose Us</h2>
            <p className="mt-4 text-white/70">We craft premium, production‑grade crypto tools focused on speed, security, and elegance. From real‑time market data to institutional custodial flows, every pixel is engineered for performance.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              {['Bank‑level compliance','Ultra‑low latency APIs','Transparent fees','24/7 global coverage'].map(t => (
                <li key={t} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-purple-500" /> {t}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_60px_rgba(133,0,255,0.25)]">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-700" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-purple-600/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative bg-[#07010e] text-white py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold text-center">Features</motion.h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-purple-600/0 to-fuchsia-600/0 hover:from-purple-600/10 hover:to-fuchsia-600/10" />
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-xl bg-black/50 border border-white/10" />
                  <h3 className="mt-4 text-lg font-semibold">Premium Capability {i+1}</h3>
                  <p className="mt-1 text-white/70">Designed with 3D floating elements and micro‑interactions for a futuristic feel.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative bg-black text-white py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold text-center">Loved by users</motion.h2>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
            {['Blazing fast and reliable','The UI feels truly premium','My go‑to crypto toolset','Insanely smooth animations'].map((t,i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="snap-center min-w-[320px] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600" />
                  <div>
                    <p className="font-semibold">User {i+1}</p>
                    <div className="flex text-yellow-400">
                      {Array.from({length:5}).map((_,s)=>(<Star key={s} className="h-4 w-4 fill-current" />))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/80 leading-relaxed">“{t}.”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-[#07010e] text-white py-24">
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold text-center">FAQ</motion.h2>
          <div className="mt-10 space-y-4">
            {[
              { q: 'How do conversions work?', a: 'We fetch institutional‑grade pricing and route orders through low‑latency providers.' },
              { q: 'Which regions do you support?', a: 'We operate globally with compliance‑first practices across major jurisdictions.' },
              { q: 'Do you provide an API?', a: 'Yes, developers can access real‑time prices, quotes, and historical charts.' },
              { q: 'Are there fees?', a: 'Our pricing is transparent. No hidden fees, ever.' },
            ].map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative bg-black text-white py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold text-center">Roadmap</motion.h2>
          <div className="mt-10 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
            {['Q1: Price engine','Q2: Wallet suite','Q3: Pro analytics','Q4: Global launch'].map((t,i)=> (
              <div key={i} className={`relative flex items-center ${i%2? 'justify-start':'justify-end'} py-6`}> 
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600"></div>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="w-1/2 px-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <p className="font-semibold">{t}</p>
                    <p className="text-white/70">Futuristic timeline animation with premium milestones.</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="relative bg-[#07010e] text-white py-24">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold">Stay in the loop</motion.h2>
          <p className="mt-3 text-white/70">Subscribe for product updates, new features, and market insights.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <div className="relative flex-1 min-w-[240px]">
              <input type="email" placeholder="you@domain.com" className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none focus:border-purple-500/70" />
              <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(133,0,255,0.35)]" />
            </div>
            <button type="button" className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-600 before:to-fuchsia-600 before:opacity-80 before:blur-md"><span className="relative z-10">Subscribe</span></button>
          </form>
        </div>
      </section>
    </>
  )
}
