import React from "react";
import Chart, {
    ArgumentAxis,
    CommonSeriesSettings,
    Legend,
    Series,
    Tooltip,
    ValueAxis,
    ConstantLine,
    Label,
} from 'devextreme-react/chart';

function ChartView({ data, argumentField, title, ConstantLineValue, leftScaleValue, rightTickInterval }) {
    const dataArrayProps = data.sort((a, b) => b.id - a.id);
    const totalCount = dataArrayProps.reduce((prevValue, item) => prevValue + item.count, 0);
    let cumulativeCount = 0;

    const dataArray = dataArrayProps.map((item) => {
        cumulativeCount += item.count;
        return {
            value: item.value,
            count: item.count,
            cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
        };
    });

    function customizeTooltip(pointInfo) {
        return {
            html: `<div><div class="tooltip-header">${pointInfo.argumentText
                }</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName
                }</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText
                }</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName
                }</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText
                }</span>% </div></div></div>`,
        };
    }

    function customizePercentageText({ valueText }) {
        return `${valueText}%`;
    }

    return (
        <Chart
            title={title}
            dataSource={dataArray}
            palette="Harmony Light"
            id="chart"
        >
            <CommonSeriesSettings argumentField={argumentField} />
            <Series
                name={title + " frequency"}
                valueField="count"
                axis="frequency"
                type="bar"
                color="#fac29a"
            />
            <Series
                name={title + " percentage"}
                valueField="cumulativePercentage"
                axis="percentage"
                type="spline"
                color="#6b71c3"
            />

            <ArgumentAxis>
                <Label overlappingBehavior="stagger" />
            </ArgumentAxis>

            <ValueAxis
                name="frequency"
                position="left"
                tickInterval={leftScaleValue}
            />
            <ValueAxis
                name="percentage"
                position="right"
                tickInterval={rightTickInterval}
                showZero={true}
                valueMarginsEnabled={false}
            >
                <Label customizeText={customizePercentageText} />
                <ConstantLine
                    value={ConstantLineValue}
                    width={2}
                    color="#fc3535"
                    dashStyle="dash"
                >
                    <Label visible={true} />
                </ConstantLine>
            </ValueAxis>

            <Tooltip
                enabled={true}
                shared={true}
                customizeTooltip={customizeTooltip}
            />

            <Legend
                verticalAlignment="top"
                horizontalAlignment="center"
            />
        </Chart>
    );

}

export default ChartView;