import React from 'react';
import FunfactItem from "./FunFactItem";
import Funfacts from '../../../data/Funfact/funfact' 
 
const Funfact  = () => {
    return ( 
        <div className="confacts-section confacts_section_v2" style={{backgroundImage: `url("${process.env.PUBLIC_URL + '/assets/images/confacts.jpg'}")`}} > 
            <div className="container">
                <div className="row funfact_wapr">
                
                    <div className="col-md-3 col-sm-12">
                        <div className="facts_text">
                            <h3>What Makes <br /> us Special?  </h3>
                        </div>
                    </div>

                    {
                        Funfacts.map(funfact=>(
                            <FunfactItem 
                            key={funfact.id} 
                            counterNumber={funfact.counterNumber} 
                            counterText={funfact.counterText} 
                            counterIcon={funfact.counterIcon} 
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Funfact;