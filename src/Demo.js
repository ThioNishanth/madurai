import React from 'react';
import ReactDOM from 'react-dom';

function Demo(props)
{
    return(
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>ismarried</th>
                <td>{props.ismarried?"yes":"No"}</td>
            </tr>
        </table>
    )
}
export default Demo;