import { useState } from 'react'
import { NextButton } from './next-button'
import { Section1 } from './section-1'
import { Section2 } from './section-2'
import styles from './styles.module.scss'
import { Submit } from './submit'
import { Submitted } from './submitted'

export const Questionnaire = () => {
  const [view, setView] = useState('section-1')

  return (
    <div className={styles.container}>
      {view === 'section-1' && <Section1 />}
      {view === 'section-2' && <Section2 />}
      {view === 'submit' && <Submit />}
      {view === 'submitted' && <Submitted />}
      <NextButton view={view} setView={setView} />
    </div>
  )
}
