

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state ={
            options : []

        }

    }

    componentDidMount(){
        try{
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);

        if(options){
            this.setState(()=>{
                return {
                    options : options
                }
            })
        }

        }
        catch (e){

        }
    }

    componentDidUpdate(prevProps, prevState){

       
        prevState.options.length !== this.state.options.length && console.log("component updated");

        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);


    } 

    handleDeleteOptions () {
        this.setState(()=>({options : []}));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>{
            return {options : prevState.options.filter((option)=>{
                return optionToRemove !==option;
            })}
        })
    }

    handlePick(){
        const reandomNum =Math.floor (Math.random() * this.state.options.length);
        const option = this.state.options[reandomNum];
        return alert(option);
    }

    handleAddOption(option){
        if (!option){
            return "please enter a valid option";
        }
        else if (this.state.options.indexOf(option)>-1){

            return "please input a new task.";

        }

        this.setState((prevState)=>{
            return {
                options : prevState.options.concat([option])
            }
        })


        
    }

    render(){ 
        const title = "Indecision";
        const subTitle = "Put your life in the hands of an app";
        return (
            <div>
                <Header title={title} subTitle = {subTitle}/>
                <Action 
                hasOptions = {this.state.options.length>0}
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        )
    }
}



const Header = (props)=>{
    return (
        <div>
            
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title : "default title",
    subTitle : "default subTitle" 
}

const Action = (props)=>{
    return (
        <div>
            <button 
            onClick = {props.handlePick}
            disabled = {!props.hasOptions}
            >
            What should i do 
            </button>
        </div>
    )
}

const Options = (props)=>{
    return (
        <div>
            
            <button 
            onClick = {props.handleDeleteOptions}
            > 
            Remove all 
            </button>
            {props.options.length === 0 && <p>Please add an task to get started</p> }
            {
                props.options.map((option) => 
            <Option 
            key = {option} 
            optionText = {option}
            handleDeleteOption = {props.handleDeleteOption}

            /> )
            }
        </div>
    )
}

const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button 
                onClick = 
                {(e)=>{
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    )
}

class AddOption extends React.Component{
    constructor (props){
        super (props);
        this.handleOption = this.handleOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>{
            return {
                error: error
            }
        })

        if(!error){
            e.target.elements.option.value = "";
        }


  }

    render(){
        return (
            <div>
              {this.state.error && <p>{this.state.error}</p>}  
            <form onSubmit = {this.handleOption}>
                <input type = "text" name = "option" />
                <button>Add Option </button>
        
            </form>
            </div>
        )
    }
}





ReactDOM.render(<IndecisionApp />,document.getElementById('app'));