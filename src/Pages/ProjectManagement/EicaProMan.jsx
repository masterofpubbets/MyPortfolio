import { React } from 'react';
import '../Articles/Articles.css';
import { useEffect } from "react";
import AvatarList from '../../Components/Lists/AvatarList';
import Breadcrumbs from "../../Components/Header/Breadcrumbs";
import { eicaProMan } from '../../Store/Consts/UseCaseData';
import eicaICon from '../../Assets/eica.svg';
import modivationImage from '../../Assets/proman/eicapromanmodi.jpg';
import motVPImage from '../../Assets/proman/eicaprommanmv.jpg';
import bpmnImage from '../../Assets/proman/eicapromanbpmn.png';
import sImg from '../../Assets/letters/s.svg';
import wImg from '../../Assets/letters/w.svg';
import oImg from '../../Assets/letters/o.svg';
import tImg from '../../Assets/letters/t.svg';
import FloatingAction from '../../Components/FloatingAction/FloatingAction';
import Button from '../../Components/Buttons/Button';
import GanttView from '../../Components/Charts/GanttView';
import { tasks, dependencies, resources, resourceAssignments } from '../../Store/Consts/EicaProManData';
import SimpleCard from '../../Components/Cards/SimpleCard';
import DataGridView from '../../Components/DataGrid/DataGridView';
import ChartView from '../../Components/Charts/ChartView';

