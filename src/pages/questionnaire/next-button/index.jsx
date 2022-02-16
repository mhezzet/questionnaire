import { useCallback, useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useRecoilValue } from 'recoil'
import { section1State, section2State } from '../../../store/questionnaire'
import styles from '../styles.module.scss'

export const NextButton = ({ view, setView }) => {
  const section1Answers = useRecoilValue(section1State)
  const section2Answers = useRecoilValue(section2State)
  const [loading, setLoading] = useState(false)

  const isButtonDisabled = useMemo(() => {
    switch (view) {
      case 'section-1':
        return (
          !section1Answers['question-1'] ||
          (section1Answers['question-1'] === 'B2C' &&
            !section1Answers['question-3']) ||
          (section1Answers['question-1'] === 'B2B' &&
            !section1Answers['question-2']) ||
          (section1Answers['question-1'] === 'both' &&
            (!section1Answers['question-3'] || !section1Answers['question-2']))
        )
      case 'section-2':
        return (
          !section2Answers['question-1'] ||
          (section2Answers['question-1'] === 'yes' &&
            !section2Answers['question-2']) ||
          section2Answers['question-2'] < 0
        )
      default:
        return false
    }
  }, [section1Answers, section2Answers, view])

  const onSubmit = useCallback(() => {
    setLoading(true)
    postQuestionnaire({ section1Answers, section2Answers })
      .then(answers => {
        console.log('answers', answers)
        setView('submitted')
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [section1Answers, section2Answers, setView])

  const onClick = useCallback(() => {
    switch (view) {
      case 'section-1':
        setView('section-2')
        break
      case 'section-2':
        setView('submit')
        break
      case 'submit':
        onSubmit()
        break
      default:
        break
    }
  }, [onSubmit, setView, view])

  if (view === 'submitted') return null

  return (
    <Button
      disabled={isButtonDisabled || loading}
      className={styles.next}
      onClick={onClick}
    >
      {loading ? 'Loading...' : view === 'submit' ? 'Submit' : 'Next'}
    </Button>
  )
}

const postQuestionnaire = answers =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(answers)
    }, 500)
  })
