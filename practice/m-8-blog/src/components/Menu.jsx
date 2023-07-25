import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { Category } from '../utils/Category';

export default function Menu(){

    const [categories, setCategory] = useState([]);
    console.log(categories)

    useEffect(() => {
        ( async () => {
            let categories = await Category();
            setCategory(categories.data)
        })()
    }, []);

    return (
        <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Blog</a>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                 
                    {
                        categories.map(( category, index ) => {
                            <NavLink to="/" key = { index }>{ category.name }</NavLink>
                        })
                    }

                </ul>
            </div>
        </div>
        </>
    );
}