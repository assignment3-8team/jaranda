import { useState, useRef } from 'react'
import { SingleInput } from './SingleInput'
const Login = () => {
  const isValid = useRef({})
  const [inputs, setInputs] = useState({
    email : '',
    password : ''
  })

  const onChange = (e) => {
    const name = e.target.name
    setInputs({
      ...inputs,
      [name] : e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let isAllValid = true;
    for (let value of Object.values(isValid.current)) {
      isAllValid = isAllValid && value.validity.valid
    }
    if (isAllValid) {
      setInputs({
        email: '',
        password: ''
      })
    }
  }
  return (
    <form onSubmit={onSubmit} noValidate>
      <SingleInput 
        name="email" 
        onChange={onChange}
        value={inputs.email} 
        placeholder="Email" 
        type="email"
        ref={e => {isValid.current["email"] = e}}
        erroremessage="올바른 이메일을 입력해주세요" 
        required
      />
      <SingleInput 
        ref={e => {isValid.current["password"] = e}}
        name="password" 
        onChange={onChange} 
        value={inputs.password} 
        placeholder="password" 
        type="password" 
        erroremessage="특수문자와 숫자를 조합하여 16자 이내로 만들어주세요"
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$" 
        required
      />
      <button type="submit">로그인</button>
    </form>
  )
}

export { Login }