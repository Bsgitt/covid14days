
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonTextarea,
  IonButtons,
  IonButton,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonBackButton
} from "@ionic/react";
import { add, close, checkmark, trash } from "ionicons/icons";
import React, { Component } from "react";

class Report extends Component {
  state = {
    todoList: [
      {
        createAt: "",
        content: "",
        finished: false
      },

    ],
    modalOpen: false,
    newTodoContent: ""
  };

  componentDidMount() {
    // load todos from local storage
    let todos = localStorage.getItem("todoList");
    if (todos !== null) {
      this.setState({
        todoList: JSON.parse(todos)
      });
    }
  }

  persistTodosToStorage = (newTodos: any) => {
    // persist todos to local storage
    localStorage.setItem("todoList", JSON.stringify(newTodos));
  };

  todoContentInputHandler = (event: any) => {
    this.setState({
      newTodoContent: event.target.value
    });
  };

  clearNewTodoContent = () => {
    this.setState({ newTodoContent: "" });
  };

  addItemToList = () => {
    if (this.state.newTodoContent === "") {
      return;
    }
    let newTodoList = [...this.state.todoList];
    newTodoList.push({
      content: this.state.newTodoContent,
      finished: false,
      createAt: new Date().toLocaleString()
    });

    this.setState({
      todoList: newTodoList,
      newTodoContent: ""
    });

    this.persistTodosToStorage(newTodoList);
  };

  switchItemCheckedStatus = (idx: number) => {
    let newTodoList = [...this.state.todoList];
    newTodoList[idx].finished = !newTodoList[idx].finished;
    this.setState({
      todoList: newTodoList
    });

    this.persistTodosToStorage(newTodoList);
  };

  listRef: any;

  removeItemFromList = (idx: number) => {
    let newTodoList = [...this.state.todoList];
    newTodoList.splice(idx, 1);
    this.setState({
      todoList: newTodoList
    });

    this.persistTodosToStorage(newTodoList);
  };

  toggleModalOpenStatus = () => {
    const isModalOpen = this.state.modalOpen;
    this.setState({ modalOpen: !isModalOpen });
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonButtons slot="start">
              <IonBackButton defaultHref="home" />
            </IonButtons>
            <IonTitle>Covid 14 days</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonToolbar>
            <IonTitle>ประวัติของคุณ</IonTitle>
          </IonToolbar>
          <IonList ref={me => (this.listRef = me)}>
            {this.state.todoList.map((todoItem, idx) => {
              return (
                <IonItemSliding key={idx}>
                  <IonItem>
                    <IonCheckbox
                      onClick={() => this.switchItemCheckedStatus(idx)}
                      slot="start"
                      value={todoItem.content}
                      checked={todoItem.finished}
                    />
                    <IonLabel>{todoItem.content}</IonLabel>
                    <IonLabel>{todoItem.createAt}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={() => {
                        this.removeItemFromList(idx);
                        this.listRef.closeSlidingItems(); // close sliding
                      }}
                      color="danger"
                    >
                      <IonIcon icon={trash} slot="start" /> Delete
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              );
            })}
          </IonList>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => this.toggleModalOpenStatus()}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>

          <IonModal isOpen={this.state.modalOpen}>
            <IonHeader>
              <IonToolbar>
                <IonButtons>
                  <IonTitle>ADD YOUR SYMPTOM</IonTitle>
                  <IonButton onClick={() => this.toggleModalOpenStatus()}>
                    <IonIcon icon={close} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonButton
                onClick={() => {
                  this.addItemToList();
                  this.toggleModalOpenStatus();
                }}
              >
                <IonIcon icon={checkmark} slot="start" />
                Done
              </IonButton>
              <IonButton
                color="danger"
                onClick={() => this.clearNewTodoContent()}
              >
                <IonIcon icon={trash} slot="start" />
                Clear
              </IonButton>
              <IonTextarea
                placeholder="new todo..."
                value={this.state.newTodoContent}
                onIonChange={e => this.todoContentInputHandler(e)}
                autofocus
                autoGrow
              />
            </IonContent>
          </IonModal>
        </IonContent>
      </IonPage>
    );
  }
}

export default Report;

