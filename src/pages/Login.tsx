import { IonButton, IonContent, IonFooter, IonHeader, IonImg, IonInput, IonItem, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { userLogin } from '../firebase.config'
import { Link } from 'react-router-dom'
import { toast } from './toast'
import { object, string } from 'yup';
const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  async function login() {
    const res = await userLogin(username, password)
    setBusy(true)
    if (res) {
      toast('YOU HAVE LOGIN !')
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonImg src="./assets/login.svg" />

        <IonLoading message="please wait.." duration={0} isOpen={busy} />
        <IonItem>
          <IonInput placeholder="Username or Email" type="email" onIonChange={(e: any) => setUserName(e.target.value)} />

        </IonItem>
        <IonItem>
          <IonInput placeholder="password" type="password" onIonChange={(e: any) => setPassword(e.target.value)} />

        </IonItem>

        <IonButton onClick={login} expand="block" routerLink="/home" fill="solid">Log In</IonButton>
        <p>New Account?  <Link to="/register">register</Link></p>

      </IonContent>

    </IonPage>
  )

}

export default Login