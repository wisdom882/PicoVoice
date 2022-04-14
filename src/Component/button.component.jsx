import React from 'react'
import './button.styles.css'
import { useAppContext } from '../Context/appContext';

const Appbutton = ({parent, name, visible}) =>{
// when selected it must turn red 
// when you hover over it it must turn 
// it will have field called display or visible
// should take in name as prop
// onclick would run function and display or hide next line
const {os, pkg, language, computeplatform, pytorchBuild, setOs, setPackage, setLanguage, setComputePlatform} = useAppContext()

 function handleClick(event){
    event.preventDefault();
    let nextLevel = []
    if(parent ==='os'){
        nextLevel = pytorchBuild(pkg, name)
    }

    if(parent ==='pkg'){
        nextLevel = pytorchBuild(language, name)
    }

    if(parent ==='language'){
        nextLevel = pytorchBuild(computeplatform, name)
    }
 }
return(
    <button className={visible ? 'show-button' : 'hide-button'} onClick={handleClick}>{name}</button>
);
}

export default Appbutton;