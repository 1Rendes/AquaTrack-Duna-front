import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './WelcomeSection.module.css';
import Logo from '../Logo/Logo';
const WelcomeSection = () => {
        const navigate = useNavigate();

        return (
                <div className={css.welcomesection}>
                        <Logo />
                        <div className={css.titleSection}> 
                                 <p className={css.subtitle}>Record daily water intake and track</p>
                        <h1 className={css.title}>Water consumption tracker</h1>
                        <div className={css.buttons}>
                                <button className={css.tracker} onClick={() => navigate('/singup')}> Try tracker </button>
                                <button className={css.singUp} onClick={() => navigate('/singin')}>Singn In</button>
                        </div>
                        </div>
                </div>
                );
        };

export default WelcomeSection;
        