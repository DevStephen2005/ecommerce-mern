import { createContext, useReducer } from "react"
import CartReducer from "./CartReducer"

export const cartContext = createContext()

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {

    const [cart,dispatch] = useReducer(CartReducer,[])

  return (
    <div>
      <cartContext.Provider value={{cart,dispatch}} >
        {children}
      </cartContext.Provider>
    </div>
  )
}

export default ContextProvider