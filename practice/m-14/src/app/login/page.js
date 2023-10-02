'use client'

import { NextResponse } from "next/server";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function login(){

    const router = useRouter();
    
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = { method: 'POST', body: JSON.stringify(formValues)}

        const res = await fetch('/api/login', config);
        const response = await res.json();

        if(response['status'] == true){
            router.replace('/dashboard');
        }else{
            alert(response['message'])
        }
    }

    return (
        <>

            <form onSubmit={handleSubmit} className="row g-3 m-5">
                <div className="col-4">
                    <label className="form-label">Email</label>
                    <input type="email" onChange={(e) => { handleChange('email', e.target.value)}} className="form-control" />
                </div>

                <div className="col-4">
                    <label className="form-label">Password</label>
                    <input type="password" onChange={ (e) => { handleChange('password', e.target.value) }} className="form-control" />
                </div>
                
                <div className="col-12">
                    <button type="submit" className="btn btn-info d-block">Sign in</button>
                </div>
            </form>
        </>
    );
}