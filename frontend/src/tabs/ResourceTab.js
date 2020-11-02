import React from 'react'

class ResourceTab extends React.Component {
    constructor(props) {
        super()
        this.state = {
            resources: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/")
            .then(response => response.json())
            .then(response => {
                const items = response
                this.setState({ resources: items })
            })
    }


    render() {

        const resourcetableData = this.state.resources.map((item) =>
            <tr>
                <td><a download href="/assets/resources/Django API polls.pdf">{item.title}</a></td>
                <td>Delete</td> {/* possible actions copuld include, hide, show, delete depending on access level, might to rethink this widget and its state management */}
                <td>{item.createdBy}</td>
                <td>{item.lastModified}</td>
            </tr>
        )

        return (
            <div className="resouce-tab">
                <div className="sort-search">
                    <select className="toable-sort">
                        <option>Most Recent</option>
                        <option>Oldest</option>
                        <option>A &#8594; Z</option> {/* downward arrow */}
                        <option>Z &#8594; A</option> {/* upward arrow */}
                    </select>
                    <input className="search-field" type="text" name="search" placeholder="Search.." />
                </div>
                <table >
                    <tbody>
                        <tr>
                            <th>Resource</th>
                            <th>Action</th>
                            <th>Created By</th>
                            <th>Last Modified</th>
                        </tr>
                        {resourcetableData}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResourceTab

