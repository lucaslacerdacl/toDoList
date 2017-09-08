import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => {
    return (
        <div>
            <PageHeader name="Tarefas" subname="Cadastros" />
            <h1>Todo</h1>
            <TodoForm />
            <TodoList />
        </div>
    )
}