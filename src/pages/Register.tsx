import { IonLoading, IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { registerUser } from '../firebase.config'
import { Link } from 'react-router-dom'
import { toast } from './toast'
const Register: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  async function register() {
    setBusy(true)
    if (password !== cpassword) {
      return toast('your password not match')
    }
    if (username.trim() === '' || password.trim() === '') {
      return toast('username  and password is required')
    }
    const res = await registerUser(username, password)
    if (res) {
      toast('You have register successfully')
    }
    setBusy(false)
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
      <IonLoading message="please wait.." duration={1} isOpen={busy} />

        <IonInput type="text" placeholder="Username or Email" onIonChange={(e: any) => setUserName(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonInput type="password" placeholder="ConfirmPassword" onIonChange={(e: any) => setCPassword(e.target.value)} />

        <IonButton onClick={register} expand="block" routerLink="/login" fill="outline">Register</IonButton>
        <p>Already have an Account ?  <Link to="/login">Login</Link></p>

      </IonContent>

    </IonPage>
  )

}

export default Register