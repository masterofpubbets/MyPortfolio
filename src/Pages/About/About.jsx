import { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    return (
        <div className="container main-div">
            <div class="divider"></div>
            <div class="section">
                <h5>About</h5>
            </div>

            <blockquote className="blockquote-blue">
                <p className="fontsize-12em">"Let's get acquainted! My name is Eslam Aly and i am a Product Owner,
                    and it took me so long until i reach here.
                    20 years ago i graduated from Faculty of Sciences Mathematics and computer sciences division so I was born to this career as a programmer and I love it so much. I love to build things that works and fitting together to solve another person’s problem. </p>
            </blockquote>
            <blockquote>
                <p className="fontsize-12em">Now after a way long of studying and working experience I am a specialist in Product Management, and I am always coaching my team and leading them to continue building things together that work and fit together.</p>
            </blockquote>
            <blockquote className="blockquote-brwon">
                <p className="fontsize-12em">Motivated and forward-thinking product owner with 18+
                    years of experience in a dynamic SaaS environment.
                    Eager to support team with leadership and guidance over
                    a wide range of product development efforts in order to
                    maximize the
                    value of the product and reducing the time
                    required for product completion in line with the company
                    roadmap and market changes.</p>
            </blockquote>
        </div>
    );

}

export default About;