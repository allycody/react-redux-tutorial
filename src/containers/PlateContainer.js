import { connect } from 'react-redux';
import Plate from '../components/Plate';

//todo: define mapStateToProps
const mapStateToProps = ({plate}) => ({
	plate
})

//todo: define mapDispatchToProps
const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plate);
