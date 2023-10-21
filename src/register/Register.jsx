import React, { useState } from 'react'
import "./Register.css"
import Confetti from 'react-confetti'
// import {BsTelegram} from 'react-icons/bs'
import { BiUserPin } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [fullname, setFullname] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [branch, setBranch] = useState("")
  const [daytime, setDaytime] = useState("")
  const [teachername, setTeachername] = useState()
  const [confetti, setconfetti] = useState(false)

  let width = window.innerWidth
  let heigh = window.innerHeight

  function sendToTG(e) {
    e.preventDefault()

    let message = `Full name: ${fullname} %0APhone number: ${phonenumber}  %0ABranch:${branch} %0Adaytime: ${daytime} %0Ateachername: ${teachername}`

    let token = '6909865165:AAFz3-4bVbj5-Q0yoNhr1Rsga6q0si0dPxg'
    let chat_id = '-1002058773887'
    let url = `https://api.telegram.org/bot${token}/sendmessage?chat_id=${chat_id}&text=${message}`
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    setFullname('')
    setPhonenumber('')
    setBranch('')
    setDaytime('')
    setTeachername('')


    setconfetti(true)

    setTimeout(() => {
      setconfetti(false)
    }, 4000);

    toast.success("Ro'yhatdan Muvaffaqiyatli o'tdingiz!");


  }
  return (
    <div className='register' >
      {confetti && <Confetti
        width={width}
        height={heigh}
        numberOfPieces={700}
        friction={1}
      />}
      <form id='form' onSubmit={sendToTG}>
        <h3>Registration</h3>
        <input type="text" required value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder='Ism Familiya' />
        <input type="number" required value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder='99 226 23 23' />
        <input type="text" required value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="O'quv binosi" />
        <input type="text" required value={daytime} onChange={(e) => setDaytime(e.target.value)} placeholder='Kuni Vaqti Darajasi' />
        <input type="text" required value={teachername} onChange={(e) => setTeachername(e.target.value)} placeholder="O'qituvchi Ismi" />
        <button className='btn_form' type='submit'  >Register</button>
        <ToastContainer position='bottom-center' />


      </form>

    </div>
  )
}

export default Register