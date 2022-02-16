import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Button onClick={() => navigate('/questionnaire')}>
        Generate Business Plan
      </Button>
    </div>
  )
}
