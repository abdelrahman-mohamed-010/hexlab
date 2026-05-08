import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const fadeEffectVariants = cva(
  'absolute w-full h-1/3 bottom-0 left-0 from-transparent to-white z-50',
  {
    variants: {
      direction: { up: 'bg-linear-to-t', down: 'bg-linear-to-b', left: 'bg-linear-to-l', right: 'bg-linear-to-r' },
      color: { white: 'to-white', black: 'to-black', transparent: 'to-transparent', primary: 'to-primary', secondary: 'to-secondary' },
      position: { top: 'top-0', bottom: 'bottom-0', left: 'left-0', right: 'right-0' },
    },
    defaultVariants: { color: 'white', direction: 'down', position: 'bottom' },
  }
)

export default function FadeEffect({
  direction, color, className, position, ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fadeEffectVariants>) {
  return (
    <div className={cn(fadeEffectVariants({ direction, color, position, className }))} {...props} />
  )
}
