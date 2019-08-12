import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { reducer } from './App';//여기가 4단계 //*
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'//*
import { Provider } from 'react-redux'//store등록//*
const store = createStore(reducer) //스토어 생성하며 만든 리듀서를 넣어줌]]

//reduce는 store에 등록 : 이 코드를 작성하는 부분은 수작업이 일어난다.//*
ReactDOM.render(
    <Provider store={store} >
        <App /></Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//4단계
//store가 observer
//store에 reduce를 등록

