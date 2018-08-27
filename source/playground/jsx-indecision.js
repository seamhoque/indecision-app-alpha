//live-server public
//babel source/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log("app.js is running");

const app = {
    title: "Indecision App",
    subTitle: "welcome to my app",
    options: []
    
}

const onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);

        e.target.elements.option.value = '';

        renderApp();


    }

}

const removeAll= ()=>{
    app.options = [];
    renderApp();

}

const onMakeDecision = ()=>{
    const reandomNum =Math.floor (Math.random() * app.options.length);
    const option = app.options[reandomNum];
    alert(option);

}


const renderApp = () =>{
    const template =( 
        <div>
            <h1> {app.title} </h1> 
            <button disabled = {app.options.length===0}onClick = {onMakeDecision}> What should i do </button>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length>0 ? 'Here are your options' : 'No options'}</p>
            
            
            
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key = {option}>{option}</li>
                    })
                }
            </ol> 
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option" />
                <button>Add Option </button>
        
            </form>
            <button onClick = {removeAll}> Remove Button </button>

            
            
            
        </div>);

ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderApp();
 

