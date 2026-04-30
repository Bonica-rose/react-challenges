import { useState } from 'react'

const Contact = () => {

  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')    

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = { username, phone, message }
    console.log(formData)
    alert('Form submitted successfully')
  }


  return (
    <div className='min-screen flex items-center justify-center bg-gray-100'>      
      <form onSubmit={handleFormSubmit} className='bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-5'>
        <h2 className="font-bold text-2xl text-center">Contact Form</h2>
        <div className='mb-4'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name='username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            autoComplete='off'
          />
        </div>
        
        <div className='mb-4'>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name='phone'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required autoComplete='off'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor="message">Message</label>
          <textarea
            name='message'
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required autoComplete='off' rows={3}>            
          </textarea>
        </div>

        <button type='submit' className='bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact