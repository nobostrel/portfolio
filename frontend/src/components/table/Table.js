import React, { Component } from 'react';
import './Table.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendRequestActionTable } from '../../actions/index';

const uuidv4 = require('uuid/v4');

class TableContainer extends Component {
    state = {
        listCount: 10,
        dataLength: Math.ceil(this.props.data.length / this.state.listCount),
        pages: []
    }

    componentDidMount() {
        this.props.sendRequest('https://jsonplaceholder.typicode.com/posts');
    }

    render() {
        return (
            <div className='table-wrapper'>
               
                <table className='mainTable'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER ID</th>
                                <th>TITLE</th>
                                <th>BODY</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.data.map(item => (
                                <tr key={uuidv4()}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )) }
                        </tbody>
                    </table> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.tableData.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendRequest: bindActionCreators(sendRequestActionTable, dispatch)
    }
}

export const Table = connect(mapStateToProps, mapDispatchToProps)(TableContainer);