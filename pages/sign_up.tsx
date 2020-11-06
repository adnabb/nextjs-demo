import axios from "axios";
import { NextPage } from "next";
import { useCallback, useState } from "react";

const SignUp: NextPage = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  })
  const [errors, setErrors] = useState({
    username: [],
    password:[],
    passwordConfirm: []
  })
  const onSubmit = useCallback((e) => {
    e.preventDefault()
    console.log('提交')
    axios.post('/api/v1/user', formData).then((res) => {
      console.log(res)
    }, (error) => {
      // csy:todo 加入拦截器
      console.log('error', error.response)
      const {response} = error
      if (response.status === 422) {
        setErrors(response.data)
      }
    })
  }, [formData])
  
  return (
    <>
      <form onSubmit={onSubmit} method="post">
        <div>
          <label>用户名：
            <input type="text" name="username" id="username" onChange={(e) => setFormData({
              ...formData,
              username: e.target.value
            })} />
          </label>
          {errors.username.length ? <div>{errors.username.join('，')}</div> : ''}
        </div>
        <div>
          <label>密码：
            <input type="password" name="password" onChange={(e) => setFormData({
              ...formData,
              password: e.target.value
            })}/>
          </label>
          {errors.password.length ? <div>{errors.password.join('，')}</div> : ''}
        </div>
        <div>
          <label>确认密码：
            <input type="password" name="passwordConfirm" onChange={(e) => setFormData({
              ...formData,
              passwordConfirm: e.target.value
            })}/>
          </label>
          {errors.passwordConfirm.length ? <div>{errors.passwordConfirm.join('，')}</div> : ''}
        </div>
        <div>
          <button type="submit">注册</button>
        </div>
      </form>
    </>
  )
}

export default SignUp