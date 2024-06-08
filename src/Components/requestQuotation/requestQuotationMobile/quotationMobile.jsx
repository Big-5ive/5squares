import { useState } from 'react';
import './quotationMobile.css'
import { IoChevronBackSharp } from "react-icons/io5";

const RequestQuotationMobile = () => {
    const [selectedImags, setSelectedImages] = useState([])

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files)

        const imagePromises = files.map((file)=> {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()

                reader.onload = () => {
                    resolve(reader.result)
                }

                reader.onerror = reject;

                if(file) {
                    reader.readAsDataURL(file)
                }
            })
        })

        Promise.all(imagePromises)
        .then((images)=>{
            setSelectedImages((prevImages) => {
                const newImages = [...prevImages, ...images]
                return newImages.slice(0, 5);
            })
            // console.log(selectedImags)
        })
        .catch((error) => console.error("error reading file", error))
    }

    return(
        <div className="quotation-mobile-parent">
            <div className="quotation-mobile-head">
                <IoChevronBackSharp fontSize={"30px"}/>
                <p>Request for Quotation</p>
            </div>
            <div className="quotation-mobile-input-hold">
                <div className="quotation-name">
                    <p>* Product name</p>
                </div>
                <input 
                    type="text" 
                    placeholder='Name or Keywords' 
                />
            </div>
            <div className="quotation-mobile-input-hold2">
                <div className="quotation-name2">
                    <p>* Sourcing quantity</p>
                </div>
                <div className="quotation-input">
                    <input type="text" placeholder='please enter'/>
                    <div className="quotation-measure">
                        <select name="measure" id="measure">
                        <option value="pieces">pieces</option>
                            <option value="bags">bags</option>
                            <option value="boxes">boxes</option>
                            <option value="cartons">cartons</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="quotation-mobile-detail-hold">
                <div className="quotation-name2">
                    <p>* Sourcing quantity</p>
                </div>
                <div className="quotation-detail-itself">
                <textarea name="multilineInput" placeholder='i am looking for...' id="multilineInput"></textarea>
                </div>
            </div>
            {
                selectedImags.length > 0 ? <div className="quotation-image-hold">
                {
                    selectedImags.map((e,index)=> (
                <div className="quotation-image-itself" key={index}>
                    <img src={e} alt={ `selected ${index}`} />
                </div>
                    ))
                }
            </div>: null
            }
            <div className="quotation-upload-hold">
                <input type="file" multiple onChange={handleImageUpload} />
            </div>
            <div className="quotation-mobile-button">
                <button>Send Request</button>
            </div>
        </div>
    )
}

export default RequestQuotationMobile