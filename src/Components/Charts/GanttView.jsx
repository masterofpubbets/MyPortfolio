import { React } from 'react';
import Gantt, {
    Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Toolbar, Item, Validation,
} from 'devextreme-react/gantt';


function GanttView({ enabled, tasks, dependencies, resources, resourceAssignments, height }) {

    const RenderEditting = (enabled) => {
        if (enabled) {
            return <Editing enabled />
        } else {
            return <Editing disabled />
        }
    }

    return (
        <div>
            <Gantt
                taskListWidth={500}
                scaleType="weeks"
                height={height}>

                <Tasks dataSource={tasks} />
                <Dependencies dataSource={dependencies} />
                <Resources dataSource={resources} />
                <ResourceAssignments dataSource={resourceAssignments} />

                <Toolbar>
                    <Item name="undo" />
                    <Item name="redo" />
                    <Item name="separator" />
                    <Item name="collapseAll" />
                    <Item name="expandAll" />
                    <Item name="separator" />
                    <Item name="addTask" />
                    <Item name="deleteTask" />
                    <Item name="separator" />
                    <Item name="zoomIn" />
                    <Item name="zoomOut" />
                </Toolbar>

                <Column dataField="title" caption="Subject" width={300} />
                <Column dataField="start" caption="Start Date" />
                <Column dataField="end" caption="End Date" />

                <Validation autoUpdateParentTasks />
                {RenderEditting(enabled)}
            </Gantt>
        </div>
    );

}

export default GanttView;