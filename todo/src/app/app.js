var React = require('react');
var ReactDOM = require('react-dom');

var HeaderInterface = require('./header');
var ViewTodoInterface = require('./viewTodo');
var AddTodoInterface = require('./addTodo');    

var MainInterface = React.createClass({
    getInitialState: function () {
        return {
            title: 'Todo Application',
            todos: [] 
        } //return
    }, //getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get('./data/data.json', function(result) {
        var tempTodos = result;
        this.setState({
            todos: tempTodos 
        }); //setState
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort(); 
    },

    todoStatusToggle: function(item) {
        var tempTodo = this.state.todos;
        tempTodo = tempTodo.map(function(todo,index){
            if(todo.id == item.id){
                if(todo.status == "true") {
                    todo.status = "false";
                } else {
                    todo.status = "true";
                }
                return todo;
            } else {
                return todo;
            }
            
        });
        this.setState({
            todos: tempTodo
        });
    },

    addTodoInArray: function(item){
        var tempTodo = this.state.todos;
        tempTodo.push({id: tempTodo.length+1, task: item.task, status: "false"});
        this.setState({
            todos: tempTodo
        });
        console.log(item);
    },

    render: function () {
        var todoList = this.state.todos;
        todoList = todoList.map(function(item, index) {
        return(
            <ViewTodoInterface key={index} 
            todo={item} 
            onStatus = { this.todoStatusToggle } />
        ) //return
        }.bind(this)); //todoList.map

        return(
            <div>
               <HeaderInterface title={this.state.title} />

                <AddTodoInterface addtodo={this.addTodoInArray}/>

               <ul>{todoList}</ul>

            </div>
        );
    } // render
}); // MainInterface

ReactDOM.render(
    <MainInterface/>,
    document.getElementById('myid')
); // render 