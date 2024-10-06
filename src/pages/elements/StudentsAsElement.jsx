export default function StudentAsElement(props) {
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">
          {props?.student?.firstname} {`${" "}`} {props?.student?.lastname}
          <div className="text-muted">
            <small>{props?.student?.email}</small>
          </div>
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </>
  );
}
