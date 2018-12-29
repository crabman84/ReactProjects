import React from 'react'
import ButtonComponent from './ButtonComponent'

class KeyPadComponent extends React.Component{

    render(){

        return(

            //TODO: Make sure className matches in css file!!!
        <div className="keyPad">
            {/*<div>Test</div>*/}
            <ButtonComponent buttonName = {"("}/>
            <ButtonComponent buttonName = {")"}/>
            <ButtonComponent buttonName = {"%"}/>
            <ButtonComponent buttonName = {"CE"}/><br/>

            <ButtonComponent buttonName = {"7"}/>
            <ButtonComponent buttonName = {"8"}/>
            <ButtonComponent buttonName = {"9"}/>
            <ButtonComponent buttonName = {"/"}/><br/>

            <ButtonComponent buttonName = {"1"}/>
            <ButtonComponent buttonName = {"2"}/>
            <ButtonComponent buttonName = {"3"}/>
            <ButtonComponent buttonName = {"-"}/><br/>

            <ButtonComponent buttonName = {"0"}/>
            <ButtonComponent buttonName = {"."}/>
            <ButtonComponent buttonName = {"="}/>  {/*TODO: Make calculate method work here*/}
            <ButtonComponent buttonName = {"+"}/><br/>
        </div>
        )
    }
}

export default KeyPadComponent;