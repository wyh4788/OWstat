// @flow
import axios from 'axios';
import { connect } from 'react-redux';
import Stats from '../../components/stats';


const fetchUserInfo = userId => (
  (dispatch, getState) => axios(`https://owapi.net/api/v3/u/${userId}/stats`)
      .then(data => dispatch({
        type: 'FETCH_SUCCESS',
        payload: data,
      }))
      .catch(error => dispatch({
        type: 'FETCH_FAIL',
        payload: error,
      }))
);

const mapStateToProps = state => ({
  userStats: state.userStats,
});

const mapDispatchToProps = dispatch => ({
  fetchInfo: userId => dispatch(fetchUserInfo(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
