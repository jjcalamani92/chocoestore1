
import { FC, useReducer, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import Cookies from 'js-cookie';
import axios from 'axios';

import { IUser } from '../../interfaces';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined
}


export const AuthProvider: FC = ({ children }) => {
  // const router = useRouter()
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
	const { data, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      // console.log({user: data?.user});
      dispatch({type: '[Auth] - Login', payload: data?.user as IUser})
    }
  }, [ status, data ])


  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await axios.post(`${process.env.APIU_URL}/api/auth/login`, { email, password })
      const { token, user } = data;
      Cookies.set('token', token);

      dispatch({ type: '[Auth] - Login', payload: user })
      return true
    } catch (error) {
      return false
    }
  }
  
  const registerUser = async (username: string, email: string, password: string): Promise<{hasError: boolean; message ?: string} > => {
  try {
    // const { data } = await axios.post(`${process.env.APIU_URL}/api/user`, { username, email, password })

    const {data} = await axios.post(`${process.env.APIU_URL}/api/user`, { username, email, password })
    dispatch({ type: '[Auth] - Register', payload: { _id: data._id, email: data.email, role: data.role } })
    return {
      hasError: false
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        hasError: true,
        message: error.response?.request
      }

    }
    return {
      hasError: true,
      message: 'No se pudo crear el usuario - intente de nuevo'
    }
    // setShowError(true);
    // setTimeout(() => setShowError(false), 3000)
  }
  }
  const logout = () => {
    signOut();
    // router.push('/')
  }



return (
  <AuthContext.Provider value={{
    ...state,
    loginUser,
    registerUser,
    logout,
  }}>
    {children}
  </AuthContext.Provider>
)
};