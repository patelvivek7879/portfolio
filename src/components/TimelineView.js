import React, { Fragment } from 'react';
import { Timeline, Typography, Image, Row, Col } from 'antd';
import "antd/dist/antd.css";
import education from "../icons/education.png";
import experience from "../icons/coding.png";
import WorkSpace from "../images/workspace_2.jpg";
import Phone from "../icons/svg/phone.svg";
import Mail from "../icons/svg/mail.svg";

const TimelineView = () => {

    const { Item } = Timeline;
    const { Text, Title } = Typography;

    return (
        <Fragment>
            <Row style={{backgroundColor: '#A9A9A9'}}>
                <Col span={12} style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                    <Image src={WorkSpace} preview={false} width={'auto'} height={`auto`}/>
                </Col>
                <Col span={12} style={{marginTop: 10}}>
                    <Typography.Title level={3} style={{ textAlign: 'center' }}><Image preview={false} width={64} src={experience} />
                    </Typography.Title>
                    <Timeline mode="alternate">
                        <Item label={"Nov 2021 - present"} color="green">
                            <Typography.Text keyboard>
                                The Modern Data Company - Web Developer
                            </Typography.Text>
                        </Item>

                        <Item label={"Sep 2021 - Oct 2021"}>
                            <Typography.Text keyboard>
                                ReactJS Intern
                            </Typography.Text>
                        </Item>
                    </Timeline>

                    <Typography.Title level={3} style={{ textAlign: 'center' }}><Image width={64} preview={false} src={education} alt="education" /></Typography.Title>
                    <Timeline mode="alternate">
                        <Item label={"July 2019 - June 2021"} color="green">
                            <Typography.Text keyboard>
                                MCA - IPS Academy (Indore)
                            </Typography.Text>
                        </Item>

                        <Item label={"July 2015 - June 2018"}>
                            <Typography.Text keyboard>
                                B.Sc. - Govt. Madhav Science College (Ujjain)
                            </Typography.Text>
                        </Item>

                        <Item label={"July 2014 - June 2015"} color="green">
                            <Typography.Text keyboard>
                                XII<sup>th</sup> - Govt. Excellence School (Ujjain)
                            </Typography.Text>
                        </Item>

                        <Item label={"July 2012 - June 2013"}>
                            <Typography.Text keyboard>
                                X<sup>th</sup> - Govt. Excellence School (Ujjain)
                            </Typography.Text>
                        </Item>
                    </Timeline>
                </Col>
            </Row>
            <Row style={{backgroundColor: "#A9A9A9", height:120}}  >
                <Col span={12} style={{textAlign: 'center', marginTop: 10}}>
                    <Title level={4}> Personal Info </Title>

                </Col>
                <Col span={12} style={{textAlign: 'center', marginTop: 10}}><Title level={4}> Contact </Title>
                    <Image src={Phone} width={16}  /> +91-8962208338 <br/>
                    <Image src={Mail} width={16} />  patelvivek7879@gmail.com
                 </Col>
            </Row>
            <Row style={{backgroundColor: "#A9A9A9"}}>
                <Col span={24} style={{textAlign: 'center'}}><Title level={5}>copyright &copy; Vivek Patel</Title></Col>
            </Row>
        </Fragment>
    )
}

export default TimelineView;
