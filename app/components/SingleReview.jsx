import React from 'react'

export default (props) => {
  const review = props.review
    return (
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">

                <div className="col-md-4">
                  <h4>Rating: {review.rating}/5</h4>
                  <dl>
                    <dt>By:</dt>
                    <dd>{review.user.name || 'Anonymous'}</dd>
                    <dt>Date:</dt>
                    <dd>{review.created_at.slice(0,10)}</dd>
                  </dl>
                </div>

                <div className="col-md-12">
                  <dl>
                    <dt>Review:</dt>
                    <dd>{review.body}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        )
}
