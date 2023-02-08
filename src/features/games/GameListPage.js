import { Card, CardBody, CardHeader, CardText } from "reactstrap"
import { GameListItem } from "./GameListItem"
import AddGame from "./AddGame"

export const GameListPage = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    The whole card is here
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AddGame />
                    <GameListItem />
                </div>
            </div>
        </>
    )
}