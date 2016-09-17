import { connect } from 'react-redux';
import { showList } from '../../action';
import FilterBar from './FilterBar';

const mapStateToProps = (state) => {
    return {
        options: state.parkingOffenderFilters,
        defaultOption: state.parkingOffenderFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelection: (selectOption, selectIndex) => {
            dispatch(showList(selectOption));
        }
    }
}

const FilterBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);

export default FilterBarContainer