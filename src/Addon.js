import {FormContext} from "./App";
import {useContext, useState} from "react";
export const Addon = () => {
    const {MoYe, setMoYe} = useContext(FormContext);
    const {addons, setAddons} = useContext(FormContext);
    const {page, setPage} = useContext(FormContext);
    const handleButton = (planName) => {
        if (addons.includes(planName)) setAddons(addons.filter((plan) => plan!==planName));
        else setAddons([...addons, planName]);
    }
    const handleSubmit = (event) => {
        setPage(page+1);
        event.preventDefault();
        console.log(addons);
    }
    return (
        <div className = "Addon">
            <p className = "header">Pick add-ons</p>
            <p>Add-ons help enhance your gaming experience.</p>
            <form id = "p1" onSubmit ={handleSubmit}>
                <button type ="button" className = "OnlineService" onClick = {() => {handleButton("Online service")}} style = {{borderColor: addons.includes('Online service') && "hsl(267, 100%, 62%)"}}>
                    <div className = "check" style = {{backgroundColor: addons.includes('Online service') && "hsl(267, 100%, 62%)"}}>
                        <svg style = {{ width: 12, height: 9 }}xmlns="http://www.w3.org/2000/svg"viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                    </div>
                    <div className = "desc">
                        <p className = "addT">Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p className = "arcCost">{!MoYe? "+$1/mo":"+$10/yr " }</p>
                </button>
                <button type ="button" className = "LargerStorage" onClick = {() => {handleButton("Larger storage")}} style = {{borderColor: addons.includes('Larger storage') && "hsl(267, 100%, 62%)"}}>
                <div className = "check" style = {{backgroundColor: addons.includes('Larger storage') && "hsl(267, 100%, 62%)"}}>
                        <svg style = {{ width: 12, height: 9 }}xmlns="http://www.w3.org/2000/svg"viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                    </div>
                    <div className = "desc">
                        <p className = "addT">Larger storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p className = "arcCost">{!MoYe? "+$2/mo":"+$20/yr " }</p>
                </button>
                <button type ="button" className = "CustomizableProfile" onClick = {() => {handleButton("Customizable profile")}}  style = {{borderColor: addons.includes('Customizable profile') && "hsl(267, 100%, 62%)"}}>
                    <div className = "check" style = {{backgroundColor: addons.includes('Customizable profile') && "hsl(267, 100%, 62%)"}}>
                        <svg style = {{ width: 12, height: 9 }}xmlns="http://www.w3.org/2000/svg"viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                    </div>
                    <div className = "desc">
                        <p className = "addT">Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </div>
                    <p className = "arcCost">{!MoYe? "+$2/mo":"+$20/yr " }</p>
                </button>
            </form>
        </div>
    )
}