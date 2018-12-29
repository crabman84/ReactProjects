import React from 'react'

class ToDoList extends React.Component{
    constructor(props){
        super(props);

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