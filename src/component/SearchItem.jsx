import React , {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

function SearchItem(){
    const {term} = useParams()
    const [filterData, setFilterData] = useState([]);

    useEffect(()=>{
        const filteredData = ()=>{
            const data = items.filter((searchItem) => searchItem.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
            setFilterData(data)
        }
        filteredData();
    },[term])
    
    return(
        <>
            <Product items={filterData}/>
        </>
    )
}

export default SearchItem;