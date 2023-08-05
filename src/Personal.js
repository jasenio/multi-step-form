import {FormContext} from "./App";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
export const Personal = () => {
    const {page, setPage} = useContext(FormContext);
    const {name, setName} = useContext(FormContext);
    const {email, setEmail} = useContext(FormContext);
    const {number, setNumber} = useContext(FormContext);
    const [nameForm, setNameForm] = useState(name);
    const [emailForm, setEmailForm] = useState(email);
    const [numberForm, setNumberForm] = useState(number);
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object().shape({
        Name: yup.string().required('This field is required'),
        Email: yup.string().email('Email is not valid').required('This field is required'),
        Phone: yup.string()
        .required('This field is required')
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "Too short")
        .max(10, "Too long"),
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) =>{
        setName(data.Name);
        setEmail(data.Email);
        setNumber(data.Phone);
        setPage(page+1);
        console.log(data.Name);
    }
    return (
        <div className = "Personal">
            <p className = "header">Personal info</p>
            <p>Please provide your name, email, address, and phone number.</p>
            <form id = "p1" onSubmit = {handleSubmit(onSubmit)}>
                <label for="name">Name <span>{errors.Name?.message}</span> </label>
                <input type = "text" name = "name" placeholder = "e.g. Stephen King" {...register("Name")} value = {nameForm} onChange = {e=>setNameForm(e.target.value)}style = {errors.Name && {borderColor: "red"}}></input>
                <label for="email">Email Address <span>{errors.Email?.message}</span> </label>
                <input type = "text" name = "email" placeholder = "e.g. Stephenking@lorem.com" {...register("Email")}value = {emailForm} onChange = {e=>setEmailForm(e.target.value)} style = {errors.Email && {borderColor: "red"}}></input>
                <label for="phone">Phone Number <span>{errors.Phone?.message}</span> </label>
                <input type = "text" name = "phone" placeholder = "e.g. +1234567890" {...register("Phone")}value = {numberForm} onChange = {e=>setNumberForm(e.target.value)} style = {errors.Phone && {borderColor: "red"}}></input>
            </form>
        </div>
    )
}