import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <section class="hero is-primary has-text-centered">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column">
                                <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Locuri de muncă pentru persoane cu dizabilitați</h1>
                                <h2 class="subtitle is-size-4-desktop">Găsiți cele mai bune locuri de muncă la cele mai bune companii care sunt adevărați furnizori de oportunități egale.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-foot">
                </div>
            </section>
        );
    }
}

export default Hero;
