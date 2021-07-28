import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{display: "flex", paddingTop: 20 }}>
                <img src="/images/favicon.ico" 
                    alt="logo" 
                    style={{width:80}}/>
                <Header as="h1" style={{marginLeft: 10}}>고석준</Header>
            </div>

            <Gnb/>
        </div>
    );
}