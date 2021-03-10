import { IonImg, IonLabel, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonApp, IonLoading, IonRow, IonCol, IonItemSliding, IonFooter } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { add, settings, share, person, logoVimeo, logoFacebook, logoInstagram, logoTwitter, arrowForward, logOut } from 'ionicons/icons';

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { logoutUser } from '../firebase.config'
const Home: React.FC = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

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

    const history = useHistory()
    const username = useSelector((state: any) => state.user.username)
    async function logout() {
        await logoutUser()
        history.replace('/login')
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

                            <IonTitle>สวัสดีค่ะ คุณ {username}</IonTitle>
                            <IonImg src="./assets/img-info-1.svg" />
                            <IonButton routerLink="/report" expand="block" fill="outline">บันทึกประจำวัน</IonButton>

                            <IonHeader>
                                <IonToolbar color='success'>
                                    <IonTitle >สถิติทั้งหมด</IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <IonContent
                                scrollEvents={true}
                                onIonScrollStart={() => { }}
                                onIonScroll={() => { }}
                                onIonScrollEnd={() => { }}>
                                <div slot="fixed">
                                    <IonLoading message="please wait.." duration={0.1} isOpen={isLoading} />

                                    <IonRow>
                                        <IonCol>
                                            {Object.keys(data).map((item, i) => (
                                                <IonItemSliding key={i}>
                                                    <IonItem>
                                                        <IonLabel>
                                                            <h2>{item}</h2>
                                                            <h3>{data[item]}</h3>
                                                        </IonLabel>
                                                    </IonItem>
                                                </IonItemSliding>
                                            ))}
                                        </IonCol>
                                    </IonRow>
                                </div>
                            </IonContent>
                        </IonContent>
                    </IonContent>

                </IonContent>
                <IonFooter>
                    {/* <IonButton expand='block' color='dark' fill='outline' onClick={logout} >ลงชื่อออก</IonButton> */}
                    {/*-- fab placed to the bottom end --*/}
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton onClick={logout}>
                            <IonIcon icon={logOut} />
                        </IonFabButton>
                    </IonFab>
                </IonFooter>
            </IonPage>
            <IonFooter>
                <IonToolbar>
                    <IonTitle>Footer</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonApp>
    )

}

export default Home