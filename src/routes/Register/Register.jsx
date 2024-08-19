import React, { useState } from 'react'

import './Register.css'
import axios, { Axios } from 'axios'


export default function Register() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [mailSent, setMailSent] = useState(false);

  const sumbitEmail = async (e) => {
    e.preventDefault()
    alert("Registration successfully done! You will receive the Coca-Cola formula soon! =D")

    const name = firstName + ' ' + lastName;

    try {
      const response = await axios.post("http://localhost:8081/users", { name, email })

      if (response.status == 201) {
        setMailSent(true)
        setTimeout(() => {
          setMailSent(false)
        }, 5000);
      }
    } catch (e) {

    }

  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div onSubmit={sumbitEmail} className="Register">
      <form action="" className='Register__Form'>
        <p className='Title'>Register your e-mail and receive the Coca-Cola formula, but keep it a secret! =D</p>
        <p className='SubTitle'>This is a project created to learn about: Microservices, Jest, Junit and Jenkins(CI/CD) </p>
        <div className="Name__Container">
          <label>
            Enter your First Name
            <input type="text" placeholder='e.g. Hendrik' value={firstName} onChange={handleFirstNameChange} />
          </label>
          <label>
            Enter your Last Name
            <input type="text" placeholder='e.g. Lelis' value={lastName} onChange={handleLastNameChange} />
          </label>
        </div>
        <label>
          Enter your email
          <input type="email" placeholder='e.g. hendrik.lelis@icloud.com' value={email} onChange={handleEmailChange} />
        </label>
        <button type='submit' className={mailSent ? 'Sent' : ''} disabled={mailSent}>{mailSent ? "Formula Requested" : "Request the formula!"}</button>
      </form>
    </div>
  )
}
