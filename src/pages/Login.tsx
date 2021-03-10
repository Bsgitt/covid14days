import { IonButton, IonContent, IonFooter, IonHeader, IonImg, IonInput, IonItem, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { userLogin } from '../firebase.config'
import { Link, useHistory } from 'react-router-dom'
import { toast } from './toast'
import { setUserState } from '../redux/actions'
import { useDispatch } from 'react-redux'
const Login: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  async function login() {
    setBusy(true)
    const res :any = await userLogin(username, password)
    if (res) {
      dispatch(setUserState(res.user.email))
      history.replace('/home')
      toast('YOU HAVE LOGIN !')
      console.log(res)
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
          <IonInput placeholder="Username" type="text" onIonChange={(e: any) => setUserName(e.target.value)} />

        </IonItem>
        <IonItem>
          <IonInput placeholder="password" type="password" onIonChange={(e: any) => setPassword(e.target.value)} />

        </IonItem>

        <IonButton onClick={login} expand="block" fill="solid">Log In</IonButton>
        <p>New Account?  <Link to="/register">register</Link></p>

      </IonContent>

    </IonPage>
  )

}

export default Login