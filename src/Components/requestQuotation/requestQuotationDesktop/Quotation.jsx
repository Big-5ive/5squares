import { useState } from 'react';
import './quotation.css'
import { IoCloudUploadOutline } from "react-icons/io5";
import RequestQuotationMobile from '../requestQuotationMobile/quotationMobile';


const QuotationDesktop = () => {

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
        <div className="quotation-desktop-parent">
           <div className="quotation-desktop-head">
            <p>Request For Quotation</p>
           </div>
           <div className="quotation-desktop-body">
            <div className="request-post">
                <h1>Post your request</h1>
            </div>
            <div className="quotation-desktop-request-hold">
                <div className="quotation-input-hold">
                    <p>* Product name</p>
                    <input type="text" placeholder='please enter' />
                </div>
                <div className="quotation-input-hold2">
                    <div className="quotation-input-hold2-name">
                        <p>*Sourcing quantity</p>
                    </div>
                    <div className="quotation-input-hold2-input-hold">
                        <input type="text" placeholder='please enter'/>

                        <select name="pieces" id="pieces">
                            <option value="pieces">pieces</option>
                            <option value="bags">bags</option>
                            <option value="boxes">boxes</option>
                            <option value="cartons">cartons</option>
                        </select>
                    </div>
                </div>
                <div className="quotation-desktop-detail-hold">
                    <div className="quotation-input-hold2-name">
                        <p>* Detailed requirement</p>
                    </div>
                    <div className="quotation-detail-explain">
                        <textarea name="multilineInput" id="multilineInput">

                        </textarea>
                    </div>
                </div>
                {
                    selectedImags.length > 0 ?<div className="quotation-pictures">
                    {
                        selectedImags.map((e, index)=> (
                            <div className="quotation-picture-itself" key={index}>
                                <img src={e} alt={ `selected ${index}`} />
                            </div>
                        ))
                    }
                </div>: null
                }
                <div className="quotation-picture-upload-hold">
                    <IoCloudUploadOutline fontSize={'30px'}/>
                    <p>upload a picture for more detail</p>
                    <input type="file" multiple onChange={handleImageUpload} />
                </div>
                <div className="quotation-desktop-button">
                    <button>Send Request</button>
                </div>
            </div>
           </div>
           <div className="quotation-mobile-view">
            <RequestQuotationMobile />
           </div>
        </div>
    )
}

export default QuotationDesktop