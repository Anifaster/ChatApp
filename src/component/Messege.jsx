import React from 'react'
import { auth } from '../firebase'
import './cnt.css'
const style = {
    message:`flex items-center shadow-xl m-4 py-4 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    recieved: `bg-[#e5e5ea] text-black float-left rounded-br-full`
}
const Messege = ({message}) => {
    const messageClass =
    message.uid === auth.currentUser.uid
    ? `${style.sent}`
    : `${style.recieved}`
  return (
    <div className='cnt'>
      <div className={`${style.message} ${messageClass}`}>
        <h4 className={style.name}>{message.name}</h4>
        <p>{message.text}</p>
      </div>
    </div>
  )
}

export default Messege
