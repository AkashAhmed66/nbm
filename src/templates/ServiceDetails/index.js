import React, { Fragment, useEffect, useState } from "react";
import PageHeader from '../../components/PageHeader'
import EnvironmentalServices from '../../data/Services/EnvironmentalServices.json'
import SocialServices from '../../data/Services/SocialServices.json'
import GovernanceServices from '../../data/Services/GovernanceServices.json'
import ESGServices from '../../data/Services/ESGServices.json'
import ProgramServices from '../../data/Services/ProgramServices.json'
import OtherServices from '../../data/Services/OtherServices.json'
import PageWrapper from "../../components/PageWrapper";
import RelatedServices from "../../components/RelatedServices";
import ServiceContent from "./ServiceContent";
import axios from "axios";
import mainServices from '../../data/Services/service-one.json'

const ServiceDetails = () => {

	const serviceType = new URLSearchParams(window.location.search).get("type");
	const serviceID = new URLSearchParams(window.location.search).get("id");


	const [service, setService] = useState({});
	const [serviceList, setServiceList] = useState([]);

	useEffect(async () => {
		if (serviceID) {
			await getServiceDetails(serviceID);
		}
		
	}, [serviceID]);
	
	const getServiceDetails = async () => {

		if (serviceType == 'main') {
			let serviceData = mainServices.find((serviceItem) => serviceItem.id === parseInt(serviceID));
			setService(serviceData);
			serviceList = mainServices
		} else {
			try {
                const response = await axios.get(`https://portal.nbm-intl.com/api/service-details/${serviceID}`);
                setService(response.data.data);

				const res = await axios.get(`https://portal.nbm-intl.com/api/category-wise-service/${response.data.data.service_category_id}`);
				setServiceList(res.data.data)
            } catch (err) {
				console.log(err);
            }
		}
	};

	return (
		<Fragment>

			<PageHeader
				bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
				title={service.title}
			/>

			<PageWrapper classes="single_service_section">

				<ServiceContent
					service={service}
					serviceList={serviceList}
				/>
			</PageWrapper>

			<RelatedServices serviceList={serviceList} />

		</Fragment>
	);
};

export default ServiceDetails;



