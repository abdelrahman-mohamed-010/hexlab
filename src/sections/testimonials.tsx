'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const settings = {
  badge: { number: 5, text: 'GOOD COMPANY' },
  title: 'Join Happy Customers',
  description: 'Hundreds of millions of page views for thousands of sites are collected each month — see what our customers have to say.',
  testimonials: [
    { quote: 'The attention to detail and innovative features have completely transformed our workflow. This is exactly what we\'ve been looking for.', name: 'Sarah Chen', designation: 'Product Manager at TechFlow', src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&fit=crop' },
    { quote: 'Implementation was seamless and the results exceeded our expectations. The platform\'s flexibility is remarkable.', name: 'Michael Rodriguez', designation: 'CTO at InnovateSphere', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&fit=crop' },
    { quote: 'This solution has significantly improved our team\'s productivity. The intuitive interface makes complex tasks simple.', name: 'Emily Watson', designation: 'Operations Director at CloudScale', src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=500&fit=crop' },
    { quote: 'Outstanding support and robust features. It\'s rare to find a product that delivers on all its promises.', name: 'James Kim', designation: 'Engineering Lead at DataPro', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&fit=crop' },
    { quote: 'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.', name: 'Lisa Thompson', designation: 'VP of Technology at FutureNet', src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&fit=crop' },
  ],
}

export default function Testimonials() {
  return (
    <div id="testimonials" className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-linear-to-b from-black to-black/60 font-medium leading-normal">
        {settings.title}
      </TextRevealEffect>

      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {settings.description}
      </SlideEffect>

      <SlideEffect>
        <AnimatedTestimonials autoplay testimonials={settings.testimonials} />
      </SlideEffect>
    </div>
  )
}
