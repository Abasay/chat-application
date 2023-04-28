import React from 'react'
import { useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'

const MessageForm = (props) => {
  const [value, setValue] = useState('')
  const { chatId, creds } = props

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = value.trim()

    if (text.length > 0) sendMessage(creds, chatId, { text })

    setValue('')
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    isTyping(props, chatId)
  }

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.value, text: '' })
  }
  return (
    <form action='' className='message-form' onSubmit={handleSubmit}>
      <input
        className='message-input'
        placeholder='Type your message ...'
        value={value}
        onChange={handleChange}
      />
      <label htmlFor='upload-button'>
        <span className='image-button'>
          <PictureOutlined className='picture-icon' />
        </span>
      </label>
      <input
        type='file'
        multiple={false}
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button type='submit' className='send-icon'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
  )
}

export default MessageForm
