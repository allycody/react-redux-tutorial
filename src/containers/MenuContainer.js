import { connect } from 'react-redux';
import Menu from '../components/Menu';
import {addItemToPlate} from '../action-creators/plate.js'

//todo: define mapStateToProps
const mapStateToProps = ({menu}) => ({
	menu
})

//todo: define mapDispatchToProps
const mapDispatchToProps = dispatch => ({
	addItem : (item) => {
		const newPlates = [item];
		console.log('item: ', item);
		console.log('newPlates: ', newPlates );
		dispatch(addItemToPlate(newPlates))}
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
