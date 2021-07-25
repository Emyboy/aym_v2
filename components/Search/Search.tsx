import axios from 'axios'
import Link from 'next/link'
import React, { ReactElement, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Global from '../../Global'
import { SET_APP_STATE } from '../../redux/actions/app/app.action.types'
import { AppReducerType } from '../../redux/reducers/app/app.reducer.types'
import { ReduxState } from '../../redux/store/state.type'
import store from '../../redux/store/store'

interface Props {
    app: AppReducerType
}

function Search({ app }: Props): ReactElement {
    const [keyword, setKeyword] = useState<string>('');
    const [results, setResults] = useState([]);

    const toggleSearch = () => {
        store.dispatch({
            type: SET_APP_STATE,
            payload: {
                showSearch: !store.getState().app.showSearch
            }
        })
    };

    const seasrch = () => {
        axios(Global.SITE_URL + '/api/scrape/search/' + keyword)
            .then(res => {
                console.log(res)
                setResults(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const EachSearch = ({ result }: any) => {
        return <ul className="widget-latest-posts border-bottom">
            <li className="last-post">
                <div className="image">
                    <Link href={result.link}>
                        <img src={'netn'+result.image_url} alt="..." onClick={() => store.dispatch({
                            type: SET_APP_STATE,
                            payload: {
                                showSearch: false
                            }
                        })} />
                    </Link>
                </div>
                <div className="content">
                    <p onClick={() => store.dispatch({
                        type: SET_APP_STATE,
                        payload: {
                            showSearch: false
                        }
                    })}>
                        <Link href={'netn'+result.link}>{result.name}</Link>
                    </p>
                    <small>
                        {result.description}
                    </small>
                </div>
            </li>
        </ul>
    };

    useEffect(() => {
        seasrch()
    }, [keyword]);


    return (
        <div className={`search ${app.showSearch ? "search-open" : ""}`}>
            <div className="container-fluid">
                <div className="search-width  text-center">
                    <button type="button" className="close" onClick={toggleSearch}>
                        <i className="icon_close"></i>
                    </button>
                    <form className="search-form" action="#">
                        <input type="search" placeholder="What are you looking for?" onChange={e => setKeyword(e.target.value)} />
                        <button type="submit" className="search-btn">search</button>
                    </form>
                </div>
                {
                    results.length > 0 ? <section className="search-dropdown bg-white p-2 shadow mt-5" style={{
                        borderRadius: '20px', zIndex: 100, height: '50vh',
                        overflowY: 'scroll'
                    }}>
                        {
                            results.map((val, i) => {
                                return <EachSearch key={i} result={val} />
                            })
                        }
                    </section> : null
                }
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
