import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Registration = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }


    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-5'>
            
                <h2 className="font-bold text-2xl text-center">User Registration Form</h2>
                <p className="text-gray-500 text-sm">Please fill in this form to create an account.</p>

                <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <Input
                        type="text"
                        name='firstName'
                        placeholder='Enter firstName'
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <Input
                        type="text"
                        name='lastName'
                        placeholder='Enter lastName'
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="email"><b>Email</b></label>
                    <Input
                        type="email"
                        name='email'
                        placeholder='Enter email'
                        value={user.email}
                        onChange={handleInputChange}
                        />
                </div>
                
                <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="password"><b>Password</b></label>
                    <Input
                        type="password"
                        name='password'
                        placeholder='Enter password'
                        value={user.password}
                        onChange={handleInputChange}
                    />
                </div>    

                <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="phoneNumber"><b>Phone Number</b></label>
                    <Input
                        type="tel"
                        name='phoneNumber'
                        placeholder='Enter phoneNumber'
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <p className="text-sm text-gray-500">
                    By creating an account you agree to our
                    <a href="#" className="text-blue-500 hover:underline">
                        {" "}Terms & Privacy
                    </a>
                </p>

                <div>
                    <Button type="submit" buttonFor="Sign Up" />
                </div>

            </form>            
        </div>
    )
}

export default Registration