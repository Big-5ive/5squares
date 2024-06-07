import './allStates.css'
import { FiSearch } from "react-icons/fi";
import axios from 'axios';
import { RingLoader } from "react-spinners";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllStates } from '../../../Global/Features';

const StateComponent = ({ondata}) => {
    // const [allStates, setAllStates] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const allStates = useSelector((e) => e.persistedReducer.allStates)
    console.log(allStates)

    useEffect(()=>{
        setLoading(true)
        const url = "https://fivesquare-api.onrender.com/api/allstates"
        const fetchStates = async () => {
          try {
            const response = await axios.get(url)
            // setAllStates(response.data.data)
            dispatch(getAllStates(response.data.data))
            setLoading(false)
          } catch (error) {
            console.log(error)
        } 
        }
        fetchStates()
      },[])
    //   console.log(allStates)
    const handleSendState = (e) => {
        const data = e
        ondata(data)
    }

    const filteredItems = allStates.filter(item =>
        item.toLowerCase().includes(searchItem.toLocaleLowerCase())
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