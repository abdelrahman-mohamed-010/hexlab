'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, X } from "lucide-react"
import { AnimatePresence } from 'motion/react'
import * as motion from "motion/react-m"
import { useState } from "react"

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'features', href: '#features' },
  { name: 'pricing', href: '#pricing' },
  { name: 'testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
]

const cta = { content: 'try it for free', href: '/' }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full h-fit py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" title="Home" className="text-black font-semibold text-xl tracking-tight">
        nextsaas
      </Link>

      {/* Desktop */}
      <div className="items-center justify-center gap-5 hidden md:flex">
        <ul className="flex items-center justify-center gap-5 text-black font-medium select-none text-link">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="hover:opacity-80 transition-all capitalize">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={cta.href}>
          <Button className="capitalize">{cta.content}</Button>
        </Link>
      </div>

      {/* Mobile burger */}
      <motion.div
        initial={{ scale: 1, y: 0 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-none flex md:hidden cursor-pointer text-black"
        onClick={() => setIsOpen(o => !o)}
      >
        {isOpen ? <X size={20} /> : <AlignJustify size={20} />}
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1, y: -20 }}
            animate={{ height: '100vh', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 1, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed flex flex-col md:hidden top-16 left-0 w-full bg-white z-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <ul className="flex flex-col space-y-2 text-black font-medium select-none text-base">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} onClick={() => setIsOpen(false)} className="block py-2 capitalize">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={cta.href} onClick={() => setIsOpen(false)}>
                <Button className="w-full capitalize">{cta.content}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
