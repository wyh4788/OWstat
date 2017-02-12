// @flow
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/fetch-user-data/fetch-user-data';
import Stats from '../../components/counter';

<<<<<<< HEAD
=======
const addNumAction = () => ({
  type: 'ADD_ONE',
  increment: 1,
});

>>>>>>> parent of a1fc9f5... Add feature: add multiply button
const mapStateToProps = state => ({
  userStats: state.userStats,
});

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  fetchUserData: userId => dispatch(fetchUserData(userId)),
=======
  incrementNum: () => dispatch(addNumAction()),
>>>>>>> parent of a1fc9f5... Add feature: add multiply button
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
