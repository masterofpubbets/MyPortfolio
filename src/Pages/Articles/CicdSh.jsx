import { React } from 'react';
import './Articles.css';
import { useEffect } from 'react';
import AvatarList from '../../Components/Lists/AvatarList';
import cicdImg from '../../Assets/cicd.png';
import selfHostingImg from '../../Assets/self-hosting-diagram.drawio.png';
import cicd2Img from '../../Assets/cicd2.png';
import cicdshImg from '../../Assets/cicd-sh-Flow-Diagram.drawio.png';
import pipflowImg from '../../Assets/pipeline-flow.drawio.png';


function Cicd() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    const listItems = [{
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "group_work",
        title: "Develop the main product",
        text: "The agile team do the product roadmap and release the artifact."
    },
    {
        backColor: "transparent",
        iconBackColor: "teal darken-1",
        iconName: "map",
        title: "Design the Network Topology",
        text: "Later on when all service are on will be so hard to maintain or modify without having a good topology map shows who serves who by what, so it is a must to do, also it is a time consuming when some service are running and conflict happen so it is always a good practice if you have a full image first."
    },
    {
        backColor: "transparent",
        iconBackColor: "light-blue darken-1",
        iconName: "computer",
        title: "Create servers",
        text: "We need more than one dedicated server you can combine all service in one server but this won’t be good practice because of reachability and scalability. So the best choice for performance and security is Linux (Ubuntu is my favorite) only one condition you will have to have MS Windows server is when you design a desktop application using Dot Net Framework then you need Jenkins node server installed on MS Windows (which has same Dot Net framework installed) in order to test and compile the code."
    },
    ]

    const roadmapTypes = [{
        backColor: "transparent",
        iconBackColor: "light-blue darken-1",
        iconName: "repeat",
        title: "Strategy Roadmap",
        text: "Displays the high-level efforts that you plan to invest in to achieve your product goals. A strategy roadmap is great for presenting progress on initiatives to leadership and keeping cross-functional teams aligned on overarching business strategy."
    },
    {
        backColor: "transparent",
        iconBackColor: "orange darken-4",
        iconName: "swap_vertical_circle",
        title: "Portfolio Roadmap",
        text: "Shows planned releases across multiple products in a single view. Portfolio roadmaps are useful for providing a strategic overview of your plan to leadership and a broad view of how multiple product teams work together."
    },
    {
        backColor: "transparent",
        iconBackColor: "orange darken-4",
        iconName: "refresh",
        title: "Release Roadmap",
        text: "Communicates the activities that must happen before you can bring releases to market — what needs to be done when and who is responsible for delivery. Release roadmaps are helpful for coordinating release activities with other cross-functional teams, such as marketing, sales, and customer support."
    },
    {
        backColor: "transparent",
        iconBackColor: "teal darken-1",
        iconName: "receipt",
        title: "Epics Roadmap",
        text: "Communicates the activities that must happen before you can bring releases to market — what needs to be done when and who is responsible for delivery. Release roadmaps are helpful for coordinating release activities with other cross-functional teams, such as marketing, sales, and customer support."
    },
    {
        backColor: "transparent",
        iconBackColor: "teal darken-1",
        iconName: "dialpad",
        title: "Features Roadmap",
        text: "Shows the timeline for when new features will be delivered. Features roadmaps are perfect for communicating the details of what is coming and when to customers and other teams."
    }
    ]

    const roadMapOutputType = [
        {
            backColor: "transparent",
            iconBackColor: "red darken-2",
            iconName: "gps_fixed",
            title: "Goals",
            text: "Measurable, time-bound objectives with clearly defined success metrics. Goals represent the critical accomplishments needed to deliver your product."
        },
        {
            backColor: "transparent",
            iconBackColor: "amber accent-4",
            iconName: "adjust",
            title: "Initiatives",
            text: "High-level themes of work describing how your efforts will contribute to your goals. On a roadmap, initiatives show how specific releases and features relate to your strategy."
        },
        {
            backColor: "transparent",
            iconBackColor: "teal darken-1",
            iconName: "cached",
            title: "Releases",
            text: "A launch of new product functionality represented on a timeline. Releases often contain multiple features that get delivered at the same time."
        },
        {
            backColor: "transparent",
            iconBackColor: "light-blue darken-1",
            iconName: "dialpad",
            title: "Epics",
            text: "Larger bodies of work (like categories) that typically span multiple releases. Epics break down into smaller features that are delivered incrementally."
        },
        {
            backColor: "transparent",
            iconBackColor: "teal darken-1",
            iconName: "list",
            title: "Features",
            text: "A specific piece of new or improved functionality that results in value to users. Features can be related to capabilities, components, appearance, and performance."
        },
        {
            backColor: "transparent",
            iconBackColor: "amber accent-4",
            iconName: "schedule",
            title: "Timeline",
            text: "A visualization of when product releases will occur over time. The time scale can range anywhere from days to quarters or years depending on the amount of work and level of detail involved in a particular release."
        }
    ]

    return (
        <div className="main-div">
            <div className="article-cover">
                <p className="article-cover-header light-blue-text text-darken-3">CICD with Self Hosting</p>
                <img src={cicdImg} className="center" alt=""></img>
                <div className='article-cover-footer grey-text text-darken-2'>
                    <p>Created By: Eslam Aly</p>
                    <p>Created On: May 23th 2024</p>
                </div>
            </div>

            <section>
                <div className='container'>
                    <div className='articale-my-word'>
                        <p>Nothing compared to have your product under your rules and no one else can set rules over you,
                            if and only if you have the time and knowledge to set up a good hosting infrastructure and know how to protect it.
                            It is a challenge to secure self-hosting your own product because not only you need to have the best of Development automation environment 
                            such as Git and Jenkins but also you need to secure the Dockerization environment that you will create because you will be exposed to 
                            the public internet in all development and deployment life cycle and you do not need to have cyber-attack.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>PRODUCT DEVELOPMENT AND HOSTING STARTEGY</h5>
                        <p>Below are the main keys to achieve secured grounded infrastructure (It can be dived into 2 goals (CICD and Self-Hosting)) and it can be applied to any system with scalability:</p>
                    </div>
                    <AvatarList items={listItems} />
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>CI/CD</h5>
                        <p>The outcome for this goal is Fast deliver new release or fixing bug of the product.

                        </p>
                        <p className='article-text-input'>Input: Source code changes commitment</p>
                        <p className='article-text-output'>Output: A real outcome is not only New release on deployment server but also the customers feed back about it.</p>
                    </div>
                    <img className='size-height-20em' src={cicd2Img} alt="Product Strategy"></img>
                    <div className='sub-paragraph'>

                        <div className="section">
                            <h5>Process</h5>
                            <blockquote>
                                <p className='AppColorLightRed'>1- Code Commit.</p>
                                <p>Developers push code changes to a shared repository (e.g., GitHub, GitLab)
                                </p>
                            </blockquote>

                            <blockquote>
                                <p className='AppColorLightRed'>2- Automated Build.</p>
                                <p>The system compiles the code and checks for errors.
                                    <br></br><span>Jenkins</span><br></br>
                                    Jenkins is a powerful tool for automating software development workflows, particularly for it.
                                </p>
                                <p className='article-p-example'>
                                    How Jenkins works: Jenkins setup, Create a New Job, Set Up a Pipeline, Integrate with Version Control, Automate Testing, Deploy Applications
                                </p>
                                <p>
                                    <br></br><span>Jenkins setup</span><br></br>
                                    Jenkins is an open source and you can install it on Linux, Mac or Windows for our case study
                                    we going to use Windows as a platform because i am creating windows desktop app.
                                </p>
                                <p>
                                    <br></br><span>Jenkins Job</span><br></br>
                                    A Jenkins Pipeline is a suite of plugins that allows developers to implement and integrate continuous delivery pipelines into Jenkins. 
                                    It enables automation of the software development lifecycle, from building and testing to deployment. and we will
                                    Use Groovy scripting for more flexibility and customization.
                                </p>
                            </blockquote>

                            <blockquote className='blockquote-blue'>
                                <p className='AppColorDarkBlue'>3- Deployment.</p>
                                <p>Continuous Deployment takes automation even further by deploying every successful code change directly to production without manual intervention. 
                                    This approach allows organizations to deliver updates frequently, ensuring users always have access to the latest features and improvements.
                                </p>
                                <br></br><span>Docker</span><br></br>
                                <p>Portability: Containers can run on any system that supports Docker, whether it's a developer's laptop, a testing server, 
                                    or a production environment.
                                </p>
                                <p>Efficiency: Containers share the host operating system's kernel, making them more resource-efficient than traditional virtual machines.
                                </p>
                                <p>Scalability: Docker makes it easy to scale applications by deploying multiple containers.
                                </p>
                                <p>Isolation: Each container operates independently, ensuring that changes in one container don't affect others
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Self-Hosting</h5>
                        <p>The outcome for this goal is to expose the web application to the internet.

                        </p>
                        <p className='article-text-input'>Input: Docker image</p>
                        <p className='article-text-output'>Output: Web application on the internet.</p>
                    </div>
                    <img className='size-height-20em' src={selfHostingImg} alt="Product Strategy"></img>
                    <div className='sub-paragraph'>

                        <div className="section">
                            <h5>Process</h5>
                            <h6>You can divide the services below among the number of computers you have to maximize the reachability and increase performance, but still can work on one computer</h6>
                            <blockquote>
                                <p className='AppColorLightRed'>1- Install the topology core system.</p>
                                <p>This will be repeated on every machine on your network</p>
                                <p className='article-p-example-m'>A- Install Linux Ubuntu on a desired computer.</p>
                                <p className='article-p-example-m'>B- Create user.</p>
                                <p className='article-p-example-m'>C- Update Ubuntu.</p>
                                <p className='article-p-example-m'>D- Install firewall.</p>
                                <p className='article-p-example-m'>E- Denay all incoming ports except those which you need for your web service.</p>
                                <p className='article-p-example-m'>F- Install SSH.</p>
                                <p className='article-p-example-m'>G- Prevent root login.</p>
                                <p className='article-p-example-m'>H- Install SSH public and private key.</p>
                                <p className='article-p-example-m'>I- Prevent SSH login with username and password.</p>
                                <p className='article-p-example-m'>J- Allow SSH login only with key.</p>
                                <p className='article-p-example-m'>K- Install Docker.</p>
                            </blockquote>

                            <blockquote>
                                <p className='AppColorLightRed'>2- Install Main Services.</p>
                                <p>We will use Docker to host all services.
                                    <br></br><span>DNS Server</span><br></br>
                                    Pi-Hole is a good DNS server and it is open source
                                </p>
                                <p className='article-p-example-m'>
                                    Create a local domain which will be link later to reverse proxy something like aly.home.
                                </p>
                                <p className='article-p-example-m'>
                                    Create  C-Name record mapping to web server like eslamaly.aly.home.
                                </p>
                                <p>
                                    <br></br><span>Reverse Proxy</span><br></br>
                                    Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
                                </p>
                                <p className='article-p-example-m'>
                                    The three services above have to in same docker network
                                </p>
                                <p className='article-p-example-m'>
                                    Create reverse proxy record in NginX to map to internal container which act like web server from domain you created for it.
                                </p>
                            </blockquote>

                            <blockquote className='blockquote-blue'>
                                <p className='AppColorDarkBlue'>3- Cloudflare.</p>
                                <p>Cloudflare Tunnel provides you with a secure way to connect your resources to Cloudflare without a publicly routable IP address.
                                </p>
                                <p className='article-p-example-m'>Create an account at Cloudflare if you don't have one.</p>
                                <p className='article-p-example-m'>Register a domain in order to reach your service from internet.</p>
                                <p className='article-p-example-m'>Create a zero trust tunnel.</p>
                                <p className='article-p-example-m'>Run cloudflare docker container in your system with your ID.</p>
                                <p className='article-p-example-m'>Create a new public network with your registered domain.</p>
                                <p className='article-p-example-m'>Map that network to the internal domain you create in Pi-Hole.</p>
                                <p className='article-p-example-m'>Add the new domain in the reverse proxy record.</p>
                                <p className='article-p-example-m'>Add required security checks with cloudflare as you want.</p>
                                <p className='article-p-example-m'>Create same tunnel for Jenkins so it can be reached by Github.</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Service Flow Map</h5>
                        <p>Now you have created the service and expose it to the internet, and it's time to link the CI/CD with your service.</p>
                    </div>

                    <div className='sub-paragraph'>
                        <div className="section">
                            <h6>Develop Product Roadmap Process</h6>
                            <img className='size-height-20em' src={cicdshImg} alt="Product Strategy"></img>
                        </div>
                        <p>The developer needs to add to important file to the source code the first is Jenkinsfile which contains pipeline script for the project and the 
                            second is Dockerfile which has all instruction to create image from the code then will push the staged code to Github, Github will trigger the 
                            Jenkins server by the Webhook. Jenkins will pull the source code and when it finds Jenkinsfile in it will start to execute.
                        </p>
                        <p>The result of Jenkins file and Dockerfile is a deployment artifact on the Docker hub.
                        </p>
                        <p>The Jenkins will communicate with docker installed on the web server in order to update the current image with the new one.
                        </p>
                        <img className='size-height-20em' src={pipflowImg} alt="Product Strategy"></img>
                    </div>


                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Final</h5>
                        <p>CI/CD with Self-Hosting it is not complicated, but it requires to put both of knowledge together with care and study.
                        </p>
                    </div>
                    <div className="section">
                        <h6>Eslam Aly</h6>
                    </div>
                </div>
            </section>

        </div>
    );

}

export default Cicd;