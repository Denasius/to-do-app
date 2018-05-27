import React, { Component } from 'react';
import Task from './Task';

class Field extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    };

    addTask (item) {
        let newTask = this.state.tasks;
        newTask.push(item);
        this.setState({tasks: newTask});
    }

    deleteBlock (i) {
        let arr = this.state.tasks;
        arr.splice(i, 1);
        this.setState({tasks: arr});
    };

    updateText(text, i){
        let arr = this.state.tasks;
        arr[i] = text;
        this.setState({tasks: arr});
    };

    arrTask(item, i){
        return <Task key={i} index={i} update={this.updateText.bind(this)} delete={this.deleteBlock.bind(this)}>{item}</Task>;
    };

    render () {
        return (
            <div className="field">
                    <button onClick={this.addTask.bind(this, "Добвте задачу")} className="btn new_task">Добавить задание</button>
                    {this.state.tasks.map(this.arrTask.bind(this))}
            </div>
        )
    }
}

export default Field;