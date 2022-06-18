import React from 'react'
import './Service.css'





const data = [
    {
        head: "1) AI for Sales Boost",
        content: "What if your sales technology was so smart that it knew the deals you were working on through your calendar, email, and phone interactions? That’s AI in action. It automatically builds and monitors your pipeline so that you can focus on closing more deals rather than on manual data entry. Too much on your plate? Use AI as your sales assistant in finding the data you need, reminding you to follow-up with certain prospects, and ensuring nothing falls through the cracks."
    },
    {
        head: "2) AI for Innovative Marketing Solutions",
        content: "Marketing teams today have better and smarter ways to attract new customers. The big data trend gives companies a jaw-dropping amount of information on buyer behaviour, but no real way to utilize it. Just add AI, and you’ve got accurate predictions and qualified leads. Now marketers can categorize and build audiences based on the likely future actions of users. AI can even automate email timing, offer customer recommendations, and predict customer sentiments and purchasing behaviour from time to time."
    },
    {
        head: "3) AI for Customer Retention and Customer Service",
        content: "How do you know when customers aren’t happy if they don’t tell you? Until now, customer service departments were half-expected to employ mind readers to understand customer needs. Now AI can capture signals that your team might miss and can find correlations and sentiments in customer data. If it seems like a customer may not feel so great about your company, you can take proactive steps to turn the relationship around before he tells you he’s unhappy."
    },
    {
        head: "4) AI for Fashion",
        content: "With AI, you can create a personal shopping assistant for your customers. You can create an immersive shopping experience for your customers and understand their style preferences, pricing points and based on this real-time information, you can show popular picks and target customers who are more likely to buy your products. Creating a fashion / personal shopping assistant with AI will help you eliminate much of the researching process on both ends and bring you closer to your customers."
    }
]


const ArtificialIntelligence = () => {
    return (
        <div className="service_main">
            <div class="Service_innerPageBanner">
                <img src="https://cdn.nirmitee.io/CaseStudies/Fintech.jpg" alt="" />
                <h1>Artificial Intelligence</h1>
            </div>

            <div className="Service_container container">

                <h1 className="main-heading" style={{ fontSize: "30px" }}>ARTIFICIAL INTELLIGENCE FOR YOUR BUSINESS</h1>
                <h4 className="main-sub-heading" style={{ fontSize: "22px" }}>Best Artificial Intelligence solutions provider</h4>
                <div className="Service_container-inner">
                    <span>Artificial Intelligence is a tool that has started affecting our lives in a huge manner. At Nirmitee.io, we have analysed and understood its potential. And as with other technologies, we are prepared and geared up to tap the potential of AI. Artificial Intelligence comes along with its sets of risks. So, unless a professional or an experienced organisation handles your AI projects, the drawbacks may soon overtake the advantages.</span>
                </div>

                <h4 className="sub-heading">Artificial Intelligence – Today</h4>
                <div className="Service_container-inner" style={{ marginTop: "20px" }}>
                    <span>Practical artificial intelligence has made its way out of the labs and into our daily lives. And judging from the pace of activity in the startup community and the major IT powerhouses, it will only grow in its ability to help us get things done.</span>
                </div>
                <div className="Service_container-inner" style={{ marginTop: "20px" }}>
                    <span>Most AI solutions today are fielded by the big players in IT.  For example, Apple’s Siri or the capabilities Apple has embedded directly in iOS11, Google’s many savvy search solutions, Amazon’s very smart recommendation engine, and IBM’s Watson, all of them have proven that Artificial Intelligence is here to stay.</span>
                </div>
                <div className="Service_container-inner" style={{ marginTop: "20px" }}>
                    <span>We expect to see a new wave of AI solutions that deliver value from smaller start-up companies as well. This is a very crowded space, with plenty of VC funding for entrepreneurs with capabilities in a wide-range of AI disciplines.</span>
                </div>

                <h4 className="sub-heading">Artificial Intelligence Solutions to empower your business</h4>
                <div className="Service_container-inner">
                    <span>We are heavily dependent on Artificial Intelligence, for example when we order from Amazon, or ask Siri for directions, chat with a customer service representative, get fashion recommendations or add a suggested friend on Facebook, fraud detection, music recommendations, the list just goes on.</span>
                </div>

                {data.map((ele, index) => {
                    return (
                        <div key={index}>
                            <h3 className="heading" style={{ marginTop: "20px" }}>{ele.head}</h3>
                            <div className="Service_container-inner" style={{ marginTop: "20px" }}>
                                <span>{ele.content}</span>
                            </div>
                        </div>
                    )
                })}



            </div>
        </div>
    )
}

export default ArtificialIntelligence