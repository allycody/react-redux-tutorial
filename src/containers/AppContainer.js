import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = (state) => ({
	state
})
const mapDispatchTpProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(App);
