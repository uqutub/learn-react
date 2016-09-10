var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    render: function(){
        return <h1>Hello World</h1>
    } // render
}); // MainInterface

ReactDOM.render(
    <MainInterface/>,
    document.getElementById('myid')
); // render 