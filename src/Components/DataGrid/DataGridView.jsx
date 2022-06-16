import React from 'react';
import DataGrid, { Column, Selection, GroupPanel, Grouping, } from 'devextreme-react/data-grid';

function DataGridView({ dataSource, renderFields }) {

  const RenderIcon = (cellData) => {
    if (cellData.value !== undefined) {
      const temp = cellData.value.split('/');
      if (temp.length > 1) {
        return <i className={"material-icons " + temp[1]}>{temp[0]}</i>
      } else {
        return <i className="material-icons">{temp[0]}</i>
      }
    }
  };



  return (
    <DataGrid
      id="gridContainer"
      dataSource={dataSource.data}
      keyExpr="ID"
      showBorders={true}
      onExporting={null}>

      <Selection mode="single" />
      <GroupPanel visible={true} />
      <Grouping autoExpandAll={true} />

      {renderFields.map((field, index) =>
        <Column key={index} dataField={field}
          width={50}
          allowSorting={false}
          cellRender={RenderIcon}
          caption=""
        />
      )}


      {dataSource.columns.map((c, index) => <Column key={index} dataField={c.dataField} groupIndex={c.groupIndex} width={c.width} dataType={c.dataType} />)}

    </DataGrid>
  );

}

export default DataGridView;