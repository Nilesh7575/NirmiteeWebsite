import React from 'react'
import './Service.css'





const data = [
    { content: 'Today’s organizations face an explosion of data from more sources than ever before. As a result, many companies are re-thinking their approach to traditional enterprise storage and architecture to leverage big data. Big Data also gives companies the opportunity to track and analyse new business insights and consumer behaviour.' },
    { content: 'At Nirmitee.io, we are building a center of excellence for Big Data and work on a myriad of technologies to help businesses leverage their data and make acquire new customers.' },
    { content: 'Nirmitee.io uses a mix of technologies to build a data science software platform for Analysts and Data Scientists to explore, prototype and analyse tons of unstructured or structured data in an efficient way.' },
    { content: 'We focus on creating a unified data platform to help businesses focus on solving real problems. Right from creating an optimized platform to accelerate business performance to providing predictive analysis and customer insights, Nirmitee.io provides innovative and customized big data solutions for your business.' },
    { content: 'Some of the Big data technologies that we use at Nirmitee.io are as below:' },
]

const list = [
    "Apache Hadoop",
    "Cassandra",
    "Hive",
    "Apache Spark",
    "Pig",
    "Scala",
    "Kafka"
]


const BigData = () => {
    return (
        <div className="service_main">
            <div class="Service_innerPageBanner">
                <img src="https://cdn.nirmitee.io/CaseStudies/Fintech.jpg" alt="" />
                <h1>Big Data Technologies</h1>
            </div>
            <div className="Service_container container">
                <h5><em>Enabling Data Driven Decisions with Big Data</em></h5>
                <h5 className="heading">BIG DATA SOLUTIONS FOR BUSINESS</h5>
                {data.map((ele, index) => {
                    return (
                        <div key={index} className="Service_container-inner" style={{ marginBottom: "20px" }}>
                            <span>{ele.content}</span>
                        </div>
                    )
                })}
                {list.map((ele, index) => {
                    return (
                        <ul key={index}>
                            <li>{ele}</li>
                        </ul>
                    )
                })}
                <h5 className="sub-heading">Big Data Solutions that will benefit your Business</h5>
                <div className="Service_container-inner" style={{ marginBottom: "20px" }}>
                    <span>At Nirmitee.io we understand how Big Data can change your business fortune. We give you the data intelligence that can help you make your business more effective. </span>
                </div>
            </div>
        </div>
    )
}

export default BigData