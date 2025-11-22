import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 300, ...props }: AnimatedListProps) => {
    const [visibleItems, setVisibleItems] = useState<React.ReactNode[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      setVisibleItems([]) // Reset ao mudar os children
      const intervals: NodeJS.Timeout[] = []
      
      childrenArray.forEach((child, index) => {
        const timeout = setTimeout(() => {
          setVisibleItems((prev) => {
            const newItems = [...prev, child]
            
            // Auto-scroll para o último item após atualizar o estado
            requestAnimationFrame(() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({
                  top: containerRef.current.scrollHeight,
                  behavior: 'smooth'
                })
              }
            })
            
            return newItems
          })
        }, index * delay)
        
        intervals.push(timeout)
      })

      return () => {
        intervals.forEach(clearTimeout)
      }
    }, [childrenArray, delay])

    return (
      <div
        ref={containerRef}
        className={cn(`flex flex-col gap-2 sm:gap-3 overflow-y-auto hide-scrollbar`, className)}
        style={{ maxHeight: '100%' }}
        {...props}
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.div
              key={(item as React.ReactElement).key || `item-${index}`}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: 0,
              }}
              layout
              className="w-full"
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
