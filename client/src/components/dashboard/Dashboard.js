import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component
{

    onLogoutClick = () =>
    {
        this.props.logoutUser()
    }
    render ()
    {

        return (
            <div className="container mt-5">
                <div class="card-deck">
                    <div class="card bg-primary">
                        <div class="card-body text-center">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some text inside the first card</p>
                        </div>
                    </div>
                    <div class="card bg-warning">
                        <div class="card-body text-center">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some text inside the second card</p>
                        </div>
                    </div>
                    <div class="card bg-success">
                        <div class="card-body text-center">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some text inside the third card</p>
                        </div>
                    </div>
                    <div class="card bg-danger">
                        <div class="card-body text-center">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some text inside the fourth card</p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default connect(null)(Dashboard)