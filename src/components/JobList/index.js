import React, { Component } from 'react';

class JobList extends Component {
    render() {
        return (
            <section class="section">
                <div class="container">
                    <h1 class="title">Găsește</h1>
                    <h2 class="subtitle">Cele mai recente joburi în toate orașele</h2>

                    <table class="table is-bordered is-striped is-narrow is-fullwidth">
                        <thead>
                            <tr>
                                <th>POZIȚIE</th>
                                <th>COMPANIE</th>
                                <th>CATEGORIE</th>
                                <th>DATĂ</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <a href="job?id=1">Senior Software Developer</a>
                                </td>

                                <td>Abilitate punct ro</td>
                                <td><span class="label label-rounded label-primary">programare</span></td>
                                <td>24 Aug 2018</td>
                            </tr>

                            <tr>
                                <td>
                                    <a href="job?id=2">HR Recruting Specialist</a>
                                </td>

                                <td>Abilitate punct ro</td>
                                <td><span class="label label-rounded label-primary">altele</span></td>
                                <td>22 Aug 2018</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default JobList;
