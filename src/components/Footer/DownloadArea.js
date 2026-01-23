import React from 'react';
import { Link } from "react-router-dom";


function DowndoalArea() {
    return (
        <div className="download" style={{marginLeft: '-20px'}}>
            <marquee direction="up" truespeed="" scrolldelay="65" scrollamount="1"
                behavior="scroll" height="149px" align="middle" onmouseover="this.stop()" onmouseout="this.start()">
                <ul>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Minimum Wages_ RMG_ 2018.pdf'}>Minimum Wages_ RMG 2018</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Minimum Wage_ BEPZA_ 2018.pdf'}>Minimum Wage_ BEPZA 2018</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Minimum Wage_ Leather and Shoes Industry_ 2020.pdf'}>Minimum Wage_ Leather and Shoes 2020</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Minimum wages_ Plastic Industry_ 2020.pdf'}>Minimum wages_ Plastic Industry 2020</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Minimum Wages_Cotton Textile Industries_2018.pdf'}>Minimum Wages_Cotton Textile 2018</a></li>

                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Labour_Act_2006 (English).pdf'}>Bangladesh Labour Act 2006 (English)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Labour_Act_2006_Bangla.pdf'}>Bangladesh Labour Act 2006 Bangla</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Labour_Act_2006 (Amendment 2018).pdf'}>Bangladesh Labour Act 2006 (Amendment 2018)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Labour_Rules_2015 (Bangla).pdf'}>Bangladesh Labour Rules 2015 (Bangla)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Labour_Rules_2015 (English).pdf'}>Bangladesh Labour Rules 2015 (English)</a></li>                    
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Labour_Rules_2015 (Amendment 2022).pdf'}>Bangladesh Labour Rules 2015 (Amendment 2022)</a></li>


                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh EPZ Labor Act 2019 (Bangla).pdf'}>Bangladesh EPZ Labor Act 2019 (Bangla)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh EPZ Labor Act 2019 (English).pdf'}>Bangladesh EPZ Labor Act 2019 (English)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh EPZ Labour Rules 2022 (Bangla).pdf'}>Bangladesh EPZ Labour Rules 2022 (Bangla)</a></li>

                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Environment_Conservation_Act_1995_Bangla.pdf'}>Bangladesh Environment Conservation Act 1995 Bangla</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh Environment Conservation Act 1995 (English).pdf'}>Bangladesh Environment Conservation Act 1995 (English)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh_Environment_Conservation _Rules_1997_(Bangla).pdf'}>Bangladesh Environment Conservation Rules 1997 (Bangla)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh Environment Conservation  Rules 1997 (English).pdf'}>Bangladesh Environment Conservation Rules 1997 (English)</a></li>


                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh National Building Code (BNBC), 2020 (English).pdf'}>Bangladesh National Building Code (BNBC), 2020 (English)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Bangladesh Standards and Guideline for sludge management 2016 (English).pdf'}>Bangladesh sludge management 2016 (English)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Dangerious Waste Management Rules 2012 (Bangla).pdf'}>Dangerious Waste Management Rules 2012 (Bangla)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Medical Wastage Rules 2008.pdf'}>Medical Wastage Rules 2008</a></li>

                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/Sound Pollution Control Rules 2006 (Bangla).pdf'}>Sound Pollution Control Rules 2006 (Bangla)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/The Acid Control Act 2002.pdf'}>The Acid Control Act 2002</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/The Constitution of the Peoples Republic of Bangladesh.pdf'}>The Constitution of Bangladesh</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/The Gas Cylinder Rules 1991 (Bangla).pdf'}>The Gas Cylinder Rules 1991 (Bangla)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/The Petroleum Act_ 1934.pdf'}>The Petroleum Act_ 1934</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/The Petroleum Act_ 1937.pdf'}>The Petroleum Act_ 1937</a></li>

                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/SA8000 International Standard 2014 (Bangla).pdf'}>SA8000 International Standard 2014 (Bangla)</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/SA8000 International Standard 2014 (English).pdf'}>SA8000 International Standard 2014 (English)</a></li>


                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/ILO Convenstion_ C029 - Forced Labour Convention, 1930 (No. 29).pdf'}>ILO Convenstion_ C029 - Forced Labour Convention, 1930</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/ILO Convenstion_ C087 - Freedom of Association and Protection of the Right to Organise Convention, 1948 (No. 87).pdf'}>ILO Convenstion_ C087 - Freedom of Association Convention, 1948</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/ILO Convenstion_ C098 - Right to Organise and Collective Bargaining Convention, 1949 (No. 98).pdf'}>ILO Convenstion_ C098 - Right to Organise and Collective Bargaining Convention, 1949</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/ILO Convenstion_ C100 - Equal Remuneration Convention, 1951 (No. 100).pdf'}>ILO Convenstion_ C100 - Equal Remuneration Convention, 1951</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/ILO Convenstion_ C105 - Abolition of Forced Labour Convention, 1957 (No. 105).pdf'}>ILO Convenstion_ C105 - Abolition of Forced Labour Convention, 1957</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/ILO Convenstion_ C111 - Discrimination (Employment and Occupation) Convention, 1958 (No. 111).pdf'}>ILO Convenstion_ C111 - Discrimination Convention, 1958</a></li>
                    <li><a className="footer-download-link-bdcolor" download href={process.env.PUBLIC_URL + '/assets/download/ILO Convenstion_ C182 - Worst Forms of Child Labour Convention, 1999 (No. 182).pdf'}>ILO Convenstion_ C182 - Worst Forms of Child Labour Convention, 1999</a></li>
                </ul>

            </marquee>

        </div>

    );
}

export default DowndoalArea;