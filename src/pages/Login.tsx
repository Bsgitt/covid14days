import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React,{useEffect, useState} from 'react'
import { userLogin } from '../firebase.config'
import{Link} from 'react-router-dom'
import { toast } from './toast'
const Login: React.FC=()=>{
  const [busy ,setBusy] = useState<boolean>(false)
  const [username ,setUserName] = useState('')
  const [password ,setPassword] = useState('')
  async function login(){
     const res = await userLogin (username,password) 
     setBusy(true)
     if(res){
      toast('YOU HAVE LOGIN !')
     }
     setBusy(false)
  }

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonLoading message="please wait.." duration={0} isOpen={busy}/>

       <IonInput placeholder="Username or Email" onIonChange={(e:any) =>setUserName(e.target.value)}/>
       <IonInput placeholder="password" onIonChange={(e:any) =>setPassword(e.target.value)}/>
       
       <IonButton  onClick={login} expand="block" routerLink="/home" fill="outline">Log In</IonButton>
       <p>New Account?  <Link to="/register">register</Link></p>

      </IonContent>

    </IonPage>
  )

}

export default Login