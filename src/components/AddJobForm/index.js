import React, { Component } from 'react';

class AddJobForm extends Component {
    render() {
        return (
            <section>
                <div class="container">
                    <h1 class="title">Adaugă anunț</h1>

                    <form action="/add" method="post">

                        <div class="field">
                            <label class="label is-large" for="jobTitle">Titlu job</label>
                            <div class="control">
                                <input class="input is-large" type="text" id="jobTitle" name="jobTitle" placeholder="Software Developer" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label is-large">Categorie</label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="design" /> Design
                                </label>
                            </div>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="programming" /> Programming
                                </label>
                            </div>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="customer_support" /> Customer Support
                                </label>
                            </div>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="copywriting" /> Copywriting
                                </label>
                            </div>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="devops_sysadmin" /> DevOps &amp; Sysadmin
                                </label>
                            </div>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="marketing" /> Marketing
                                </label>
                            </div>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="business" /> Business/Exec &amp; Management
                                </label>
                            </div>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="category" value="other" /> All Other
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label is-large" for="job-description">Descriere job</label>
                            <textarea class="textarea" name="job-description" id="job-description" placeholder="10 lines of textarea" rows="10"></textarea>
                        </div>

                        <div class="field">
                            <label class="label" for="salary">Monthly Salary ($)</label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" name="salary" id="salary" placeholder="5500" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-euro-sign"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label is-large" for="how-to-apply">Cum să aplici</label>
                            <textarea class="textarea" name="how-to-apply" id="how-to-apply" placeholder="10 lines of textarea" rows="10"></textarea>
                        </div>

                        <h2 class="subtitle">Câteva detalii despre companie</h2>

                        <div class="field">
                            <div class="control">
                                <label class="label" for="yourCompanyName">Your company name</label>
                                <input class="input" type="text" id="yourCompanyName" name="yourCompanyName" placeholder="Abilitate SRL" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label" for="yourCompanyWebsite">Company website</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" id="yourCompanyWebsite" name="yourCompanyWebsite" placeholder="abilitate.ro" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-home"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label" for="companyEmail">Company email (This will be published)</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" id="companyEmail" name="companyEmail" placeholder="contact@company.com" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label" for="yourCompanyEmail">Your company email (This will NOT be published)</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" id="yourCompanyEmail" name="yourCompanyEmail" placeholder="me@company.com" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button type="submit" class="button is-primary is-large">Postează anunțul</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section >
        );
    }
}

export default AddJobForm;
