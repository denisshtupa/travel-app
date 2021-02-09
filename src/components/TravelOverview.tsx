import { TopButtons } from "./TopButtons";
import { TravelsList } from "./TravelsList";
import { Table } from "react-bootstrap";

export const TravelOverview = () => {

    return(
       <div className="jumbotron">
           
           <h3 className="title">Travel app</h3>

            <div className="buttons">
                <TopButtons />
            </div>

            <Table className="striped bordered hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                    <TravelsList />
                </tbody>
            </Table>
       </div>
    )
}
