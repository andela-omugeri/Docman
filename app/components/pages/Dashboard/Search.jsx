import React from 'react';
import {
  FlatButton,
  DatePicker,
} from 'material-ui';
import { connect } from 'react-redux';
import { searchQuery } from '../../../actions/searchActions.js';
import Style from '../../../shared/styles/styles.css';
import Documents from './UserDocuments.jsx';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch = (event, date) => {
    this.setState({ search: date });
    const searchDate = (this.state.search).toISOString().replace(/T.*/g, '');
    this.props.searchQuery(searchDate);
  }
  // handleSubmit = () => {
  //   const searchDate = (this.state.search).toISOString().replace(/T.*/g, '');
  //   this.props.searchQuery(searchDate);
  // }
  render() {
    return (
      <div style={{ display: 'flex' }}>
          <DatePicker
            hintText="Search by date"
            value={this.state.search}
            onChange={this.handleSearch}
            className={Style.datePicker}
            textFieldStyle={{ width: '70%' }}
            autoOk={true}
          />
          {/*<FlatButton
            label="Search"
            onTouchTap={this.handleSubmit}
            labelStyle={{ color: '#fff' }}
            backgroundColor='#9C27B0'
            isKeyboardFocused={true}
            className={Style.datePicker}
          />*/}
          { this.props.resultsMenu ? <Documents
            display={this.props.searchInfo}
          /> : true}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    resultsMenu: state.menu.userDocOpen,
    searchInfo: state.display,
  };
}
export default connect(mapStateToProps, { searchQuery })(Search);
