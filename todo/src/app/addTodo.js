var React = require('react');

var AddTodoInterface = React.createClass({
   
    handleAdd: function(e) {
        var tempItem = {
            task: this.refs.taskInput.value,
        } //tempItem
        e.preventDefault();
        this.props.addtodo(tempItem);
        this.refs.taskInput.value = '';
    },

    render: function() {
        return(
            <div>
                <p>
                    <form>
                        Todo: <input id="taskInputId" ref="taskInput" />

                        <button type="submit" onClick={this.handleAdd}>Add</button>
                    </form>
                </p>
            </div>
        ) // return
    } // render

}); // viewTodo

module.exports=AddTodoInterface;