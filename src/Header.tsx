import { AiFillStar } from "react-icons/ai";
import { IoReloadCircle } from "react-icons/io5";
import { resetAllCats } from "./features/catsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const Header = () => {
    const dispatch = useAppDispatch();
    const catState = useAppSelector(state => state.cats);
    const starsTotal = catState.reduce((acc, catItem) => acc + catItem.upvotes, 0);

    return <header>
        <h1>Cat Collection</h1>
        <div>
            <div>Total {starsTotal} <AiFillStar className="star" /></div>
            <div onClick={() => dispatch(resetAllCats())}><IoReloadCircle className="reload" /> Reset all</div>
        </div>
    </header>
};

export default Header;