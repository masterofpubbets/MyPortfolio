import './Articles.css';
import AvatarList from '../../Components/Lists/AvatarList';
import Table from '../../Components/Tables/Table';
import coverImg from '../../Assets/manager.png';
import proStrategyImg from '../../Assets/procompvision.png';
import userNeedImg from '../../Assets/userneeds.jpg';
import sweetSpotImg from '../../Assets/sweetspot.png';


function ArticlePO() {
    const listItems = [{
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "equalizer",
        title: "Analyzing the industry and competition",
        text: "The key to developing a competitive strategy is to understand the sources of the competitive forces."
    },
    {
        backColor: "transparent",
        iconBackColor: "teal darken-1",
        iconName: "monetization_on",
        title: "Maximizing ROI",
        text: "Return on investment (ROI) is a performance measure used to evaluate the efficiency of an investment or compare the efficiency of several investments."
    },
    {
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "date_range",
        title: "Forecasting and assessing feasibility",
        text: "The purpose of a financial feasibility study is to determine if a project will be viable for an organization or business."
    },
    {
        backColor: "transparent",
        iconBackColor: "light-blue darken-1",
        iconName: "developer_board",
        title: "Developing product strategy",
        text: "A product development strategy is a process of bringing a new product into an existing."
    },
    {
        backColor: "transparent",
        iconBackColor: "light-blue darken-1",
        iconName: "developer_board",
        title: "Planning releases",
        text: "When and how the product increment will be delivered to the end-user or market."
    },
    {
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "hot_tub",
        title: "Identifying customers and their needs",
        text: "Create a good analysis of what customers need versus what they want."
    },
    {
        backColor: "transparent",
        iconBackColor: "light-blue darken-1",
        iconName: "map",
        title: "Roadmapping the product",
        text: "A shared source of truth that outlines the vision, direction, priorities, and progress of a product over time."
    },
    {
        backColor: "transparent",
        iconBackColor: "orange darken-4",
        iconName: "adb",
        title: "Auditing results",
        text: "Identifies the level at which a business unit is currently achieving its business objectives."
    },
    {
        backColor: "transparent",
        iconBackColor: "orange darken-4",
        iconName: "phone_in_talk",
        title: "Creating outbound messaging",
        text: "Establish the communications channels to stakeholders, scrum team and customers for who has to know what on when."
    },
    {
        backColor: "transparent",
        iconBackColor: "light-blue darken-1",
        iconName: "business_center",
        title: "Creating the business case",
        text: "A business case is a concise, yet thorough document that's meant to answer the what, why, how, and who questions of your project."
    },
    {
        backColor: "transparent",
        iconBackColor: "teal darken-1",
        iconName: "build",
        title: "Identifying product requirements",
        text: "completely defines the purpose of a product or feature and explains what the product should include."
    },
    {
        backColor: "transparent",
        iconBackColor: "teal darken-1",
        iconName: "dialpad",
        title: "Defining product features and initiatives",
        text: "A product's traits or attributes that deliver value to end-users and differentiate a product in the market."
    }
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
                <p className="article-cover-header light-blue-text text-darken-3">Product Owner Framework</p>
                <img src={coverImg} className="center" alt=""></img>
                <div className='article-cover-footer grey-text text-darken-2'>
                    <p>Created By: Eslam Aly</p>
                    <p>Created On: Feb 10th 2022</p>
                </div>
            </div>

            <section>
                <div className='container'>
                    <div className='articale-my-word'>
                        <p>During my job as a product owner I have developed this framework in order to have a clear guides keys on my daily work,
                            and trying to be organize and not to forget any analysis step that i have created to be as my rules.<br></br>
                            Not all the projects i have used this framework as a complete list of tasks, but it is helpful to list whatever step i need to do
                            depends on the current state of the project and what type of ROI we are expecting.<br></br>
                            As a product owner you will be responsible for the product vision, strategy and delivery so i hope this framework
                            can help to monitor your work and be sure that the most important steps are not missed out.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>PRODUCT MANAGEMENT AND SCRUM</h5>
                        <p>Building products requires that you consider a series of strategic activities. Consider the following list:</p>
                    </div>
                    <AvatarList items={listItems} />
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Company Vision and Business Strategy</h5>
                        <p>Study the company vision and the way to achieve that vision through the business strategy.</p>
                        <p className='article-text-input'>Input: Company Architectures and CEO</p>
                        <p className='article-text-output'>Output: Definition of Done Item for the product</p>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Product Vision</h5>
                        <p>Create the product vision based on (Business requirement, Stakeholders requirement), and this vision must be applied to the company’s one.
                            Simply it is the Why we are building the product.
                        </p>
                        <p className='article-text-input'>Input: Business requirement, Stakeholders requirement and Company Vision</p>
                        <p className='article-text-output'>Output: Product Vision and it must contain practical and emotions</p>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Product Strategy</h5>
                        <p>A product strategy is a high-level plan describing what a business hopes to accomplish with its product and how it plans to do so.
                            Simply it elaborates how to realize the vision

                        </p>
                        <p className='article-text-input'>Input: Product vision</p>
                        <p className='article-text-output'>Output: Goals, OKRs, ROI, Cost of delay, Cost structure, Product values, types of value and its metric and Revenue stream </p>
                    </div>
                    <img className='size-height-20em' src={proStrategyImg} alt="Product Strategy"></img>
                    <div className='sub-paragraph'>

                        <div className="section">
                            <h6>Process</h6>
                            <blockquote>
                                <p className='AppColorLightRed'>1- Identify Business Goals.</p>
                                <p>Business goals are goals that a business anticipates accomplishing in a set period of time.
                                    You can set business goals for your product in general as well as for particular departments, employees,
                                    managers and/or customers. Goals typically represent a company's larger purpose and work to establish an end-goal for
                                    employees to work toward. Business goals do not have to be specific or have clearly defined actions. Instead, business
                                    goals are broad outcomes that the company wishes to achieve.
                                </p>
                            </blockquote>

                            <blockquote>
                                <p className='AppColorLightRed'>2- Identify Objectives.</p>
                                <p>When you set an objective, you should include each step necessary for success. To help, you can use a framework
                                    called SMART goals. Here’s how SMART goals work and a few tips and examples to assist you in your goal-setting efforts.
                                    SMART is an acronym that stands for Specific, Measurable, Achievable, Relevant and Time-based. Each element of
                                    the SMART framework works together to create a goal that is carefully planned, clear and trackable.
                                    <br></br><span>S = Specific</span><br></br>
                                    Be as clear and specific as possible with what you want to achieve. The more narrow your goal, the more you’ll
                                    understand the steps necessary to achieve it.
                                </p>
                                <p className='article-p-example'>
                                    Example: “I want to earn a position managing a development team for a startup tech company.”
                                </p>
                                <p>
                                    <br></br><span>M = Measurable</span><br></br>
                                    What evidence will prove you’re making progress toward your goal? For example, if your goal is to earn a position
                                    managing a development team for a startup tech company, you might measure progress by the number of management positions
                                    you’ve applied for and the number of interviews you’ve completed. Setting milestones along the way will give you the
                                    opportunity to re-evaluate and course-correct as needed. When you achieve your milestones, remember to reward yourself
                                    in small but meaningful ways.
                                </p>
                                <p className='article-p-example'>
                                    Example: “I will apply to three open positions for the manager of a development team at a tech startup.”
                                </p>
                                <p>
                                    <br></br><span>A = Achievable</span><br></br>
                                    Have you set an achievable goal? Setting goals you can reasonably accomplish within a certain timeframe will
                                    help keep you motivated and focused. Using the above example of earning a job managing a development team, you
                                    should know the credentials, experience and skills necessary to earn a leadership position. Before you begin working
                                    toward a goal, decide whether it’s something you can achieve now or whether there are additional preliminary steps you
                                    should take to become better prepared
                                </p>
                                <p className='article-p-example'>
                                    Example: “I will update my resume with relevant qualifications, so I can apply to three open positions for the
                                    manager of a development team at a tech startup.”
                                </p>
                                <p>
                                    <br></br><span>R = Relevant</span><br></br>
                                    When setting goals for yourself, consider whether or not they are relevant. Each of your goals should align with
                                    your values and larger, long-term goals. If a goal doesn’t contribute toward your broader objectives, you might
                                    rethink it. Ask yourself why the goal is important to you, how achieving it will help you and how it will contribute
                                    toward your long-term goals.
                                </p>
                                <p className='article-p-example'>
                                    Example: “To achieve my goal of being in leadership, I will update my resume with relevant qualifications so I can apply
                                    to three open positions for the manager of a development team at a tech startup.”
                                </p>
                                <p>
                                    <br></br><span>T = Time-based</span><br></br>
                                    What is your goal time-frame? An end-date can help provide motivation and help you prioritize.
                                    For example, if your goal is to earn a promotion to a more senior position, you might give yourself six months.
                                    If you haven’t achieved your goal in that timeframe, take time to consider why. Your timeframe might have been unrealistic,
                                    you might have run into unexpected roadblocks or your goal might have been unachievable.
                                </p>
                                <p className='article-p-example'>
                                    Example: “To achieve my goal of being in leadership, I will update my resume with relevant qualifications so I
                                    can apply to three open positions for the manager of a development team at a tech startup this week.”
                                    The OKR & ArchiMate Approach
                                    The introduction of this new sales channel is based on an agile approach. For the time being, the focus will be on
                                    early customer feedback. Only in the later phases will the focus be on the technical infrastructure. Central to each
                                    cycle of the project are the “Objectives & Key Results” (OKR), which will generate a measurable added value for GreenEnergy
                                    and its customers (Note: Basics of OKR are not discussed further here, please contact us for more information).
                                </p>
                                <p className='article-p-note'>
                                    At the end of an OKR cycle there is a target state, in ArchiMate, “plateaus”. Objectives can be represented in
                                    ArchiMate by Goals, Key Results by Outcomes. The first cycle (Plateau 1) is formulated in OKR Planning.
                                    For each OKR set, the responsible teams must make a commitment. Our first cycle includes subsequent OKRs.
                                </p>
                            </blockquote>

                            <blockquote className='blockquote-blue'>
                                <p className='AppColorDarkBlue'>3- Identify your target audience.</p>
                                <p>Your target audience refers to the specific group of consumers most likely to want your product or service,
                                    and therefore, the group of people who should see your ad campaigns. Target audience may be dictated by age, gender,
                                    income, location, interests or a myriad of other factors.
                                </p>
                                <div className='hide-on-small-only'><Table headers={["Persona", "Skills", "Geo Location", "Gender", "Age", "% of total audience"]} data={["---"]} /></div>
                                <p className='AppColorDarkBlue center'>(Persona Table)</p>
                            </blockquote>

                            <blockquote className='blockquote-blue'>
                                <p className='AppColorDarkBlue'>4- Identify what users need.</p>
                                <p>
                                    Another thing is to create what user needs not what user wants<br></br> and to identify what this need intersects with business goal.
                                </p>
                                <img className='size-height-20em' src={userNeedImg} alt="User Needs"></img>
                                <p className='AppColorDarkBlue'>(User Wants Vs User Needs illustration)</p>
                                <img className='size-height-20em' src={sweetSpotImg} alt="Sweet Spot"></img>
                                <div className='hide-on-small-only'><Table headers={["User Wants", "User Needs", "Business Goal"]} data={["---"]} /></div>
                            </blockquote>

                            <blockquote className='blockquote-dark-yellow'>
                                <p className='AppColorDarkYellow'>5- Users survey.</p>
                                <p>
                                    User survey tools help you better understand who your users really are, track customer satisfaction,
                                    or get feedback on new product features.
                                </p>
                                <div className='sub-sub-paragraph'>
                                    <p>•	Ask a neutral question</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        Always try to ask something neutral, avoid leading questions because it won’t add any value to your research.
                                        Leading questions are intimidating. Consider this if you ask someone about a bill splitting feature in the
                                        e-commerce app most of the people will say “yes” even though they don’t need it. If you add it they might not use it
                                        twice (might use once for your satisfaction). Another example could be “Why do you like this?” Instead of “What do
                                        you think of this?”
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	Easy and simple Questions.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        Keep the language, meaning, and context clear for all the questions. If they need to ask someone about the question
                                        or to Google, the meaning you haven’t done your job effectively. If your survey is supposed to send to different
                                        regions or countries, consider adding support in the local language. Also, keep in mind questions would be different.
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	Keep it Transparent.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        If you are using the data that some people might have a problem sharing it publicly, tell them upfront in the beginning.
                                        Ask them if they are comfortable to share these details with you? If they agree then only proceed.
                                        If you be honest with your users that what you are going to use their data by telling a few benefits
                                        you are more likely to get the qualitative data.
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	Respect your user's anonymity.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        Privacy means everything to the users! If you ask someone to share their phones with you for 5 minutes.
                                        There are two things that would keep bugging them first is their privacy and second is you may run away.
                                        So, the real life reflects in the digital world as well. Ask them do they want to share their names, gender,
                                        age and other determining factors or not. But before that ask yourself do you really need that data?
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	Understand the problem/Goal.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        Before getting down penning down the questions, we need to have a clear knowledge of what we are trying to accomplish
                                        (learn) about our user from this particular survey. How would the end result help us?
                                        The goal or goals can be defined by stakeholder meetings for example: what the new feature
                                        we are trying to add to our product fits with the habits of our users, Quantitative Insights of the products
                                        such as a large no. of customers are dropping at the payment part.
                                        What you are trying to learn about your user should be crystal clear to you and the team involved.
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	Design for Conditionality.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        Some questions are meaningless to some users because they do not fit the personas or this question might
                                        be dependent on the last questions to which user choose an option after which this question does not apply.
                                        Try to apply logic in those questions so that users can avoid those questions that aren’t meant for them.
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	Keep it open.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        Try to keep the questionnaire open as possible to get the preference, cause, motivation, and reason for the
                                        particular actions, response or reactions. For e.g. If you are conducting a survey for using a particular
                                        product and you ask question “do you use x?” answer would be yes or no you would get a quantitative number but if
                                        you ask “How would you describe x?” you get a reason they might haven’t explored it, liked it or possibly thousand other reasons.
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	Ask one concept at a time.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        Avoid questions that contain two concepts. Do not mix things up. It is confusing and also it degrades the quality of your data.
                                        For e.g. a question like “How often do you shop for Shoes and Tshirt?” is an incorrect way to ask.
                                    </p>
                                </div>

                                <div className='sub-sub-paragraph'>
                                    <p>•	You may influence by how you ask or order of option.</p>
                                    <p className='sub-sub-sub-paragraph'>
                                        The way you ask something and the way you arrange options matters more than you think. It may introduce biases in the
                                        selection of a user. For e.g. “How would you rate product X?” is a better question to ask than
                                        “What do you really love about X?”
                                    </p>
                                </div>

                            </blockquote>

                            <blockquote className='blockquote-blue'>
                                <p className='AppColorDarkBlue'>6- Understand the problem</p>
                                <p>
                                    Problem definition plays a crucial role in product strategy. The product you design should help your users
                                    solve their problems. You need to not only identify the problem, but also ensure that this problem is worth
                                    solving (i.e. that your target audience really needs a solution for this problem and is willing to pay money for it).
                                    It’s critical to understand the core reason why you want to build a product (your business motivators)
                                    and then evaluate your product decisions in terms of the value they bring to your users (potential conversion).
                                </p>
                            </blockquote>

                            <blockquote className='blockquote-blue'>
                                <p className='AppColorDarkBlue'>7- Define the current state and target condition</p>
                                <p>
                                    For many organizations, it’s possible to define two states—current state (the state of your product experience today),
                                    and the target condition (the ultimate user experience toward which you’re aiming). Vision helps you define a destination
                                    (target condition). You can plan your route towards the target destination by focusing on precisely what you need to build.
                                    By setting the goal (challenge), you can adjust the direction of your product efforts. It’s essential to invest time in analyzing,
                                    measuring, and quantifying challenges before the team starts to work on your project.
                                </p>
                            </blockquote>

                            <blockquote className='blockquote-red'>
                                <p className='AppColorRed'>8- Stay in sync with other teams</p>
                                <p>
                                    No matter how good your product design is, it only exists if people know it and follow it.
                                    The product strategy should be the result of a cross-functional collaboration between core teams:
                                    design, development, marketing, and sales.
                                </p>
                            </blockquote>

                            <blockquote className='blockquote-dark-yellow'>
                                <p className='AppColorDarkYellow'>9- Study competitors</p>
                                <p>
                                    Identify the competitors.<br></br>Compare between competitor’s product and yours in product most valuable features.
                                </p>
                                <div className='hide-on-small-only'><Table headers={["Competitor name", "Feature", "Exists in our strategy"]} data={["---"]} /></div>
                            </blockquote>

                            <blockquote className='blockquote-blue'>
                                <p className='AppColorDarkBlue'>10- Define the success metrics</p>
                                <p>
                                    It’s not enough to set a direction—it’s also essential to measure how fast you are moving towards the goal.
                                    Metrics help a team measure performance and know if they are on track.
                                    If you’re looking for practical recommendations on how to choose proper metrics,
                                    I recommend starting with Objectives and Key Results, or OKRs. In this model, objectives are what you want your
                                    company to achieve, and key results are how you intend to measure that objective. What numbers would move? Objectives
                                    should be inspiring, while key results should be measurable
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
                        <h5>Develop Product Roadmap</h5>
                        <p>A product roadmap is a plan of action for how a product or solution will evolve over time.</p>
                        <p className='article-text-input'>Input: Goals, OKRs, Initiatives and Team speed if available</p>
                        <p className='article-text-output'>Output: Product roadmap with these key elements</p>
                    </div>
                    <p>Roadmap Types:</p>
                    <AvatarList items={roadmapTypes} />

                    <div className='sub-paragraph'>
                        <div className="section">
                            <h6>Develop Product Roadmap Process</h6>
                        </div>
                        <p className='article-text-input'>Roadmap Input Types: Goals, OKRs, Initiatives and Team speed if available.</p>
                        <p className='article-text-output'>Roadmap Output Types:</p>
                        <AvatarList items={roadMapOutputType} />
                    </div>
                    <div className='sub-paragraph'>
                        <div className="section">
                            <h6>Process List</h6>
                        </div>
                        <p>
                            1-	Define your product strategy.<br></br>
                            2-	Review and manage ideas.<br></br>
                            3-	Define (High features roadmap).<br></br>
                            4-	Divide each HF into epics.<br></br>
                            5-	Create features for each epic.<br></br>
                            6-	Divide each feature into user stories.<br></br>
                            7-	Organize into releases.<br></br>
                            8-	Create value stream for each release.<br></br>
                            9-	Create product backlog items (PBI) based on the defined user stories.<br></br>
                        </p>
                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Final</h5>
                        <p>Product owner is a visionary for the product and as per scrum there is no restrictions or 
                            limitation for any tool or procedures to use in order to do the work, so I hope that that 
                            framework can give you ideas and key points but no limited to.
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

export default ArticlePO;