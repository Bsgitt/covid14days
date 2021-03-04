import { IonImg, IonLabel, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonApp } from '@ionic/react'
import React, { useEffect, useState } from 'react'

const Home: React.FC = () => {

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
                        </IonContent>
                    </IonContent>
                </IonContent>
            </IonPage>
        </IonApp>
    )

}

export default Home