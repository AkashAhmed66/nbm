import React from 'react'; 

function LogoItem(props) {
    return (
        <div className="client-box"> 
            <img src={(process.env.PUBLIC_URL + '/assets/images/' + props.logoSrc)} alt="logo"/>
        </div>
    );
}

export default LogoItem;