import React from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                {/* inverter qara reng etmek uchundur fixed ise mini deyil normal boyda olmasi uchundur */}
                <Container>
                    {/* container yazilarin bir birinden chox da uzaq olmamasi uchundur */}
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <CartSummary />
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
