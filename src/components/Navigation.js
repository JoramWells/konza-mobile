import React from 'react'
import {Menu} from 'antd'

export default function Navigation() {
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                Home
            </Menu.Item>
            <Menu.Item>
                Services
            </Menu.Item>
            <Menu.Item>
                Login
            </Menu.Item>
        </Menu>
    )
}
