import { memo } from 'react'
import Form from 'react-bootstrap/Form'

export const NumberQuestion = memo(
  ({ questionTitle = '', onChange, disabled = false }) => {
    return (
      <div>
        <h5>{questionTitle}</h5>
        <Form.Control
          min={0}
          disabled={disabled}
          onChange={event => onChange(event.target.value)}
          type='number'
        />
      </div>
    )
  }
)
