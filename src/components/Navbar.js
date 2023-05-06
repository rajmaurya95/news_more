import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
    static propTypes = {

    }


    render() {
        let { search_Q } = this.props;
        return (
            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">NewsMore</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">about</Link>
                            </li>

                            <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" id='searchbar' placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" onClick={search_Q} type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
