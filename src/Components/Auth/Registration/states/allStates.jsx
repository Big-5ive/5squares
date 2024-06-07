import './allStates.css'
import { FiSearch } from "react-icons/fi";
import { RingLoader } from "react-spinners";
import { useState } from 'react';

const StateComponent = ({ondata}) => {
    const [searchItem, setSearchItem] = useState('')
    const [loading, setLoading] = useState(false)

    const allStates = [
        "Abia",
        "Abuja",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
    ]

    const handleSendState = (e) => {
        const data = e
        ondata(data)
    }

    const filteredItems = allStates?.filter(e =>
        e.toLowerCase().includes(searchItem.toLowerCase())
    )

    return(
        <div className="statewrap">
            <div className="search-wrap">
                <div className="search-hold">
                    <input
                     value={searchItem}
                     onChange={(e)=>setSearchItem(e.target.value)}
                     type="text" />
                    <FiSearch />
                </div>
            </div>
            <div className="state-hold">
                {loading? <div className='loader'><RingLoader color='orangered' /></div> :
                    filteredItems.map((e, id)=> (
                        <div key={id} onClick={()=>handleSendState(e)} className="state-name">
                            <p>{e}</p> 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StateComponent