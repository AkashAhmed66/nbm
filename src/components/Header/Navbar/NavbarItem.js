import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import navbarData from "../../../data/Navbar/navbar.json";

import DataService from "../../../services/AllService";

function NavbarItem(props) {

    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        retrieveServices();
            serviceList.map((item) => {
        })
    }, []);

const retrieveServices = () => {
    DataService.getAllServices()
    .then((response) => {
        setServiceList(response.data.data);

        //   console.log("data", response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const parent = ['32','33','34','35']

    return(
        navbarData.map(item=>(
            <li kEY={item.id}
            className={item.subMenu || item.megaMenu ? 'menuItemHasChildren' : ''}
            >
                {
                    item.title == 'Sustainability'? 
                    <Link style={{color: 'green', fontWeight: 'bold' }} to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link> : 
                    <Link to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link>
                }
                {(() => {
                    if(item.subMenu && item.title=='Services'){
                        return(
                            <ul className="subMenu">
                                {

                                    serviceList.map((subItem,index)=>{
                                        return <li kEY={index}>
                                            <Link to={process.env.PUBLIC_URL + `service/details?id=`+subItem.service_category[0].services[0].id} >{subItem.title} <i className="bi bi-arrow-right"></i></Link>
                                        
                                        {(() => {
                                            if(subItem.service_category){
                                                return(
                                                    <ul className="subMenu2" style={{'width':'300px'}}>
                                                        {
                                                            subItem.service_category[0].services.map((subItemL2,index)=>{

                                                                if(subItemL2.parent==null)
                                                                
                                                                    return <li kEY={index}><Link style={{'width': '100%'}} to={process.env.PUBLIC_URL + `service/details?id=`+subItemL2.id}>{subItemL2.title}</Link></li>
                                                                //})
                                                                
                                                                
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }

                        
                                        })()}


                                        
                                        
                                        </li>
                                    })
                                }
                            </ul>
                        )
                    }

                    if(item.subMenu && item.title!='Services'){
                        return(
                            <ul className="subMenu">
                                {
                                    item.subMenu.map((subItem,index)=>{
                                        return <li kEY={index}><Link to={`${process.env.PUBLIC_URL + subItem.link}`}>{subItem.title} <i className="bi bi-arrow-right"></i></Link>
                                        
                                        {(() => {
                                            if(subItem.subMenuLevel2){
                                                return(
                                                    <ul className="subMenu" style={{'width':'300px'}}>
                                                        {
                                                            subItem.subMenuLevel2.map((subItemL2,index)=>{
                                                                return <li kEY={index}><Link style={{'width': '100%'}} to={`${process.env.PUBLIC_URL + subItemL2.link}`}>{subItemL2.title}</Link>
                                                                </li>
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }

                        
                                        })()}


                                        
                                        
                                        </li>
                                    })
                                }
                            </ul>
                        )
                    }

 
                })()}
            </li>
        ))
    )
}

export default NavbarItem