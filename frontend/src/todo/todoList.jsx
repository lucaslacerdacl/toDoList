import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { done, deleteTodo } from './todoActions'
import IconButton from '../template/iconButton'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.renderRows = this.renderRows.bind(this)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={ todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton hide={todo.done} style="success" icon="check" onClick={() => this.props.done(todo, true)} />
                    <IconButton hide={!todo.done} style="warning" icon="remove" onClick={() => this.props.done(todo, false)} />
                    <IconButton hide={!todo.done} style="danger" icon="trash" onClick={() => this.props.deleteTodo(todo)} />
                </td>
            </tr>   
        ))
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className='tableActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => (
    {
        list: state.todo.list
    }
)

const mapDispatchToProps = dispatch => (
    bindActionCreators({ done, deleteTodo }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)