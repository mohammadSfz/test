import { useEffect, useLayoutEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Navigate, Router } from 'react-router-dom';
import { Api } from "../../../utils/Api";
import Item from './Item';


function Index() {
    const { auth, logout } = useAuth();
    const [items, setItems] = useState([]);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState(0);

    const getItems = (p: number) => {
        Api.get('users', {
            params: {
                page: p,
                per_page: 5
            }
        })
            .then((res: any) => {
                setItems(items.concat(res.data));
                setTotal(res.total);
                setPage(p + 1);
            })
            .catch((err: any) => {

            })
    }
    useEffect(() => {
        if (auth) {
            getItems(page);
        }
    }, []);
    return (
        <div className="relative">
            <button onClick={logout}>
                Logout

            </button>
            <ul role="list" className="divide-y divide-gray-100">
               {items?.map((item:any, index:number)=>{
                return <Item item={item} key={index}/>
               })}


            </ul>
           {items?.length < total &&  <button onClick={()=> getItems(page)}>
                More items
            </button>}
        </div>
    )
}

export default Index;