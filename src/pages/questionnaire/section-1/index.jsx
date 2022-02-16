import React, { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { SingleChoiceQuestion } from '../../../components/single-choice-question'
import { section1State } from '../../../store/questionnaire'
import styles from '../styles.module.scss'

export const Section1 = () => {
  const [answers, setAnswers] = useRecoilState(section1State)

  const onAnswerChange = useCallback(
    question => answer => {
      setAnswers(prevAnswers => ({ ...prevAnswers, [question]: answer }))
    },
    [setAnswers]
  )

  const isQuestion1Show = useMemo(
    () => answers['question-1'] === 'B2B' || answers['question-1'] === 'both',
    [answers]
  )

  const isQuestion2Show = useMemo(
    () => answers['question-1'] === 'B2C' || answers['question-1'] === 'both',
    [answers]
  )

  return (
    <div className={styles.section}>
      <SingleChoiceQuestion
        questionTitle='Is your business model B2C or B2B or both?'
        choices={['B2C', 'B2B', 'both']}
        onChange={onAnswerChange('question-1')}
      />
      {isQuestion1Show && (
        <SingleChoiceQuestion
          questionTitle='Do you target all age brackets?'
          choices={['yes', 'no']}
          onChange={onAnswerChange('question-2')}
        />
      )}
      {isQuestion2Show && (
        <SingleChoiceQuestion
          questionTitle='Do you target all industries?'
          choices={['yes', 'no']}
          onChange={onAnswerChange('question-3')}
        />
      )}
    </div>
  )
}
