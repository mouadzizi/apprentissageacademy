import {auth} from './firebase'

export const signUp = async (email,password)=>{
   const userCred=  await auth.createUserWithEmailAndPassword(email,password)

   return userCred;
}

export const signIn = async(email,password)=>{
   const userCred = await auth.signInWithEmailAndPassword(email,password)
   
   return userCred;
}