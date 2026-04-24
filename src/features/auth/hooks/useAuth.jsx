import { useNavigate } from "react-router"
import { dispatch } from "../../../app/store/store"
import { loginUser, registerUser } from "../state/authSlice"
import { nanoid } from "nanoid"
import { storage } from "../../../utils/LocalStorage"
import { useRHF } from "../../../shared/hooks/useRHF"
import { useSelector } from "react-redux"


export let useAuth = ()=>{
  let { isAuthenticated, users } = useSelector((store) => store.auth)

  let navigate = useNavigate()
  let {reset} = useRHF()

    let handleLoginSubmit = (data)=>{
      const storedUsers = storage.get('users') || []
      const allUsers = users.length ? users : storedUsers
      const foundUser = allUsers.find((elem)=>elem.email === data.email && elem.password === data.password)
       if (foundUser) {
      dispatch(loginUser(foundUser));
      storage.set("loggedInUser", foundUser);
      navigate("/");
      reset();
    } else {
      alert("Invalid email or password");
    }
    }

    let handleRegisterSubmit = (data)=>{
     const isExists = users.find((elem)=>elem.email === data.email)
     if(isExists){
      alert("user already exists")
     }else{
      let NewUser = {...data , id:nanoid()}
      dispatch(registerUser(NewUser))
      const updatedUser = [...users , NewUser]
      alert("user registered")
      storage.set("users",updatedUser)
      navigate('/')
      reset()
     }
    }

    return{
      handleLoginSubmit,
      handleRegisterSubmit,
      isAuthenticated,
      navigate
    }
}