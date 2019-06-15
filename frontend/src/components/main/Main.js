import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Table } from '../index.js';

export class Main extends Component {

    render() {
        return (
            <section className='main border border-primary'>
                <div className='container'>
                    <div className='row'>
                        <div className='col border border-success d-flex justify-content-center'>
                            <Switch>
                                <Route path='/' component={Table} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}