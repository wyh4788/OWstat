// @flow
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/fetch-user-data/fetch-user-data';
import Stats from '../../components/stats';

const mapStateToProps = state => ({
  userStats: state.userStats,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userId => dispatch(fetchUserData(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
