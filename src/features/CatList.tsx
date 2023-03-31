import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import Cat from "./Cat";
import { setCats } from "./catsSlice";

const CatList = () => {
   const dispatch = useAppDispatch();
   const catState = useAppSelector(state => state.cats);
//    useEffect(() => {
//     (async () => {
//         try {
//         const response = await fetch('https://cataas.com/api/cats?tags=cute&limit=10')
//         const catData = await response.json();
//         dispatch(setCats(catData.map((cat: any) => ({ id: cat.id, upvotes: 0 }))));
//         } catch (error) {
//             console.log(error);
//         }
//     })();
// }, []);
    useEffect(() => {
        (async () => {
            const catData = await fetch('https://cataas.com/api/cats?tags=cute&limit=10', { method: 'GET', mode: 'cors'})
                .then(response => response.json());
            dispatch(setCats(catData.map((cat: any) => ({ ...cat, upvotes: 0}))));
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return <div>
        {catState && <ul>
            {catState.map(catItem => 
                <li key={catItem._id}><Cat cat={catItem} /></li>
            )}
        </ul>}
    </div>
};

export default CatList;