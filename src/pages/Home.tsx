import { IonImg, IonLabel, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React, { useEffect, useState } from 'react'

const Home: React.FC = () => {
    const [data,setData] = useState({})
    const [isLoading,setIsLoading] =useState(true)
   
    useEffect(() => {
        fetch(
            `https://covid19.th-stat.com/api/open/today`
        )
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
            setData(data);
            setIsLoading(false);
           
          })
          .catch((err) => console.log(err));
      }, []);
     
    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonToolbar>
                    <IonTitle>Welcom To 14 Days Checking</IonTitle>
                </IonToolbar>
                <IonContent>
                    <IonContent fullscreen>
                    <IonCard >
                       
                        <IonImg src="./assets/img-info-1.svg" />
                    </IonCard>    
                    <IonButton routerLink="/report" expand="block" fill="outline">บันทึกประจำวัน</IonButton>
                    </IonContent>
                    
                </IonContent>
            </IonContent>

        </IonPage>
    )

}

export default Home