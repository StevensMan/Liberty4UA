'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Text } from '@/app/_components'
import { cn } from '@/lib/utils'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const Accordion = () => {
  const t = useTranslations('HomePage.faq')
  const [openItem, setOpenItem] = useState(1)
  
  // Create an array of question numbers
  const questionCount = 6
  const questions = Array.from({ length: questionCount }, (_, i) => i + 1)

  const toggleAccordion = (num: number) => {
    setOpenItem(openItem === num ? 0 : num)
  }

  return (
    <div className="flex flex-col gap-4">
      {questions.map((num) => {
        const isOpen = openItem === num
        
        return (
          <div 
            key={num} 
            className={cn(
              "overflow-hidden rounded-lg border border-gray-200 transition-all duration-300",
              isOpen ? "shadow-md" : "hover:border-gray-300 hover:shadow-sm"
            )}
          >
            <button
              onClick={() => toggleAccordion(num)}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left transition-colors",
                isOpen ? "bg-gray-50" : "bg-white"
              )}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${num}`}
            >
              <Text 
                variant="h3" 
                size="md" 
                className={cn(
                  "font-semibold transition-colors",
                  isOpen ? "text-primary" : "text-gray-800"
                )}
              >
                {t(`question${num}`)}
              </Text>
              <div className={cn(
                "flex h-[30px] w-[30px] min-w-[30px] items-center justify-center rounded-full transition-all",
                isOpen ? "bg-primary text-white rotate-0" : "bg-gray-200 text-gray-600 rotate-0"
              )}>
                {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
              </div>
            </button>
            
            <div 
              id={`faq-content-${num}`}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="border-t border-gray-200 px-6 py-4">
                <Text 
                  variant="p" 
                  size="md" 
                  className="text-pretty text-gray-600"
                >
                  {t(`answer${num}`)}
                </Text>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
