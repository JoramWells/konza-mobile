import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {Menu} from 'antd'



const {SubMenu} = Menu
export default function Navigation() {
    const history = useHistory()
    function servicesHandler(){
        history.go('/services')
        }

    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <Link to="/">
                Home
                </Link>
            </Menu.Item>
            <SubMenu title="Services" onTitleClick={servicesHandler}>
                <Menu.Item style={{margin:"0"}}>
                    Track car
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    Parking
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    Transport goods
                </Menu.Item>

            </SubMenu>
            <SubMenu title="Help">
                <Menu.Item>
                    Make payment
                </Menu.Item>
            </SubMenu>
            <SubMenu title="Account">
                <Menu.Item style={{margin:"0"}}>
                    Login
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    Register
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}
