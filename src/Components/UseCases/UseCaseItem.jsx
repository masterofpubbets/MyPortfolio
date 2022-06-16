import { React } from 'react';
import IconParagraph from "../IconParagraph/IconParagraph";
import Button from "../Buttons/Button";

function UseCaseItem(params) {
    const header = params.header;
    const headerForeColor = params.headerForeColor;
    const rightImage = params.rightImage;
    const items = params.items;
    const caseStudyLink = params.caseStudyLink;
    const mockupLink = params.mockupLink;


    return (
        <div className="usecase-item">
            <div className="usecase-item-header"><h5 className={headerForeColor}>{header}</h5></div>
            <div className="usecase-item-left">
                {items.map((item) =>
                    <IconParagraph
                        key={item.key}
                        mapkey={item.key}
                        header={item.header}
                        img={item.img}
                        text={item.text}
                        imageForeColor={item.imageForeColor}
                        imageBackColor={item.imageBackColor}
                        headerForeColor={item.headerForeColor}
                        headerBackColor={item.headerBackColor}
                        textForeColor={item.textForeColor}
                        textBackColor={item.textBackColor}
                    />
                )}
            </div>

            <div className="usecase-item-right">
                <img src={rightImage} alt={header}></img>
            </div>
            <div className="usecase-item-footer">
                {(caseStudyLink !== "") &&
                    <Button
                        link={caseStudyLink}
                        linkParaValue=""
                        buttonIcon="backup"
                        buttonText="Open Case Study"
                        iconSize="medium left"
                        buttonCss="light-blue darken-4"
                        extrnal={true}
                    />
                }

                {(mockupLink !== "") &&
                    <Button
                        link={mockupLink}
                        linkParaValue=""
                        buttonIcon="backup"
                        buttonText="Open Mockup"
                        iconSize="medium left"
                        buttonCss="light-blue darken-4"
                        extrnal={true}
                    />
                }

            </div>

        </div>
    );

}

export default UseCaseItem;