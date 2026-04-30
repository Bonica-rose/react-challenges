import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const handleIncrement = () => {
        setCount(prev => prev + step)
    }

    const handleDecrement = () => {
        setCount(prev => prev - step)
    }

    const handleReset = () => {
        setCount(0)
        setStep(1)
    }

    return (
        <>
            <h2 className='text-lg font-bold text-center'>useState: Advanced Counter App</h2>
            <div className='max-w-sm mx-auto mt-6 p-4 border bg-white rounded-lg shadow-md'>
                <p className='mb-4'>Count: <span className='font-bold'>{count}</span></p>
                <div>
                    <label className='block mb-2'>Step: <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} className='border rounded p-1' /></label>
                </div>
                <div className='grid grid-cols-3 gap-2 mt-4'>
                    <button className='border rounded p-2 bg-black text-white disabled:opacity-50' onClick={handleIncrement} disabled={count >= 100 && step > 0}>Increment</button>
                    <button className='border rounded p-2 bg-black text-white disabled:opacity-50' onClick={handleDecrement} disabled={count <= 0 && step > 0}>Decrement</button>
                    <button className='border rounded p-2 bg-black text-white' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter