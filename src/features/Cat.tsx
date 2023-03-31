import { CatItem, resetCat, upVoteCat } from "./catsSlice";
import { AiFillStar } from "react-icons/ai";
import { IoReloadCircle } from "react-icons/io5";
import { useAppDispatch } from "../hooks";

const Cat = (props: { cat: CatItem }) => {
    const { cat } = props;
    const dispatch = useAppDispatch();

    return <div className="cat">
        <div className="cat__controls">
            <div className="star" onClick={() => dispatch(upVoteCat(cat._id))}><AiFillStar /></div>
            <div className="reload" onClick={() => dispatch(resetCat(cat._id))}><IoReloadCircle /></div>
        </div>
        {cat.upvotes > 0 && <div className="cat__upvotes">{cat.upvotes} <AiFillStar className="star"/></div>}
        <div className="cat__image" style={{backgroundImage: `url(https://cataas.com/cat/${cat._id})`}}></div>
    </div>
}

export default Cat;