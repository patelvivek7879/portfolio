import React, {useState} from 'react';
import { Fragment } from 'react';
import { Typography, Image, Card, Row, Col, Divider, Menu, Space, Button } from 'antd'
import "antd/dist/antd.css";
import image_for_header from "../images/photo1_rbg.png";
import Typewriter from 'typewriter-effect';
import GitHub from "../icons/svg/github.svg";
import Linkedin from "../icons/svg/linkedin.svg";
import Home from "../icons/svg/home.svg";
import Briefcase from "../icons/svg/briefcase.svg";
import { ContactsOutlined } from "@ant-design/icons"; 

const Header = () => {
    const { Title, Text, Paragraph } = Typography;
    const { Meta } = Card;
    const { Item, ItemGroup } = Menu;
    const { SubMenu } = Menu;
    const [page, setPage] = useState("home");

    const changePage = (page) =>{
        setPage(page);
    }
    return (
        <Fragment>
                <Row style={{backgroundColor: '#A9A9A9'}}>
                <Col span={6}>
                    <Title level={1} style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }} className="header">
                        <Text className="logo">Vivek Patel</Text>
                    </Title>
                </Col>
                <Col span={12} style={{marginTop: 14, alignItems: 'center', textAlign: 'center'}}>
                    {page !== "home" &&
                <Button type={"text"} size={"small"} target={`_blank`} onClick={()=>changePage("home")}>
                <Image src={Home} preview={false} width={20} />
                </Button>
                }
                { page!=="timeline" &&
                <Button type={"text"} size={"small"} target={`_blank`} onClick={()=>changePage("timeline")}>
                <Image hoverable src={Briefcase} preview={false} width={20} />
                </Button>
                }
                </Col>
                <Col span={6}>
                <div style={{float: 'right', marginTop: '14px'}}>
                <Space>
                <Button type={"text"} size={"small"} target={`_blank`} href={`https://www.linkedin.com/in/patelvivek7879`}>
                <Image src={Linkedin} preview={false} width={20} />
                </Button>
                <Button type={"text"} size={"small"} target={`_blank`} href={`https://github.com/patelvivek7879`}>
                <Image hoverable src={GitHub} preview={false} width={20} />
                </Button>
                </Space>
                </div>
                </Col>
            </Row>
            { page==="home" && 
                <Row align="middle" style={{backgroundColor: "#A9A9A9"}}>
                    <Col span={6}>
                        <Card
                            hoverable={false}
                            style={{ width: 'auto', marginLeft: 10, marginTop: 10}}
                            bodyStyle={{ borderRadius: 25 }}
                            cover={<img style={{background: '#A9A9A9'}} src={image_for_header} />}
                            bodyStyle={{ padding: 0 }}
                        >
                        </Card>
                    </Col>
                    <Col flex={'auto'} span={18} offset={6}>
                        <div style={{ alignItems: 'center' }}>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', 'A Computer Programmer'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: '_',
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                }
        </Fragment>
    )
}

export default Header;
