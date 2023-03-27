import React from "react";
import { connect } from "react-redux";




function Table(props) {
    const { datas } = props
    console.log({ datas })
    return (
        <><table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Region
                    </th>
                    <th>
                        Flag
                    </th>
                    <th>
                        Independant
                    </th>
                </tr>
                {/* <tr>
                        <td>
                            sadsa
                        </td>
                        <td>
                            sadsa
                        </td>
                    </tr> */}
                {datas !== null && datas.map(ele => (<tr>
                    <td>
                        {ele.name}
                    </td>
                    <td>
                        {ele.region}
                    </td>
                    <td>
                        {ele.flag}
                    </td>
                    <td>
                        {ele.independent}
                    </td>
                </tr>))}

            </thead>
        </table>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        datas: state.dashboardReducers.datas
    }
}

export default connect(mapStateToProps, null)(Table)