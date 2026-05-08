'use client'

import SlideEffect from "@/components/slide-effect"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const settings = {
  title: 'Frequently asked questions',
  faqs: [
    { question: 'Is there a free trial available?', answer: 'Yes! You get a full 30-day free trial with no credit card required. You can explore all features without any commitment.' },
    { question: 'Do I need to add a cookie banner?', answer: 'No. Our analytics are cookie-free and fully GDPR-compliant, so you never need to show a cookie consent banner to your visitors.' },
    { question: 'Can I import data from Google Analytics?', answer: 'Absolutely. You can import your historical data from Google Analytics, Plausible, or Fathom in just a few clicks to continue where you left off.' },
    { question: 'Where is my data hosted?', answer: 'All data is hosted on a secure server cluster in Europe, ensuring it stays under GDPR jurisdiction at all times.' },
    { question: 'Can I share my dashboard with clients?', answer: 'Yes. You can create unique access links to share dashboards securely with external partners, or make them public on a personal subdomain.' },
  ],
}

export default function FAQ() {
  return (
    <div id="faq" className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-linear-to-b from-black to-black/60 font-medium leading-none">
          {settings.title}
        </h2>
      </SlideEffect>

      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}
