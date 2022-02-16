import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { SingleChoiceQuestion } from '../../../components/single-choice-question'
import { NumberQuestion } from '../../../components/number-question'
import { section2State } from '../../../store/questionnaire'
import styles from '../styles.module.scss'

export const Section2 = () => {
  const [answers, setAnswers] = useRecoilState(section2State)

  const onAnswerChange = useCallback(
    question => answer => {
      setAnswers(prevAnswers => ({ ...prevAnswers, [question]: answer }))
    },
    [setAnswers]
  )

  return (
    <div className={styles.section}>
      <SingleChoiceQuestion
        questionTitle='Did you have an investment?'
        choices={['yes', 'no']}
        onChange={onAnswerChange('question-1')}
      />
      <NumberQuestion
        disabled={answers['question-1'] !== 'yes'}
        questionTitle='how much was the investment?'
        onChange={onAnswerChange('question-2')}
      />
    </div>
  )
}
