import React from "react"

import "./style.css"

class Resources extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="resouce-tab">
                    <div className="sort-search">
                        <select className="table-sort">
                            <option>Most Recent</option>
                            <option>Oldest</option>
                            <option>A &#8594; Z</option>
                            <option>Z &#8594; A</option>
                        </select>
                        <input className="search-field" type="text" name="search" placeholder="Search..." />                        
                    </div>
                    <table >
                        <tbody>
                        <tr>
                            <th>Resource</th>
                            <th>Action</th>
                            <th>Created By</th>
                            <th>Last Modified</th>
                        </tr>
                        <tr>
                            <td><a download href="../../../public/assets/resources/Django API polls.pdf">Django APIs</a></td>
                            <td>Delete</td>
                            <td>Ralihlaba</td>
                            <td>2020/09/01</td>
                        </tr>
                        <tr>
                            <td><a download href="/assets/resources/Django Rest Framework.pdf">Django Rest Framework</a></td>
                            <td>Delete</td>
                            <td>Moralla</td>
                            <td>2020/08/05</td>
                        </tr>
                        <tr>
                            <td><a download href="/assets/resources/JavaScript The definitive Guide.pdf">JavaScript The definitive Guide</a></td>
                            <td>Delete</td>
                            <td>Moralla</td>
                            <td>2020/08/05</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Resources