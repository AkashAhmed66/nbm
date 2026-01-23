import React, { useEffect, useState }  from 'react'
import SectionTitle from '../SectionTitles/SectionTitle'
import axios from 'axios';
import SingleReport from './SingleReport';

export default function Reports() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portal.nbm-intl.com/api/report-categories');
                setData(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                // nothing
            }
        };
        
        fetchData();
    }, []);
  return (
    <section className="single_service_s2">
        <div className="container">
            {/* Heading */} 
            <SectionTitle title="Sustainability Reports"  />

            {/* End: Heading */ }
            <div className="row">
                {
                    (data != null)?data.map((reportCategory, id) => <div> 
                        <div className="report-heading">  <p> {reportCategory.title.toUpperCase()} </p> </div>
                        {
                            <SingleReport reportCategory={reportCategory}/>    
                        }
                    </div>):null
                } 
            </div>
        </div>
    </section>
  )
}
