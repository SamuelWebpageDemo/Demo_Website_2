import PatreonLogo from "../pic/donationLogo/patreon.svg"
import BankLogo from "../pic/donationLogo/bank.svg"
import GoGetFundLogo from "../pic/donationLogo/GoGetFundLogo.png"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from "react-intl";

let labelText = "text-xs"
let detailText = "text-lg flex flex-nowrap col-9"
let copyButton = "col-2"

export const data = [
    

    {
        id: 0,
        titleEN:"Donate Through Bank Transfer",
        titleZH:"通過銀行轉賬捐款",
        logo:BankLogo,
        content:    <div>
                        <Container className="p-0 justify-center">
                            {/* for account name */}
                            {/* account name label */}
                            <Row>
                                <Col className={labelText}>
                                    <FormattedMessage id="app.accountName" defaultMessage="Account Name"/>
                                </Col> 
                            </Row>
                            {/* account name details */}
                            <Row>
                                <Col className={detailText}>Demo Account Name</Col>
                                <Col className={copyButton}>
                                    <Button className="whitespace-nowrap" variant="primary" onClick={() => {navigator.clipboard.writeText("Demo Account Name")}}>
                                        <FormattedMessage id="app.copy" defaultMessage="Copy"/>
                                    </Button>
                                </Col>
                            </Row>
                            {/* for sort code */}
                            {/* sort code label */}
                            <Row>
                                <Col className={labelText}>
                                    <FormattedMessage id="app.sortCode" defaultMessage="Sort Code"/>
                                </Col> 
                            </Row>
                            {/* sort code details                             */}
                            <Row>
                                <Col className={detailText}>00-00-00</Col>
                                <Col className={copyButton}>
                                    <Button className="whitespace-nowrap" variant="primary" onClick={() => {navigator.clipboard.writeText("00-00-00")}}>
                                        <FormattedMessage id="app.copy" defaultMessage="Copy"/>
                                    </Button>     
                                </Col>                              
                            </Row>
                            {/* for account number */}
                            {/* account number label */}
                            <Row>
                                <Col className={labelText}>
                                <FormattedMessage id="app.accountNumber" defaultMessage="Account Number"/>
                                </Col> 
                            </Row>
                            {/* account number details                             */}
                            <Row>
                                <Col className={detailText}>88888888</Col>
                                <Col className={copyButton}>
                                    <Button className="whitespace-nowrap" variant="primary" onClick={() => {navigator.clipboard.writeText("88888888")}}>
                                        <FormattedMessage id="app.copy" defaultMessage="Copy"/>
                                    </Button>     
                                </Col>                              
                            </Row>                            
                        </Container>
                    </div>,
        link:""
    },
    {
        id: 1,
        titleEN:"Donate Through Go Get Funding",
        titleZH:"通過 Go Get Funding 捐款",
        logo:GoGetFundLogo,
        content: <FormattedMessage id="app.singleDonate" defaultMessage="For Single Donation"/>,
        link:"https://gogetfunding.com/"
    },
    {
        id:2, 
        titleEN:"Donate Through Patreon",
        titleZH:"通過 Patreon 捐款",
        logo:PatreonLogo,
        content:<FormattedMessage id="app.monthDonate" defaultMessage="For Monthly Donation"/>,
        link:"https://www.patreon.com/"
    },

]