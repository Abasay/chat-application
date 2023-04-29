import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {
  const handleLogout = () => {
    localStorage.setItem('username', '')
    localStorage.setItem('password', '')

    window.location.reload()
  }
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID='
394c0552-b2c8-499b-a85a-503b31649c8f'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      <div>
        <button
          type='button'
          className='button'
          onClick={handleLogout}
          style={{
            background: 'rgb(240, 240, 240)',
            overflow: 'hidden',
            marginTop: '0px',
            width: '99.4%',
            marginBottom: '0px',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default App
