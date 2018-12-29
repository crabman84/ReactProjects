    import React from 'react'

    class ToDoItems extends React.Component{

        CreateTasks(item){
            return <li key={item.key}>{item.text}</li>
        }
        CreateTasks = item =>{
            return (
            <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
                {item.text}
            </li>)
        }
        render(){
            const todoEntries = this.props.entries;
            const listItems = todoEntries.map(this.CreateTasks);

            return(
                <ul className={'itemList'}>{listItems}</ul>
            );
        }
    }


    export default ToDoItems;