var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function(){
//         var{temp, location} = this.props;
//         return(
//             <div>
//                 <h1>It's {temp} in {location}</h1>         
//             </div>
//         );
//     }
// });

var WeatherMessage = ({temp,location}) =>{
    return(
        <div>
            <h3>It's {temp} in {location}</h3>         
        </div>
    )
};

module.exports = WeatherMessage;