import React, { useState, useEffect } from 'react'
import Giorno from '../components/Giorno'
import Header from '../components/Header'
import Percentuale from '../components/Percentuale'
import { Container, Row, Col } from "shards-react";

export default function HomePage() {
    return (
        <>
            <Container className="contenitore-principale">
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Giorno />
                    </Col>
                    <Col>
                        <Percentuale />
                    </Col>
                </Row>
            </Container>
        </>

    )


}