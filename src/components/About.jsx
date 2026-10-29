import Image from '../assets/images.jpeg'
import "../index.css"
const tags = [
    "International Taxation",
    "Tax Planning",
    "Tax Dispute",
    "Tax Compliance",
    "Consultations"
]

function About() {
    return (

        // thsi is for the about section
        <div className="about">

            {/* this secion is for ledt side */}
            <div className="about-left">
                <p className="mini-tax">Tax Lawyer</p>
                <h1>GUIDING YOUR THROUGH <span className="green-tax">TAX</span> <br /> COMPLEXITY</h1>
                <p className="hero-subtitle">we simply make it easy.</p>

                <button className="button-green">
                    Start  Consultation
                </button>

                {/* here i'm maping tags */}
                <div className="tags">
                    {
                        tags.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))

                    }
                </div>
            </div>

            {/* this section is for abou right side */}
            <div className="about-right">
                <img src={Image} alt="image" className="statue-image" />
            </div>
        </div>
    )
}

export default About;