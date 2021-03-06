import { IonLabel, IonContent, IonHeader, IonItem,  IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonApp, IonItemSliding, IonItemOptions, IonItemOption, IonButton, IonButtons, IonBackButton, IonLoading, IonRow, IonCol } from '@ionic/react'
import React, { useEffect, useState } from 'react'

const Stat: React.FC = () => {
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

    return (
<IonContent
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScroll={() => {}}
    onIonScrollEnd={() => {}}>
      <h1>Main Content</h1>

      <div slot="fixed">
      <IonLoading message="please wait.." duration={0.1} isOpen={isLoading}/>
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
        // <IonApp>
        //     <IonHeader>
                
        //         <IonHeader>
        //   <IonToolbar color='primary'>
        //   <IonButtons slot="start">
        //   <IonBackButton defaultHref="" />
        // </IonButtons>
        //     <IonTitle>STATISTICS</IonTitle>
        //   </IonToolbar>
        // </IonHeader>
             
        //     </IonHeader>
        //     <IonContent>
            // <IonLoading message="please wait.." duration={0.1} isOpen={isLoading}/>
            //     <IonRow>
            //         <IonCol>
            //         {Object.keys(data).map((item, i) => (
            //        <IonItemSliding key={i}>
            //        <IonItem>
            //          <IonLabel>
            //              <h2>{item}</h2>
            //            <h3>{data[item]}</h3>
            //          </IonLabel>
            //        </IonItem>
                   
            //      </IonItemSliding>
            //     ))}
            //         </IonCol>
            //     </IonRow>
                
        //     </IonContent>
        // </IonApp>
    )

}

export default Stat

