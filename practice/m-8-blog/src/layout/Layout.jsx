import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { Category } from '../utils/Category';

export default function Layout({ children }){

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        ( async () => {
            let categories = await Category();
            setCategory(categories.data)
        })()
    }, []);

    const menus = [
        {
            "id": 1,
            "name": "\u09b2\u09be\u0987\u09ac\u09cd\u09b0\u09c7\u09b0\u09bf",
            "created_at": "2023-07-19T05:49:30.000000Z",
            "updated_at": "2023-07-19T05:49:30.000000Z"
        },
        {
            "id": 2,
            "name": "\u0987\u09a4\u09bf\u09b9\u09be\u09b8",
            "created_at": "2023-07-19T05:49:30.000000Z",
            "updated_at": "2023-07-19T05:49:30.000000Z"
        }];

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Blog</a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    
                      {
                        menus.map((item) => {
                            <li>{ item.name }</li>
                        })
                      }
                    </ul>
                </div>
            </div>

            { children }
        </>
    );
}