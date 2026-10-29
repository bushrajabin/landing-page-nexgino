import thomasImage from '../assets/thomasimg.avif';

function AboutThomas() {
    return (
        <div className="aboutThomas-container">
            {/* this is about thomas left side */}
            <div className="about-thomas">
                <h2>About Thomas</h2>
                <p>
                    Thomas is a passionate software developer with a keen interest in web development and user experience. He has been working in the tech industry for several years, honing his skills in various programming languages and frameworks. Thomas is dedicated to creating innovative solutions that make a positive impact on users' lives.
                    In his free time, Thomas enjoys contributing to open-source projects, attending tech meetups, and exploring new technologies. He believes in continuous learning and strives to stay updated with the latest trends in the software development world.

                </p>

                <a className="learn-more">Learn more</a>

            </div>

            {/* this is about thomas right side with image */}

            <div className="thomas-right-image">
                <img src={thomasImage} alt="Thomas" className="thomas-image" />

            </div>

        </div>

    );
}

export default AboutThomas;