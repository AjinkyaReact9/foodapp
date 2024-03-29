import { menuListUrl } from "../utils.js/config";
import NormalMenu from "./NormalMenu";

const NestedMenu = ({nestedTitle, nestedCollection}) => {
    return(
        <div className="pt-4">
              <h5>{nestedTitle}helllo</h5>
              {nestedCollection?.card?.card?.categories.map((category, index) => (
                <NormalMenu title={nestedTitle} filteredCollection={category?.itemCards} />
              ))}
            </div>
    )
}

export default NestedMenu;