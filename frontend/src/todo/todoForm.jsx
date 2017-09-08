import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleDescriptionChange, handleSearch, handleAdd, cleanDescription } from './todoActions'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


class TodoForm extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.handleSearch()
    }

    render() {
        const { handleAdd, handleSearch, handleDescriptionChange, description, cleanDescription } = this.props
        return (
            <div role="form" className="todoForm">
                <Grid columns="12 9 10">
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa" 
                    onChange={handleDescriptionChange} value={description}></input>
                </Grid>
                <Grid columns="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => handleAdd(description) } />
                    <IconButton style="info" icon="search" onClick={handleSearch} />
                    <IconButton style="default" icon="close" onClick={cleanDescription} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        description: state.todo.description
    }
)

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleDescriptionChange, handleSearch, handleAdd, cleanDescription }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)