import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { SET_APP_STATE } from '../../redux/actions/app/app.action.types'
import { AppReducerType } from '../../redux/reducers/app/app.reducer.types'
import { ReduxState } from '../../redux/store/state.type'
import store from '../../redux/store/store'

interface Props {
    app: AppReducerType
}

function Search({ app }: Props): ReactElement {

    const toggleSearch = () => {
        store.dispatch({
            type: SET_APP_STATE,
            payload: {
                showSearch: !store.getState().app.showSearch
            }
        })
    }


    return (
        <div className={`search ${app.showSearch ? "search-open" : ""}`}>
            <div className="container-fluid">
                <div className="search-width  text-center">
                    <button type="button" className="close" onClick={toggleSearch}>
                        <i className="icon_close"></i>
                    </button>
                    <form className="search-form" action="#">
                        <input type="search" placeholder="What are you looking for?" />
                        <button type="submit" className="search-btn">search</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state: ReduxState) => ({
    app: state.app,
})

export default connect(
    mapStateToProps
)(Search)
