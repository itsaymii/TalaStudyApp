import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import profile from './Images/profile.png';
import tala from './Images/tala.ico';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const [studyToolsOpen, setStudyToolsOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const studyToolsRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleStudyTools = () => {
        setStudyToolsOpen((prev) => !prev);
    };

    const handleLogout = () => {
        console.log('Logged out');
        navigate('/login');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (studyToolsRef.current && !studyToolsRef.current.contains(event.target)) {
                setStudyToolsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const styles = {
        navbar: {
            backgroundColor: 'white',
            padding: '10px 20px',
            position: 'fixed',
            top: 0,
            left: 0,
            height: '50px',
            width: '100%',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        navLogo: {
            marginRight: 'auto',
        },
        talaImage: {
            width: '130px',
            height: 'auto',
            marginTop: '5px',
        },
        navLinks: {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            width: '100%',
            paddingRight: '40px',
        },
        navLinksLi: {
            position: 'relative',
            marginLeft: '20px',
        },
        navLinksA: {
            color: 'black',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '16px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginLeft: '-10px',
            marginRight: '30px',
            borderRadius: '5px',
            transition: 'color 0.3s ease, background-color 0.3s ease',
        },
        navLinksAHover: {
            backgroundColor: '#5a1ab8',
            color: 'white',
            width: '100px',

        },
        dropdownMenu: {
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            listStyle: 'none',
            padding: '10px 0',
            margin: 0,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 1000,
            display: studyToolsOpen ? 'block' : 'none',
        },
        dropdownMenuItem: {
            padding: '10px 20px',
            fontSize: '15px',
            color: '#333',
            textDecoration: 'none',
            display: 'block',
            fontWeight: 700,
            transition: 'color 0.3s ease, background-color 0.3s ease',
        },
        dropdownMenuItemHover: {
            backgroundColor: '#f2f3f4',
            color: '#5a1ab8',
        },
        profileButton: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            position: 'relative',
            marginRight: '60px',
        },
        navIcon: {
            width: '45px',
            height: '45px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginLeft: '-10px',
            verticalAlign: 'middle',
        },
        profileDropdown: {
            position: 'absolute',
            top: '60px',
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            width: '250px',
            zIndex: 1000,
            padding: '15px',
        },
        profileInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '15px',
        },
        dropdownProfileIcon: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        profileDetails: {
            display: 'flex',
            flexDirection: 'column',
        },
        profileName: {
            fontSize: '16px',
            fontWeight: 'bold',
            margin: 0,
            color: '#333',
        },
        profileEmail: {
            fontSize: '14px',
            margin: 0,
            color: '#666',
        },
        logoutButton: {
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.navLogo}>
                <img src={tala} alt="Tala" style={styles.talaImage} />
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navLinksLi}>
                    <Link
                        to="/dashboard"
                        style={styles.navLinksA}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = styles.navLinksAHover.backgroundColor;
                            e.currentTarget.style.color = styles.navLinksAHover.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'black';
                        }}
                    >
                        Dashboard
                    </Link>
                </li>
                <li style={styles.navLinksLi}>
                    <Link
                        to="/about"
                        style={styles.navLinksA}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = styles.navLinksAHover.backgroundColor;
                            e.currentTarget.style.color = styles.navLinksAHover.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'black';
                        }}
                    >
                        About
                    </Link>
                </li>
                <li style={styles.navLinksLi} ref={studyToolsRef}>
                    <span
                        style={styles.navLinksA}
                        onClick={toggleStudyTools}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = styles.navLinksAHover.backgroundColor;
                            e.currentTarget.style.color = styles.navLinksAHover.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'black';
                        }}
                    >
                        Study Tools
                    </span>
                    <ul style={styles.dropdownMenu}>
                        <li>
                            <Link
                                to="/flashcard"
                                style={styles.dropdownMenuItem}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = styles.dropdownMenuItemHover.backgroundColor;
                                    e.currentTarget.style.color = styles.dropdownMenuItemHover.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#333';
                                }}
                            >
                                Flashcards
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                style={styles.dropdownMenuItem}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = styles.dropdownMenuItemHover.backgroundColor;
                                    e.currentTarget.style.color = styles.dropdownMenuItemHover.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#333';
                                }}
                            >
                                Quizzes
                            </a>
                        </li>
                    </ul>
                </li>
                <li style={styles.navLinksLi} ref={dropdownRef}>
                    <button style={styles.profileButton} onClick={toggleDropdown}>
                        <img src={profile} alt="Profile" style={styles.navIcon} />
                    </button>
                    {dropdownOpen && (
                        <div style={styles.profileDropdown}>
                            <div style={styles.profileInfo}>
                                <img src={profile} alt="Profile" style={styles.dropdownProfileIcon} />
                                <div style={styles.profileDetails}>
                                    <p style={styles.profileName}>Aimee</p>
                                    <p style={styles.profileEmail}>aimee@example.com</p>
                                </div>
                            </div>
                            <button style={styles.logoutButton} onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;


