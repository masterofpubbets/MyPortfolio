import React from "react";
import { useEffect } from "react";
import styles from './Works.module.css';
import { workExperience } from '../../Store/Consts/Works';
import CardImage from "../../Components/Cards/CardImage";
import AvatarListImage from "../../Components/Lists/AvatarListImage";

function Works(params) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, []);

    const renderProducts = (products) => {
        return (
            products.map((pro, index) => {
                return (
                    <div key={index} className="col s12 m4 l4">
                        <CardImage key={index} img={pro.logo} title={pro.name} texts={pro.goals} imageCSS="yellow lighten-4 app-height-250" contentCSS="yellow lighten-5 app-min-height-300" />
                    </div>
                )
            })
        )
    };

    const renderWorks = () => {
        return (
            workExperience.map((item, index) => {
                return (
                    <section key={"sec" + item.id}>
                        <div key={"div1" + item.id} className="divider"></div>
                        <div key={"div2" + item.id} className="section" id="eica-roadmap-chart">

                            <div className={styles.headerTitle}>
                                <div className={styles.headerIcon}>
                                    <i key={"i1" + item.id} className="material-icons medium blue-text darken-4-text">person</i>
                                    <h5 key={"h5" + index}>{item.role}</h5>
                                </div>

                                <div key={"div3" + item.id} className={styles.headerIcon}>
                                    <img key={"img" + item.id} className={styles.companyLogo} src={item.companyLogo} alt={item.companyName}></img>
                                    <h6 key={"h6" + index}>{item.companyName}</h6>
                                </div>
                            </div>

                            <div key={"div4" + item.id} className="row">
                                <p key={"p1" + index} className="col s12 m6 l6">{item.duration}</p>
                                <p key={"p2" + index} className="col s12 m6 l6 right-align">{item.location}</p>
                            </div>

                            <div key={"div5" + item.id} className='sub-paragraph'>
                                <div key={"div5" + index} className={styles.headerIcon}>
                                    <i key={"i2" + item.id} className="material-icons small valign-wrapper red-text lighten-1-text div-margin-top-5">business_center</i>
                                    <h6 key={"h6" + item.id} className="red-text lighten-1-text">Achievements / Tasks</h6>
                                </div>

                                <blockquote key={"bq" + item.id}>
                                    {item.tasks.map((task, index) => <p key={"itemp" + index}>{task}</p>)}
                                </blockquote>
                            </div>

                            <div key={"div6" + index} className={styles.headerIcon}>
                                <i key={"i3" + item.id} className="material-icons small valign-wrapper teal-text accent-3-text div-margin-top-5">group</i>
                                <p key={"p" + item.id} className="teal-text accent-3-text">{"Team Capacity: " + item.teamCapacity}</p>
                            </div>

                            <div key={"div10" + index} className="section">
                                {(item.products.length > 0) && <h6 key={"div10h6" + index}>Used Tools</h6>}
                                <div key={"div11" + index} className="row">
                                    <div className="row sub-paragraph">
                                        {(item.tools !== undefined) && <AvatarListImage items={item.tools}/>}
                                    </div>
                                </div>
                            </div>

                            <div key={"div7" + index} className="section">
                                {(item.products.length > 0) && <h6 key={"div7h6" + index}>Successful Products</h6>}
                                <div key={"div8" + index} className="row">
                                    <div className="row sub-paragraph">
                                        {renderProducts(item.products)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div key={"div9" + item.id} className="divider"></div>
                    </section>
                )
            }
            ))
    };


    return (
        <div className="container main-div">
            <h4>Work EXPERIENCE</h4>

            {renderWorks()}

        </div>
    );

}

export default Works;