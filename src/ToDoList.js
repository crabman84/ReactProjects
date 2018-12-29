import React from 'react'

class ToDoList extends React.Component{
    componentDidUpdate(){
        this.props.inputElement.current.focus();
    }

    render(){
        return(
            <div className = "todoListMain">
                <div className = "hedaer">
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Task"/>
                        <button type={"submit"}> Add Task </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ToDoList;