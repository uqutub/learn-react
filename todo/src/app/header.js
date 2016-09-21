var React = require('react');
var HeaderInterface = React.createClass({
    render: function () {
        return(
            <div>
                <h1> {this.props.title} </h1>
                <hr />
            </div>
        );
    } // render
}); // MainInterface

module.exports = HeaderInterface