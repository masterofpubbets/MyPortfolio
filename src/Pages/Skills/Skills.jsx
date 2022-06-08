import { useEffect } from "react";
import Card from "../../Components/Cards/Card";

function Skills() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    return (
        <div className="row main-div">

            <div className="col s12 m12 l12">
                <div className="divider"></div>
                <div className="section">
                    <h5>Skills</h5>
                </div>
            </div>

            <Card
                progress="100"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Scrum"
                cardText="Specializing in leading high-performing and multi-disciplinary teams from product development through successful product launches. Accustomed to managing multiple projects and priorities in fast-paced environments."
                footer1="Since 2018"
                footer2="Used in 7 Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Two years after working in tecnicas reunidas I had been promoted as a Scrum master with maintaining previous role as chief developer, but then I was responsible to be sure that the other teams working in a collaborating and peaceful environment as coaching them how scrum framework should maintain for its pillars and values and removing impediments for reaching the company strategic goal which is fast delivering and continues improving. Projects I have worked as scrum master are (EICA App, Graphical Reports App, Loop App, Manhours Control App, CSM-4D, Civil Works App and Warehousing all projects DB in the main server in one warehouse DB using SSIS)."
                details2="Jira, Clickup, Asana, Ms Excel, Ms Team, Slack and Google meet"
            />

            <Card
                progress="100"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Product Owner"
                cardText="Acted as the liaison between product, IT and stakeholders to understand customer demand for new features and prioritize the product road map.And Developing a data-driven project management culture by building KPI dashboard."
                footer1="Since 2021"
                footer2="Used in 6 Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Owned 8 products and been fully responsible for creating high level product map and be sure it meets the strategic goal with every release and has ROI. Using different technique to create a meaningful use case and user stories.
                I have been worked in a very high budget of each single project which our products serve and for that I have created and improved system and protocols to share work and information related to metric measurement, business operation and operation management.
                
                Projects I have worked as a Product owner  Project Pipeline, EICA App, Graphical Reports App, Loop App).
                "
                details2="Jira, Clickup, Asana, Ms Excel, Ms Team, Ms Power Point, Slack and Google meet"
            />

            <Card
                progress="90"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="UX Design"
                cardText="Empathize with users, define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs. Apply foundational UX concepts, like user-centered design, accessibility, and equity-focused design."
                footer1="Since 2014"
                footer2="Used in more 15 Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="applying the basics of UX research, like planning research studies, conducting interviews and usability studies, and synthesizing research results for all products and development I am responsible for.
                User centric is my key to understand customer demand, Responsible for building Wireframes and Low-Fidelity Prototypes. Conducting UX Research and Test Early Concepts to be sure of what we are building will meet the user required. Empathize with users to understand their needs and pain points.  Create empathy maps, personas, user stories, and user journey maps to understand user needs. Develop problem statements to define user needs. Generate ideas for possible solutions to user problems. 
                "
                details2="Figma, Adobe XD, Ms Power Point, Ms Excel"
            />

            <Card
                progress="80"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Data Analytics"
                cardText="As I act as a data analyst I am collection, cleaning, organizing and processing data to generate information help me and my team to make decision, This technique everyday job because I cannot take any step without making a good plan for it."
                footer1="Since 2007"
                footer2="Daily Used"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Using automated tools to extract data from primary and secondary sources
                Removing corrupted data and fixing coding errors and related problems
                Developing and maintaining databases, data systems – reorganizing data in a readable format 
                Performing analysis to assess quality and meaning of data
                Filter Data by reviewing reports and performance indicators to identify and correct code problems
                Using statistical tools to identify, analyze, and interpret patterns and trends in complex data sets that could be helpful for the diagnosis and prediction
                Preparing reports for the management stating trends, patterns, and predictions using relevant data.
                Working with programmers, engineers, and management heads to identify process improvement opportunities, propose system modifications, and devise data governance strategies.
                "
                details2="Power BI, Ms SQL Server, Ms Power Point, Ms Excel"
            />

            <Card
                progress="50"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Competitive Audits"
                cardText="Examine competitors features, market share, pricing, marketing, differentiators, strengths, weaknesses, geography, culture and customer reviews to improve our products or services, And be sure that our strategic goal meets our end user needs"
                footer1="Since 2020"
                footer2="Used in 2 Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Perform A Competitor SWOT Analysis, Examine the price policies of the direct customers and compare with competitor, Determine The Market Positioning Of the Competition and studying their position in the market for ( Price, Quality, Service and Distribution) and i used this audit for EICA Project and Project Pipeline App."
                details2="Ms Excel, Ms Power Point"
            />

            <Card
                progress="100"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Communications"
                cardText="Communication is the way to understand each other from stakeholders, teams and end user. So it’s important to engage a good communication with a different channels to be align in one page."
                footer1="Since 2014"
                footer2="Daily Used"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="WRITTEN COMMUNICATION
                Convey ideas and information through the use of written language.
                ORAL COMMUNICATION
                Convey ideas and information through the use of spoken language.
                NON-VERBAL AND VISUAL COMMUNICATION
                Convey ideas and information through the use of imagery or wordless cues.
                ACTIVE LISTENING
                Communicate effectively by summarizing and restating what you hear in your own words in order to confirm the understanding of all parties. Active listening helps people to open up, avoid misunderstandings, resolve conflicts and build trust.
                CONTEXTUAL COMMUNICATION
                Communicate effectively in different contexts, including those pertaining to various populations, persons, situations, environments or sets of behaviors. This includes such contexts as professional, cross-cultural, online, academic and crisis communication.
                "
                details2="Ms Outlook, Ms Team, Slack, Google meet, Ms Power Point, Phone Calls and Presentation"
            />

            <Card
                progress="100"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Programming"
                cardText="Designed and coded 500+ front-end and desktop applications, troubleshooted 200+ code related issues and defects, Product details design documentation, unit test plan and document code for 20+ clients."
                footer1="Since 1995"
                footer2="Used in All Working Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Reengineered multiple systems that fueled improvements to productivity, efficiency, uptime and accuracy for global business operations. Developed code, system design and test/QA plans for all solutions and often coordinated the national or international rollout.
                Led, architected and participated in the design, testing and deployment of client/server, multitier applications, ActiveX and related components.
                Developed new procedures for requirements gathering, needs analysis, testing, scripting and documentation to strengthen quality and functionality of business-critical applications.
                Developed large-scale, portable, thread-safe and ultra-high performance foundation and application infrastructure libraries.
                Trained and mentored junior programmers in programming methodologies and best practices.
                Served as a core group member in defining and prioritizing technology investments, ensuring the alignment of process, technology and business objectives.
                Conceptualized, planned, launched and currently chair the Cybersecurity Committee, a company-wide group focused on improving security of the business’ information infrastructure.
                "
                details2=".Net Framwork VB.Net, Kotlin, C++, React, Python, Java, Node JS, Redux, Next-js, Redux and PHP"
            />

            <Card
                progress="70"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Devops"
                cardText="Solid experience with Linux (Ubuntu, CentOS) administration, experience with Azure, Proficient with Git and its work flow, solid experience with container (Docker and Kubernetes). Experience with continuous integration such as Jenkins."
                footer1="Since 2018"
                footer2="Used in 8 Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Reducing developing costs by removing unnecessary servers and database.
                Replacing human test with automated test unit for whatever possible.
                Used Jenkins to automate build and deploy which reducing developing time and human error.
                Successfully created and maintained automated CI/CD pipeline for code development using Jenkins while automating the deployment process, resulting in the elimination of 70% of manual work and escalation of work efficiency.
                Used in EICA App, Graphical Report App, P6 Audit App, Project Pipeline, Civil Work, My Portfolio, Production Utilities and Manhour Control App.
                "
                details2="Docker, Kubernetes, Git, Github and Jenkins"
            />

            <Card
                progress="100"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Database Management System"
                cardText="Prioritizes and manages database programming and management, and CRF development activities for staff across multiple projects, Develops and enforces high-level SOPs for database activities, Expert in DBMS and network architecture."
                footer1="Since 1999"
                footer2="Used in All Working Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Providing performance diagnostic expertise, best practice reviews and troubleshooting production issues, both at the database and operating system levels.
                Assist the development team to debug issues pertaining to migrations.
                Perform testing and production builds involving data changes and stored procedure building while following established change management procedures.
                Work pro-actively to gauge the performance of the application & database and provide recommendations to achieve the optimal architecture.
                Work with Technology infrastructure and ensure capacity, planning and forecast are in place and tracked continuously to maintain performance levels.
                Work with developers and database administrators to transform data models from logical to physical.
                Establish and maintain the User Forum to understand and prioritize processes for each LOB, correlate the processes to the query that gets executed.
                Effectively perform root cause analysis of issues and report the outcome to business community and Management.
                Work with the Database Administration team to develop and enhance database standards.
                "
                details2="MS SQL Server, My SQL, Mongo DB and Native SQL"
            />

            <Card
                progress="60"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Data Modeling"
                cardText="Work with the development team to implement data strategies, build data flows and develop data models, Work with development, application and other data architects to provide an overall solution approach."
                footer1="Since 2001"
                footer2="Used in All Working Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Wrote functional specifications, translating business requirements to technical specifications, created/maintained/modified data base design document with detailed description of logical entities and physical tables.
                Implemented the standard naming conventions for the entities and attributes of logical and physical model.
                Reviewed the logical model with Business users, ETL Team, DBA's and testing team to provide information about the data model and business requirements.
                Designed conceptual and logical data models of databases and tables.
                Solid experience transforming real system into data-model using BPMN and divide it into functionals."
                details2="UML, BPMN, Archimate, Zachman and Application Model (IDEF1X)"
            />

            <Card
                progress="40"
                progressForeColor="orange"
                progressBackColor="orange lighten-5"
                cardBackColor="blue-grey darken-1"
                cardForeColor="white-text"
                cardTitle="Enterprise Architecture"
                cardText="Provided executive level vision and strategic architectural direction towards business process and strategic goals, applications and solution delivery for campaign to care value stream."
                footer1="Since 2020"
                footer2="Used in 3 Projects"
                footer1BackColor=""
                footer1ForeColor="yellow-text text-lighten-3"
                footer2BackColor=""
                footer2ForeColor=" yellow-text text-lighten-3"
                collapsible1BackColor="blue-grey"
                collapsible1ForeColor="white-text"
                collapsible2BackColor="blue-grey"
                collapsible2ForeColor="white-text"
                details="Recommended and influenced Enterprise footprint and transformation strategy in accordance with long-term interest of the company as well as explained the rationale to the Executive Leadership team.
                    Managed and consulted to document business processes, developed process flows in alignment with value chain, identified gaps and drove simplification.
                    Provided Architecture direction and functional solution for major Enterprise Business Process and Technology Transformation Program.
                    Led the solution for assets such as Campaign Management, Order Management, Variable Compensation, Knowledge Management, Web Access Management etc.
                    Led the development effort of architecture artefacts using UML, derived scorecard as per golden rules for applications and conducted reviews.
                    Performed a cloud transformation assessment for the solutions after performing a detailed analysis of current state it and put together a proposed roadmap to establish a hybrid cloud environment and migrate applications and data into Microsoft azure environment.
                     
                "
                details2="UML, BPMN and Archimate"
            />


        </div>


    );
};

export default Skills;