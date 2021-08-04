import { useRef, forwardRef } from 'react'
import './SingleInput.css'

export const SingleInput = forwardRef((props, ref) => {
  const isValid = useRef(null)

  const onChange = (e) => {
    const valid = e.target.validity.valid
    isValid.current = valid
    props.onChange(e)
  }
  return (
    <>
      <input {...props} onChange={onChange} ref={ref} />
      {isValid.current === null || isValid.current ? null : <p>{props.erroremessage}</p>}
    </>
  )
})