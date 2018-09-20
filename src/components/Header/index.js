import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav class="navbar is-transparent">
                <div class="container">
                    <div class="navbar-brand"><a class="navbar-item" href="/"><span role="img" aria-label="om în scaun cu rotile">&#9855;</span> abilitate</a></div>
                    <div class="navbar-menu" id="navMenu">
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <p class="control"><a class="button is-primary is-rounded" href="/add"><span>Adaugă Anunț</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
