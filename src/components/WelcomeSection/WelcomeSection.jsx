import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
                                        <NavLink to="/singup" className={css.tracker} > Try tracker </NavLink>
                                        <NavLink  to = "/singin" className={css.tracker} > Sing In </NavLink>
                        </div>
                        </div>
                </div>
                );
        };

export default WelcomeSection;
        