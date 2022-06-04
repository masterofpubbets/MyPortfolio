import './Table.css';


function Table(props) {
    const headers = props.headers.map(h => <th key={h}>{h}</th>)
    const body = props.data.map((b, index) => {
        return (
                <tr key={index}>
                    {Object.values(b).map((c, index2) => {
                        return (
                            <td key={index.toString() + index2.toString()}>{c}</td>
                        )
                    })}
                </tr>
    )})
    
    return (

        <table className="custom-table" id="custom-table">
        <thead>
          <tr>
              {headers}
          </tr>
        </thead>

        <tbody>
          {body}
        </tbody>
      </table>
        
    )
};

export default Table;