import { motion } from 'framer-motion'
import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-0 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-extrabold tracking-tight">RoyalX</p>
            <p className="mt-2 text-white/70">Futuristic crypto experiences engineered for speed and security.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-white/90">Links</p>
              <ul className="mt-3 space-y-2 text-white/70">
                {['Home','Services','Docs','API','Pricing','Contact','Privacy Policy'].map(l => (
                  <li key={l}><a href="#" className="hover:text-white hover:underline">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white/90">Follow</p>
              <div className="mt-3 flex items-center gap-3">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="group rounded-full p-2 border border-white/10 hover:border-purple-500/60 transition-colors">
                    <Icon className="h-5 w-5 text-white/80 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:text-right md:self-end text-white/60">© {new Date().getFullYear()} RoyalX. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
