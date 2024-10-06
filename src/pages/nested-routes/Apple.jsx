export default function Apple() {
  return (
    <>
      <section className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Red Delicious</h5>
                <p className="card-text">
                  Known for its deep red color and sweet taste, Red Delicious
                  apples are perfect for snacking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Granny Smith</h5>
                <p className="card-text">
                  Granny Smith apples are tart and crisp, making them ideal for
                  baking and cooking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Golden Delicious</h5>
                <p className="card-text">
                  Golden Delicious apples are sweet and juicy, great for both
                  eating fresh and making applesauce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
