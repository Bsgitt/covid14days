import { IonImg, IonLabel, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonApp } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {logoutUser} from '../firebase.config'
const Home: React.FC = () => {
    const history = useHistory()
    const username = useSelector((state:any) => state.user.username)
    async function logout(){
        await logoutUser()
        history.replace('/')
    }
    return (
        <IonApp>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Covid 14 Days </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonContent>
                        
                        <IonContent fullscreen>
                            <IonCard >
                                <IonImg src="./assets/img-info-1.svg" />
                            </IonCard>
                            <IonButton routerLink="/stat" expand="block" color='success'>STATISTICS</IonButton>
                            <IonButton routerLink="/report" expand="block">บันทึกประจำวัน</IonButton>
                            <IonButton expand='block' color='dark' fill='outline' onClick={logout} >ลงชื่อออก</IonButton>
                        </IonContent>
                    </IonContent>
                </IonContent>
            </IonPage>
        </IonApp>
    )

}

export default Home