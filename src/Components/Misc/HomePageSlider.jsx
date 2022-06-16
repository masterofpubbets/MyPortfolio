import { React } from 'react';
import PageSlider from "./PageSlider";

function HomePageSlider(params) {
    const css = params.css;
    const color = params.color;
    const size = params.size;
    const foreColor = params.foreColor;
    const cssSlider = params.cssSlider;


    return (
        <div className={css}>
            <PageSlider link="#id-home" size={size} icon="account_box" color={color} foreColor={foreColor} css={cssSlider} tooltip="Home" />
            <PageSlider link="#id-what-i-do" size={size} icon="build" color={color} foreColor={foreColor} css={cssSlider} tooltip="What I Do" />
            <PageSlider link="#id-use-case" size={size} icon="map" color={color} foreColor={foreColor} css={cssSlider} tooltip="Use Cases" />
            <PageSlider link="#id-certificate" size={size} icon="card_membership" color={color} foreColor={foreColor} css={cssSlider} tooltip="Certificates" />
            <PageSlider link="#id-article" size={size} icon="import_contacts" color={color} foreColor={foreColor} css={cssSlider} tooltip="Articles" />
            <PageSlider link="#id-contact" size={size} icon="mail" color={color} foreColor={foreColor} css={cssSlider} tooltip="Contact" />

        </div>
    );

}

export default HomePageSlider;