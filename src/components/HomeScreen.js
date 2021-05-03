import React from 'react'
import {Row,Card,Button} from 'antd'

export default function HomeScreen() {
    return (
        <>
        <Row justify="space-around" align="middle" style={{marginTop:".5rem"}}>
            <Card style={{width:"20rem", borderRadius:"5px", backgroundColor:"rgb(54,69,79)", color:"white"}}>
                <h2 style={{color:"white"}}>Welcome to Xpress Cloud</h2>
                <Button type="primary" style={{borderRadius:"150px", border:"0"}}>Learn more</Button>
            </Card>
        </Row>
        <Row justify="space-around" align="middle" style={{marginTop:".5rem",textAlign:"center"}}>
            <Card style={{width:"20rem", borderRadius:"5px"}}>
                <h2>About us</h2>
            </Card>
        </Row>
        </>
    )
}
