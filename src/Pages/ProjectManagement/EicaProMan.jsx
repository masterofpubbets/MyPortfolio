import '../Articles/Articles.css';
import { useEffect } from "react";
import AvatarList from '../../Components/Lists/AvatarList';
import Breadcrumbs from "../../Components/Header/Breadcrumbs";
import { eicaProMan } from '../../Store/Consts/UseCaseData';
import eicaICon from '../../Assets/eica.svg';
import modivationImage from '../../Assets/proman/eicapromanmodi.jpg';
import motVPImage from '../../Assets/proman/eicaprommanmv.jpg';
import bpmnImage from '../../Assets/proman/eicapromanbpmn.png';
import FloatingAction from '../../Components/FloatingAction/FloatingAction';
import Button from '../../Components/Buttons/Button';

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

                </div>
            </section>

        </div>


    );
}

export default EicaProMan;