import { useRecoilValue } from 'recoil'
import styles from '../styles.module.scss'
import { section2State, section1State } from '../../../store/questionnaire'

export const Submit = () => {
  const section1Answers = useRecoilValue(section1State)
  const section2Answers = useRecoilValue(section2State)

  return (
    <div className={styles.section}>
      <div>
        <h5>Is your business model B2C or B2B or both?</h5>
        <p>{section1Answers['question-1']}</p>
      </div>
      {section1Answers['question-2'] && (
        <div>
          <h5>Do you target all age brackets?</h5>
          <p>{section1Answers['question-2']}</p>
        </div>
      )}
      {section1Answers['question-3'] && (
        <div>
          <h5>Do you target all industries?</h5>
          <p>{section1Answers['question-3']}</p>
        </div>
      )}
      {section2Answers['question-1'] && (
        <div>
          <h5>Did you have an investment?</h5>
          <p>{section2Answers['question-1']}</p>
        </div>
      )}
      {section2Answers['question-1'] === 'yes' && (
        <div>
          <h5>how much was the investment?</h5>
          <p>{section2Answers['question-2']}</p>
        </div>
      )}
    </div>
  )
}