function EicaProMan() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, []);

    const listItems = [{
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "search",
        title: "Too Many Manual Validation",
        text: "EICA's Users has to do a lot of requests (Mail, Calls and Person to Person) with engineering for requesting the scope of work in EICA requirements.",
        text2: "EICA's Users has to compare measurement department scope with engineering one and has to find an answers for the discrepancies."
    },
    {
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "search",
        title: "No Standardized Scope Life Cycle",
        text: "Scope changing is not provided from engineering at the moment of happen, but only when a discrepancies issues occurred.",
        text2: "No standard channel between engineering and production team for scope of work."
    },
    {
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "search",
        title: "Manual Routine",
        text: "EICA's Users are not performing the work by using the application, but 60% of the work has to be done in a separate file system (MS Excel Files). which causing additional work and no data consistence.",
    },
    {
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "search",
        title: "Many Source For The Same Production Reports",
        text: "Planning, Construction and Production team each one of them is reporting a different figures for the same activity's production.",
    }]

    const highLevelFeatures = [{
        backColor: "transparent",
        iconBackColor: "cyan darken-4",
        iconName: "cloud_upload",
        title: "Importing Production",
        text: "Subcontractor can import the production in-place and the system validate the items imported."
    },
    {
        backColor: "transparent",
        iconBackColor: "red darken-4",
        iconName: "done_all",
        title: "Items and Production Validation",
        text: "Automatically validate the production imported for a different of error (logical and physical) and generate human freindly message with suggested solutions."
    },
    {
        backColor: "transparent",
        iconBackColor: "orange darken-4",
        iconName: "straighten",
        title: "Add/Edit Item by Engineering",
        text: "Integration with 3d/2d cad software which facilitate the engineering team to manage the scope of work."
    },
    {
        backColor: "transparent",
        iconBackColor: "green accent-4",
        iconName: "report",
        title: "Create A Notification Center",
        text: "An internal module responsible for automatic notify the users when every trigger happen like production imported, new item added and existing item edited."
    },
    {
        backColor: "transparent",
        iconBackColor: "amber accent-4",
        iconName: "receipt",
        title: "Create A Report Center",
        text: "Create a report facility for a variance status and summaries in a standard format."
    }]

    return (
        <div className="main-div">


            <div className='container'>
                <FloatingAction menu={eicaProMan.floatingAction} />
                <Breadcrumbs navItems={eicaProMan.navItems} />
                <div className="divider"></div>
            </div>

            <div className="article-cover">
                <p className="article-cover-header light-blue-text text-darken-4">EICA New Business Goal</p>
                <img src={eicaICon} className="center" alt=""></img>
                <div className='article-cover-footer grey-text text-darken-2'>
                    <p>Daily Production Process</p>
                    <p>Created By: Eslam Aly</p>
                    <p>Role: Product Owner</p>
                </div>
            </div>

            <section>
                <div className='container'>
                    <div className='articale-my-word'>
                        <p>After we have made a survey for user story mapping in one big part of EICA system which is
                            production update in many projects, we have noticed that:<br></br>
                            The process has many repetition steps and awaiting information from external source out of the procedure itself<br></br>
                            which causing the process has a slowness and not accurate.<br></br>
                            So we had made a strategic decision to add Production Control Efficiency as a business goal.
                        </p>
                    </div>
                    <Button
                        link="https://docs.google.com/presentation/d/1ZAUKF2SIKC2KVZIeKkFl_nb9rO_uiuyrYEAJ_pA9KB8/edit?usp=sharing"
                        linkParaValue=""
                        buttonIcon="backup"
                        buttonText="Open Research Study"
                        iconSize="medium left"
                        buttonCss="teal darken-4"
                        extrnal={true}
                    />
                    <div className="section"></div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section" id="eica-strategic-drivers">
                        <h5>Strategic Drivers and Goals</h5>
                    </div>

                    <section>
                        <div className='sub-paragraph'>
                            <div className="section">
                                <h6>Production Control Efficiency Goal</h6>
                                <p>Free EICA's user from manual routine will save time to focus on increasing the consists for electrical
                                    and instrumentation scope of work. also will reduce the human mistake and gives confident of whatever information generated.
                                </p>
                                <img src={modivationImage} alt="Modivation Diagram" className='article-img'></img>
                                <p id="eica-driver-assessment">Driver Assessment:</p>
                                <AvatarList items={listItems} />
                                <p>Assessment BPMN</p>
                                <img src={bpmnImage} alt="Assessment BPMN" className='article-img'></img>
                                <div className="section"></div>
                                <p id="eica-motivatio-viewpoint">Motivation Viewpoint</p>
                                <img src={motVPImage} alt="Modivation Viewpoint" className='article-img'></img>
                            </div>

                        </div>
                    </section>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section" id="eica-swot">
                        <h5>SWOT Analysis</h5>
                        <p>
                            Analyzes business goal by focusing on each of internal and external factors for (Strengths and weaknesses).
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col s12 m6 l6'>
                            <SimpleCard
                                headerBackColor="green lighten-3"
                                headerForeColor="black-text"
                                backColor="green lighten-2"
                                foreColor="black-text"
                                headerText="Strengths"
                                headerImg={sImg}
                                lines={eicaProMan.swot.Strengths}
                            />
                        </div>
                        <div className='col s12 m6 l6'>
                            <SimpleCard
                                headerBackColor="lime lighten-2"
                                headerForeColor="black-text"
                                backColor="lime lighten-1"
                                foreColor="black-text"
                                headerText="Weaknesses"
                                headerImg={wImg}
                                lines={eicaProMan.swot.Weaknesses}
                            />
                        </div>
                        <div className='col s12 m6 l6'>
                            <SimpleCard
                                headerBackColor="light-blue darken-3"
                                headerForeColor="white-text"
                                backColor="light-blue darken-4"
                                foreColor="white-text"
                                headerText="Opportunities"
                                headerImg={oImg}
                                lines={eicaProMan.swot.Opportunities}
                            />
                        </div>
                        <div className='col s12 m6 l6'>
                            <SimpleCard
                                headerBackColor="yellow accent-3"
                                headerForeColor="black-text"
                                backColor="yellow accent-4"
                                foreColor="black-text"
                                headerText="Threats"
                                headerImg={tImg}
                                lines={eicaProMan.swot.Threats}
                            />
                        </div>
                    </div>

                    <section>
                        <div className='sub-paragraph'>
                            <div className="section">
                                <h6>SWOT Analysis and Course of Action</h6>
                                <p>Free EICA's user from manual routine will save time to focus on increasing the consists for electrical
                                    and instrumentation scope of work. also will reduce the human mistake and gives confident of whatever information generated.
                                </p>
                                <DataGridView dataSource={eicaProMan.swotGrid} renderFields={["iconName"]} />
                            </div>

                        </div>
                    </section>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section" id="eica-product-requirements">
                        <h5>Product Requirements</h5>
                    </div>
                    <div className='sub-paragraph'>
                        <div className="section">
                            <h6>High Level Features</h6>
                            <p>
                                Definition the purpose of the new features and explains what the product should include.
                            </p>
                        </div>
                        <AvatarList items={highLevelFeatures} />
                    </div>

                    <div className='sub-paragraph'>
                        <div className="section">
                            <h6>Epic and Features</h6>
                            <p>
                                Breakdown the high level features into collection of epics contains features.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section" id="eica-roadmap-chart">
                        <h5>Product Roadmap</h5>
                        <p>
                            In this chart all planning Strategy, Features, Epic and release roadmaps.
                        </p>
                    </div>
                </div>
                <div className='div-width-85'>
                    <GanttView enabled={false} tasks={tasks} dependencies={dependencies} resources={resources} resourceAssignments={resourceAssignments} height={window.screen.height - 200} />
                </div>
                <p className='div-width-85'>These dates are early start and finished because later we will hand the plan to the agile team so they will start
                    producing the product and the developers will estimate the PBI and the product owner will organize the PBI into
                    sprints with the scrum team. So later this schedule has to be replace by sprints timeline.</p>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section" id="eica-okr">
                        <h5>OKRs</h5>
                        <p>
                            In an OKR implementation, the objective is qualitative and answers the question of what is to be accomplished.
                            Objectives are supported by key results which benchmarks and monitors how we achieve the objective.
                        </p>
                        <DataGridView dataSource={eicaProMan.okrGrid} renderFields={[]} />
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section" id="eica-kpi">
                        <h5>KPI</h5>
                        <p>
                            A key performance indicator is a metric that measures the performance of the new features that we have launched to our users.
                        </p>

                    </div>

                    {eicaProMan.kpiLists.map((item, index) => {
                        return (
                            <div key={"div1" + item.id} className='sub-paragraph'>
                                <div key={"div1" + item.id} className="section">
                                    <h6 key={"p6" + item.id}>{item.id + ". " + item.title}</h6>
                                    <p key={"p" + item.id}>
                                        {item.description}
                                    </p>
                                </div>
                                {(item.data !== undefined) &&
                                    <ChartView
                                        key={index}
                                        data={item.data}
                                        argumentField={item.argumentField}
                                        title={item.title}
                                        ConstantLineValue={item.ConstantLineValue}
                                        leftScaleValue={item.leftScaleValue}
                                        rightTickInterval={item.rightTickInterval}
                                    />}
                            </div>
                        )
                    })}

                </div>

            </section>

            <section>
                <div className='container'>
                    <div className="divider"></div>
                    <div className="section" id="eica-roadmap-chart">
                        <h5>Final</h5>
                        <p>
                            Now we have to choose a simple project as a pilot project which has less time line among the other project to start working with its team for the new features.
                        </p>
                        <p>
                            During the implementation for the new features a portfolio plan is created to develop a strategy plan over the 
                            organization to set down the new features for all the running project.
                        </p>
                    </div>
                </div>
            </section>

        </div>


    );
}

export default EicaProMan;