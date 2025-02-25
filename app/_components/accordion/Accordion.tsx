import { useTranslations } from 'next-intl'
import { Text } from '@/app/_components'

export const Accordion = () => {
  const t = useTranslations('HomePage.faq')
  
  // Create an array of question numbers
  const questionCount = 6
  const questions = Array.from({ length: questionCount }, (_, i) => i + 1)

  return (
    <>
      {questions.map((num) => (
        <div key={num} className="collapse collapse-arrow border-2 border-gray-600">
          <input 
            type="radio" 
            name="my-accordion-2" 
            defaultChecked={num === 1} 
          />
          <Text 
            variant="h3" 
            size="lg" 
            className="collapse-title font-bold"
          >
            {t(`question${num}`)}
          </Text>
          <div className="collapse-content">
            <Text variant="p" size="lg">
              {t(`answer${num}`)}
            </Text>
          </div>
        </div>
      ))}
    </>
  )
}
