import React, {useState, useEffect} from 'react';
import WizardHeader from "./WizardHeader";
import FadeLoader from "react-spinners/FadeLoader";
import "./Wizard.css"
import { css } from "@emotion/core";

function Wizard() {
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#F5A623");

    const override = css`
        display: block;
        margin: 200px auto;
        border-color: #50E3C2;
    `;

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 7000)
    },[])
    return (
        <div>
            
           {
               
                loading ? <FadeLoader color={color} loading={loading} css={override} size={150} />

               :

               <WizardHeader />
           } 
        </div>
        
    )
}

export default Wizard
