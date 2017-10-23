var React = require("react");
var {Link} = require("react-router");

$("p")

var About = (props) => {
    return(
        <div>
        <h1 className="text-center page-title">About</h1>
        <p>Links to info about the project are below</p>
        <ol>
            <li>
                <Link to="/">Project Team</Link>
            </li>
            <li>
                <Link to="/">Project Goals</Link>
            </li>
        </ol>
        </div>
    )
};

module.exports = About;