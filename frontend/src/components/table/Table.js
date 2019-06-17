import React, { Component } from 'react';
import './Table.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendRequestActionTable, currentPageChangeAction } from '../../actions/index';
import { Pagination } from 'antd';

const uuidv4 = require('uuid/v4');

class TableContainer extends Component {
    
    componentDidMount() {
        this.props.sendRequest('https://jsonplaceholder.typicode.com/posts');
    }

    listHandler = (currentPage, countOfPages) => {
        this.props.changeCurrentPage(currentPage, countOfPages);
    }

    render() {
        return (
            <div className='table-wrapper'>
                <div className='pagination-wrapper'>
                    <Pagination showQuickJumper size='small' onChange={this.listHandler} pageSize={10} 
                        defaultCurrent={1} total={this.props.data.length} />
                </div>
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
                            { this.props.currentData.map(item => (
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
        data: state.tableData.data,
        currentData: state.tableData.currentData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendRequest: bindActionCreators(sendRequestActionTable, dispatch),
        changeCurrentPage: bindActionCreators(currentPageChangeAction, dispatch)
    }
}

export const Table = connect(mapStateToProps, mapDispatchToProps)(TableContainer);