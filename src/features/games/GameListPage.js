import { Card, CardBody, CardHeader, CardText } from "reactstrap"
import { GameListItem } from "./GameListItem"

export const GameListPage = () => {
    return (
        <div width=''>
            <Card>
                <CardText className="CardText">
                    The whole card is here
                </CardText>
            </Card>
            <CardBody className="CardBody">
                <GameListItem />
            </CardBody>
        </div>
    )
}