import React from 'react';
import {Button, ButtonToolbar, Col} from 'react-bootstrap/lib/';

const PokeListSetLimitButtons = ({bsStyle, pageItemsLimit, activeBtn, onclickChangeLimit}) => {
    let limitBtns = pageItemsLimit.map((btn) => {
        return (
            <Button
                bsStyle={bsStyle}
                key={btn}
                active={activeBtn == btn}
                onClick={onclickChangeLimit}>
                    {btn}
            </Button>
        )
    });

    return (
        <Col sm={8} ms={10} smOffset={2} mdOffset={1}>
            <ButtonToolbar>
                {limitBtns}
            </ButtonToolbar>
        </Col>
    );
};

export default PokeListSetLimitButtons;
