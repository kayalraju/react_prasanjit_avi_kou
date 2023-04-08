import React from 'react'

const GetUser = ({users}) => {
  console.log(users);

  return (
    <>
       <div className="container">
                <h1>Fetch User DAta</h1>
                <hr />
                <div className="row">
                    {
                        users.map((data) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div class="card" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Name: {data.name}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">{data.username}</h6>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="card-link">Card link</a>
                                                <a href="#" class="card-link">Another link</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
    </>
  )
}

export default GetUser
