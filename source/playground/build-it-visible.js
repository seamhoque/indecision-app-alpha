const appRoot = document.getElementById('app');

let visibility = false;
let information;
const onClickButton = ()=>{
  
    visibility = !visibility;
    render();
    
}
const render = ()=>{
    const template= (
        <div>
            <h1> Visibility Toggle </h1>
            { visibility && (
                <p>Here Are some Message</p>
            )}
            <button onClick = {onClickButton}>{visibility ? "Hide Details " : "Show Details"}</button>
    
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();





