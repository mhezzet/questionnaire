import { memo } from 'react'
import Form from 'react-bootstrap/Form'

export const SingleChoiceQuestion = memo(
  ({ questionTitle = '', choices = [], onChange }) => {
    return (
      <div>
        <h5>{questionTitle}</h5>
        {choices.map(choice => (
          <Form.Check
            key={choice}
            type='radio'
            name={questionTitle}
            value={choice}
            id={`${questionTitle}-${choice}`}
            label={choice}
            onChange={event => onChange(event.target.value)}
          />
        ))}
      </div>
    )
  }
)
