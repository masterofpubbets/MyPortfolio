import { Fragment } from "react";
import Collapsible from "../Collapsible/Collapsible";

function Card(params) {
    const progressCss = params.progressForeColor + " determinate determinate-width-" + params.progress;
    const progressBackColor = "progress " + params.progressBackColor;
    const cardBackColor = "card " + params.cardBackColor;
    const cardForeColor = "card-content " + params.cardForeColor;
    const cardTitle = params.cardTitle;
    const cardText = params.cardText;
    const footer1 = params.footer1;
    const footer2 = params.footer2;
    const footer1Css = params.footer1BackColor + " " + params.footer1ForeColor;
    const footer2Css = params.footer2BackColor + " " + params.footer2ForeColor + " right";
    const details = params.details;
    const details2 = params.details2;

    return (
        <Fragment>
            <div className="col s12 m6 l4">
                <div className={cardBackColor}>
                    <div className={cardForeColor}>
                        <span className="card-title">{cardTitle}</span>
                        <div className={progressBackColor}>
                            <div className={progressCss}></div>
                        </div>
                        <p>{cardText}</p>
                    </div>
                    <div className="card-action">
                        <span className={footer1Css}>{footer1}</span>
                        <span className={footer2Css}>{footer2}</span>
                    </div>
                </div>
                <Collapsible title="More Details" details={details} icon="arrow_drop_down" backColor="blue-grey" foreColor="white-text" />
                <Collapsible title="Tools Used" details={details2} icon="laptop_mac" backColor="blue-grey" foreColor="white-text" />
            </div>

        </Fragment>
    );

};

export default Card;