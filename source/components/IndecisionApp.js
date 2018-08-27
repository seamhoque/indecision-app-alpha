import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{

    state ={
        options : [],
        selectedOption: undefined

    }
    handleDeleteOptions = ()=> {
        this.setState(()=>({options : []}));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOption = (optionToRemove)=>{
        this.setState((prevState)=>{
            return {options : prevState.options.filter((option)=>{
                return optionToRemove !==option;
            })}
        })
    }

    handlePick = () =>{
        const reandomNum =Math.floor (Math.random() * this.state.options.length);
        const option = this.state.options[reandomNum];
        this.setState (()=>({
            selectedOption: option
        }));
    }    
    handleAddOption = (option)=>{
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

    

    render(){ 
        const title = "Indecision";
        const subTitle = "Put your life in the hands of an app";
        return (
            <div>
                <Header title={title} subTitle = {subTitle}/>
                <div className='container'>
                    <Action 
                    hasOptions = {this.state.options.length>0}
                    handlePick = {this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                        options = {this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                    />
                    <AddOption handleAddOption = {this.handleAddOption}/>
                    </div>
                </div>
                
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}

                 />
            </div>
        )
    }
}

export default IndecisionApp;