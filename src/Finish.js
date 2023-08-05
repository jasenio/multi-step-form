import {FormContext} from "./App";
import {useContext, useState} from "react";
export const Finish = () => {
    const {MoYe, plan, addons} = useContext(FormContext);
    const {page, setPage} = useContext(FormContext);
    const handleSubmit = (event) => {
        setPage(page+1);
        event.preventDefault();
    }
    let pcost = 0;
    let total = 0;
    switch(plan){
            case "Arcade":
                pcost = 9;
                break;
            case "Advanced":
                pcost = 12;
                break;
            case "Pro":
                pcost = 15;
                break;
    }
    if(MoYe) pcost*=10;
    total += pcost;
    const addOnCost = (addon) =>{
        let cost = 0;
        switch(addon){
            case "Online service":
                cost = 1;
                break;
            case "Larger storage":
                cost = 2;
            case "Customizable profile":
                cost = 2;
        }
        if(MoYe) cost*=10;
        total += cost;
        return MoYe? "+$"+cost+"/yr":"+$"+cost+"/mo"
    }
    console.log(plan);
    return (
        <div className = "Finish">
            <p className = "header">Pick add-ons</p>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className = "finalPlan">
                <p className = "plan">{MoYe? plan + " (Yearly)" : plan + " (Monthly)"}</p>
                <button className = "goToPlan" onClick = {()=>{setPage(2)}}>Change</button>
                <p className = "planCost">{MoYe? "$" + pcost + "/yr":"$" + pcost + "/mo" }</p>
            </div>
            <hr/>
            {addons.map((addon)=>{
                return (
                    <p className = "addon">{addon}<span>{addOnCost(addon)}</span></p>
                )
            })}
            <p className = "totalT">{MoYe? "Total (per "+"year)":"Total (per "+"month)"}<span>{MoYe? "+$"+total+"/yr":"+$"+total+"/mo"}</span></p>
            <form id = "p1"  onSubmit ={handleSubmit}>
            </form>
        </div>
    )
}