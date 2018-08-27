class Counter extends React.Component{

    constructor (props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    
    }

    componentDidMount(){
        const json = localStorage.getItem("count");
        const count = JSON.parse(json);

        this.setState(()=>{
            return {
                count: count
            }
        })
    }

    componentDidUpdate(prevProps,prevState){
        prevState.count !== this.state.count && console.log("component did updated");
        const json = JSON.stringify (this.state.count);
        localStorage.setItem("count",json);
    }



    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        })
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {

            count: prevState.count - 1

            };

        })
    }

    handleReset(){
        this.setState(()=>{
            return {count: 0}
        })

    }

    render (){
        return (
        <div>
            <h1> count: {this.state.count} </h1>
            <button onClick = {this.handleAddOne}> +1 </button>
            <button onClick = {this.handleMinusOne}> -1 </button>
            <button onClick = {this.handleReset}> reset </button>
        </div>
        )
    }

    

}


ReactDOM.render(<Counter />,document.getElementById('app'));