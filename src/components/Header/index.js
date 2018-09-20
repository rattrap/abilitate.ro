import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav class="navbar is-transparent">
                <div class="container">
                    <div class="navbar-brand"><a class="navbar-item" href="/"><span role="img" aria-label="om în scaun cu rotile">&#9855;</span> abilitate</a></div>
                    <div class="navbar-menu" id="navMenu">
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <p class="control">
                                    <Link to="/add" className="button is-primary is-rounded"><span>Adaugă Anunț</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
