import React, { Component } from 'react';

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {edit: false}
    }

    edit (){
        this.setState({edit: !this.state.edit});
    };

    removeBtn () {
      this.props.delete(this.props.index);
    };

    save(){
        this.props.update(this.refs.newText.value, this.props.index);
        this.setState({edit: false});
    }

    normState(){
        return (
            <div className="box">
                <div className="text">{this.props.children}</div>
                <button onClick={this.edit.bind(this)} className="btn light">Редактировать</button>
                <button onClick={this.removeBtn.bind(this)} className="btn red">Удалить</button>
            </div>
        );
    };

    editState(){
        return (
            <div className="box">
                <textarea ref="newText" name="textedit" id="textedit" rows="3" defaultValue={this.props.children}></textarea>
                <button onClick={this.save.bind(this)} className="btn success">Сохранить</button>
            </div>
        );
    }

    render () {
        if (this.state.edit){
            return this.editState();
        }else{
            return this.normState();
        }
    };
}

export default Task;