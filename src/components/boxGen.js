import react, {useState} from "react";
import Box from "./box";
const BoxGen = () => {
    const colors = ['red','orange','yellow','green','blue','indigo','violet'];
    const [boxes,setBoxes]= useState([]);
    const [color,setColor] = useState("");
    const addBox = (e)=>{
        e.preventDefault();
        setBoxes(boxes.concat([{color:color}]))
        console.log(boxes)
    }

    return(
    <div>
        <form onSubmit={addBox}>
            <select id="color" name="color" onChange={(e)=>setColor(e.target.value)}>
                <option value="" disabled hidden selected>Pick a color</option>
                {colors.map( (item,i)=>
                    <option key={i} value={item}>{item}</option>
                )}
            </select>
            {
            color===""?
            <input type='submit' value='Add Box!' disabled/>:
            <input type='submit' value='Add Box!' />
            }
        </form>
        <div className="flex">
            {boxes.map( (item,i) =>
                <Box key={i} color={item.color} />
            )}
        </div>
    </div>
    )
}

export default BoxGen;