import React, { useEffect, useState } from 'react';
import meeting from './Images/meeting.png'; 
import flashcards from './Images/flashcards.png'; 

const About = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            justifyContent: 'center',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'white',
            minHeight: '100vh',
            marginTop: '210px',
        },
        section: {
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '20px' : '40px',
            gap: '30px',
            margin: '20px 0',
            width: '90%',
            maxWidth: '1200px',
            borderRadius: '10px',
            textAlign: isMobile ? 'center' : 'left',
        },
        image: {
            width: isMobile ? '100%' : '320px',
            height: isMobile ? 'auto' : '290px',
            objectFit: 'cover',
            borderRadius: '10px',
        },
        textContainer: {
            flex: 1,
            padding: isMobile ? '10px' : '20px',
        },
        title: {
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 'bold',
            marginBottom: '15px',
        },
        description: {
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: '1.6',
            marginBottom: '20px',
        },
        button: {
            backgroundColor: '#6C21DC',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '12px 25px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#5a1ab8',
        },
        teamContainer: {
            marginTop: '50px',
            textAlign: 'center',
            width: '90%',
            maxWidth: '1200px',
        },
        teamTitle: {
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: 'bold',
            marginBottom: '30px',
        },
        profiles: {
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(120px, 1fr))' : 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
        },
        profile: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
        profileImage: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px',
            backgroundColor: '#ddd',
        },
        profileName: {
            fontSize: '16px',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.section}>
                <img src={meeting} alt="Meeting" style={styles.image} />
                <div style={styles.textContainer}>
                    <h2 style={styles.title}>Every class, every test, one ultimate study app</h2>
                    <p style={styles.description}>
                        Create your own flashcards or find sets made by teachers, students, and experts. Study them anytime, anywhere with our free app.
                    </p>
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.textContainer}>
                    <h2 style={styles.title}>Make class material instantly studiable</h2>
                    <p style={styles.description}>
                        Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.
                    </p>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    >
                        Try it out
                    </button>
                </div>
                <img src={flashcards} alt="Flashcards" style={styles.image} />
            </div>

            <div style={styles.section}>
                <img src={meeting} alt="Meeting" style={styles.image} />
                <div style={styles.textContainer}>
                    <h2 style={styles.title}>Test prep for any subject</h2>
                    <p style={styles.description}>
                        Memorize anything with personalized practice tests and study sessions in Learn. 98% of students say Quizlet has improved their understanding.
                    </p>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <div style={styles.teamContainer}>
                <h2 style={styles.teamTitle}>Our Team</h2>
                <div style={styles.profiles}>
                    {Array.from({ length: 15 }).map((_, index) => (
                        <div key={index} style={styles.profile}>
                            <div style={styles.profileImage}></div>
                            <p style={styles.profileName}>Team Member {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
