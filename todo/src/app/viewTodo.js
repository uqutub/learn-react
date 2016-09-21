var React = require('react');

var ViewTodoInterface = React.createClass({
   
    handleStatus: function(e) {
        e.preventDefault();
        this.props.onStatus(this.props.todo);
    },

    render: function() {
        var onCompleteStyle = {
            textDecoration: (this.props.todo.status === "true") ? 'line-through':'none',
            color: (this.props.todo.status === "true") ? 'red' : 'black'
        }

        return(
            <li style={onCompleteStyle}>
                <div>
                    <span>task: {this.props.todo.task}</span> &nbsp;
                    <button onClick={this.handleStatus}>Done</button>
                </div>
            </li>
        ) // return
    } // render

}); // viewTodo

module.exports=ViewTodoInterface;