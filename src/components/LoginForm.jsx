import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const authObject = {
      'Project-ID': '394c0552-b2c8-499b-a85a-503b31649c8f',
      'User-Name': username,
      'User-Secret': password,
    }
    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      })

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
    } catch (error) {
      setError('Please enter the correct username and password ...')
    }
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
            placeholder='Enter your username ...'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='Enter your password ...'
          />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Login</span>
            </button>
          </div>
          <h4 className='error' style={{ color: 'red' }}>
            <em>{error}</em>
          </h4>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
