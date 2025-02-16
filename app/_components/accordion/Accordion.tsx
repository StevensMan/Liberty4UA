import { useTranslations } from 'next-intl'

export const Accordion = () => {
  const t = useTranslations('HomePage.faq')

  return (
    <>
      <div className="collapse collapse-arrow border-2 border-gray-600">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <h4 className="collapse-title text-2xl font-bold md:text-4xl">
          {t('question1')}
        </h4>
        <div className="collapse-content text-lg md:text-2xl">
          <p>{t('answer1')}</p>
        </div>
      </div>
      {/* <div className="collapse collapse-arrow border-2 border-gray-600">
        <input type="radio" name="my-accordion-2" />
        <h4 className="collapse-title text-2xl font-bold md:text-4xl">
          {t('question2')}
        </h4>
        <div className="collapse-content text-lg md:text-2xl">
          <p>{t('answer2')}</p>
        </div>
      </div> */}
      <div className="collapse collapse-arrow border-2 border-gray-600">
        <input type="radio" name="my-accordion-2" />
        <h4 className="collapse-title text-2xl font-bold md:text-4xl">
          {t('question3')}
        </h4>
        <div className="xs:text-lg collapse-content text-base md:text-2xl">
          <p>{t('answer3')}</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 border-gray-600">
        <input type="radio" name="my-accordion-2" />
        <h4 className="collapse-title text-2xl font-bold md:text-4xl">
          {t('question4')}
        </h4>
        <div className="xs:text-lg collapse-content text-base md:text-2xl">
          <p>{t('answer4')}</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 border-gray-600">
        <input type="radio" name="my-accordion-2" />
        <h4 className="collapse-title text-2xl font-bold md:text-4xl">
          {t('question5')}
        </h4>
        <div className="xs:text-lg collapse-content text-base md:text-2xl">
          <p>{t('answer5')}</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 border-gray-600">
        <input type="radio" name="my-accordion-2" />
        <h4 className="collapse-title text-2xl font-bold md:text-4xl">
          {t('question6')}
        </h4>
        <div className="xs:text-lg collapse-content text-base md:text-2xl">
          <p>{t('answer6')}</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 border-gray-600">
        <input type="radio" name="my-accordion-2" />
        <h4 className="collapse-title text-2xl font-bold md:text-4xl">
          {t('question7')}
        </h4>
        <div className="xs:text-lg collapse-content text-base md:text-2xl">
          <p>{t('answer7')}</p>
        </div>
      </div>
    </>
  )
}
