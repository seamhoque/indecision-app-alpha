class Clock extends React.Component {
    render (){
        return (
            <div>
            <h1>Hello World</h1>
            <h2>Now it is : {this.props.date.toLocaleTimeString()}.</h2>
             </div> 
        );
    }
}

function tick(){
    ReactDOM.render (<Clock date = {new Date()} />, document.getElementById("app"));
        
}

setInterval(tick,1000);