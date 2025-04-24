import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DashBoard() {
    const [date, setDate] = useState(new Date());

    const styles = {
        dashboardContainer: {
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            minHeight: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
        },
        leftSection: {
            flex: 1,
            marginRight: '20px',
        },
        greetingSection: {
            marginBottom: '20px',
        },
        greetingH1: {
            fontSize: '40px',
            margin: 0,
            color: '#333',
            marginTop: '100px',
            marginLeft: '100px',
        },
        greetingP: {
            fontSize: '18px',
            margin: 0,
            color: 'black',
            marginTop: '20px',
            marginLeft: '100px',
        },
        greetingSpan: {
            color: '#6C21DC',
        },
        taskContainer: {
            backgroundColor: '#D2B8ED',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '40px',
            marginLeft: '100px',
            width: '500px',
            height: '590px',
        },
        rightSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
            marginRight: '600px',
            marginTop: '80px',
        },
        pinkBox: {
            backgroundColor: '#FFD5EA',
            padding: '20px',
            borderRadius: '8px',
            width: '500px',
            height: '200px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '80px',
            marginLeft: '60px',
        },
        subjectDetailsP: {
            marginTop: '45px',
            fontSize: '14px',
            color: '#333',
        },
        statusP: {
            position: 'absolute',
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'black',
            marginLeft: '380px',
            marginTop: '-32px',
        },
        statusSpan: {
            position: 'absolute',
            fontSize: '14px',
            paddingLeft: '10px',
            fontWeight: 'bold',
            color: 'red',
        },
        cards: {
            display: 'flex',
            gap: '50px',
            marginLeft: '660px',
            marginTop: '-260px',
        },
        card: {
            padding: '20px',
            borderRadius: '8px',
            width: '150px',
            height: '200px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            marginLeft: '20px',
            color: '#333',
        },
        greenCard: {
            backgroundColor: '#82e0aa',
        },
        yellowCard: {
            backgroundColor: '#f9e79f',
        },


        additionalContainers: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '60px',
            gap: '20px',
            marginLeft: '60px',
        },
        containerOne: {
            backgroundColor: '#D2B8ED',
            padding: '20px',
            borderRadius: '8px',
            width: '500px',
            height: '350px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        containerOneH3: {
            marginTop: '10px',
            marginBottom: '25px',
            fontSize: '26px',
            color: 'black',
        },
        subjectList: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            gap: '5px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        subjectListLi: {
            backgroundColor: '#eeeeee',
            padding: '10px',
            marginBottom: '8px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '17px',
            color: '#333',
            textAlign: 'left',
        },
        containerTwo: {
            backgroundColor: '#FFD5EA',
            padding: '20px',
            borderRadius: '8px',
            width: '410px',
            height: '350px',
            marginLeft: '60px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerTwoP: {
            position: 'absolute',
            fontSize: '20px',
            paddingBottom: '340px',
            paddingTop: '10px',
            fontWeight: 'bold',
        },
        reactCalendar: {
            marginTop: '100px',
            backgroundColor: '#FFD5EA',
            fontWeight: 700,
            width: '100%',
            border: 'none',
            fontFamily: 'Trebuchet MS',
            fontSize: '14px',
        },
    };

    return (
        <div style={styles.dashboardContainer}>
            <div style={styles.leftSection}>
                <div style={styles.greetingSection}>
                    <h1 style={styles.greetingH1}>
                        Hi <span style={styles.greetingSpan}>Aimee</span>, Welcome to Tala
                    </h1>
                    <p style={styles.greetingP}>
                        Your smart study buddy! Let’s make learning easier, faster, and more fun. Ready to get started?
                    </p>
                </div>
                <div style={styles.taskContainer}>
                    <h2>Today's Task:</h2>
                </div>
            </div>

            <div style={styles.rightSection}>
                <div style={styles.pinkBox}>
                    <div>
                        <h1>Subject Code: PELEC202</h1>
                        <p style={styles.subjectDetailsP}>
                            <strong>Time:</strong> 10:00 AM - 12:00 PM
                        </p>
                        <p style={styles.subjectDetailsP}>
                            <strong>Professor:</strong> Sir. John Rovie Balingbing
                        </p>
                    </div>
                    <div>
                        <p style={styles.statusP}>
                            Status: <span style={styles.statusSpan}>Ongoing</span>
                        </p>
                    </div>
                </div>
                <div style={styles.cards}>
                    <div style={{ ...styles.card, ...styles.greenCard }}>
                        <h1>38</h1>
                        <p style={{marginTop:"170px", textAlign:"center", position:"absolute"}}>Scores</p>
                    </div>
                    <div style={{ ...styles.card, ...styles.yellowCard }}>
                        <h1>8</h1>
                        <p style={{marginTop:"170px", textAlign:"center", position:"absolute"}}>Hours</p>
                    </div>
                </div>
                <div style={styles.additionalContainers}>
                    <div style={styles.containerOne}>
                        <h3 style={styles.containerOneH3}>Progress</h3>
                        <ul style={styles.subjectList}>
                            <li style={styles.subjectListLi}>PELEC 202</li>
                            <li style={styles.subjectListLi}>ITCS 205</li>
                            <li style={styles.subjectListLi}>PELEC 203</li>
                            <li style={styles.subjectListLi}>ITPS 206</li>
                            <li style={styles.subjectListLi}>PATHFIT 4</li>
                        </ul>
                    </div>
                    <div style={styles.containerTwo}>
                        <p style={styles.containerTwoP}>My Schedule</p>
                        <Calendar onChange={setDate} value={date} style={styles.reactCalendar} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;