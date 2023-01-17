import { configureStore } from '@reduxjs/toolkit';
import Todo from './todo.js';

export default  configureStore({
    reducer:{
    todos : Todo
    }
    })