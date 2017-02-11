// @flow
import { connect } from 'react-redux';
import Stats from '../../components/counter';

const addNumAction = () => ({
  type: 'ADD_ONE',
  increment: 1,
});

const mapStateToProps = state => ({
  userStats: state.userStats,
});

const mapDispatchToProps = dispatch => ({
  incrementNum: () => dispatch(addNumAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
