'use client'

import Link from "next/link"
import { GithubIcon, TwitterIcon, YoutubeIcon } from "@/components/social-icons"

const settings = {
  links: [
    { title: 'About', href: '/' },
    { title: 'Blog', href: '/' },
    { title: 'Jobs', href: '/' },
    { title: 'Press', href: '/' },
    { title: 'Affiliate', href: '/' },
    { title: 'Contact Us', href: '/' },
  ],
  socialMedia: [
    { title: 'Twitter', icon: TwitterIcon, href: '/' },
    { title: 'Github', icon: GithubIcon, href: '/' },
    { title: 'Youtube', icon: YoutubeIcon, href: '/' },
  ],
  copyright: `© ${new Date().getFullYear()} Next SaaS, Inc. All rights reserved.`,
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href} className="hover:text-black transition-colors">
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.socialMedia.map((s, i) => (
          <Link key={i} title={s.title} href={s.href} className="hover:text-black transition-colors">
            <s.icon size={20} />
          </Link>
        ))}
      </div>

      <p className="text-center">{settings.copyright}</p>
    </footer>
  )
}
