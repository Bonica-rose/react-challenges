import { useState } from "react"
import Button from "./components/Button"
import Counter from "./challenges/usestate/Counter"
import Registration from "./challenges/forms/Registration"
import Login from "./challenges/forms/Login"
import Contact from "./challenges/forms/Contact"

const App = () => {

  const [activeToken, setActiveToken] = useState("counter")

  const components = {
    counter: <Counter />,
    register: <Registration />,
    login: <Login />,
    contact: <Contact />

  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

      <h1 className="text-3xl font-bold text-center">Welcome to React Challenges!</h1>

      <div className="mt-4 flex space-x-4">

        <Button
          type="button"
          buttonFor="Counter"
          token="counter"
          activeToken={activeToken}
          setActiveToken={setActiveToken}
        />

        <Button
          type="button"
          buttonFor="Registration Form"
          token="register"
          activeToken={activeToken}
          setActiveToken={setActiveToken}
        />

        <Button
          type="button"
          buttonFor="Login Form"
          token="login"
          activeToken={activeToken}
          setActiveToken={setActiveToken}
        />

        <Button
          type="button"
          buttonFor="Contact Form"
          token="contact"
          activeToken={activeToken}
          setActiveToken={setActiveToken}
        />

      </div>

      <div className="mt-10">
        {components[activeToken]}
      </div>
    </div>
  )
}

export default App
