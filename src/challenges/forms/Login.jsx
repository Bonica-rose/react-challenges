import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Login = () => {

    let loginSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Email is invalid').required('Email is required'),
        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data) => {
        console.log(data);
        alert('Form submitted successfully')
    }

    return (
        <>
            <div className='w-full max-w-xs mx-auto mt-2'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
                        <input
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            {...register('name')}
                        />
                        {errors.name && <p style={{ color: 'red', fontStyle: 'italic' }}>{ errors.name.message }</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                        <input 
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            {...register('email')}
                        />
                        {errors.email && <p className='text-red-500 italic'>{ errors.email.message }</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                        <input 
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type='password'
                            {...register('password')}
                        />
                        {errors.password && <p className='text-red-500 italic'>{ errors.password.message }</p>}
                    </div>

                    <div className='flex items-center justify-between'>
                        <button
                            className='bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'
                        >Sign In</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login