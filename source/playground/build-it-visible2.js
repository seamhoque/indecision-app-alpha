class VisibilityToogle extends React.Component{
    constructor(props){

        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = {
            visibility : false
        };
        }

    

    handleToogleVisibility() {
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    

    render(){
        return(
            <div>
            <h1> Visibility Toggle </h1>
            {
                this.state.visibility && (<p>Here are some message </p>)
            }
            <button onClick = {this.handleToogleVisibility}> {this.state.visibility ? "Hide Details" : "Show Details" } </button> 
    
        </div>
        )
    }
}
ReactDOM.render(<VisibilityToogle />,document.getElementById("app"));