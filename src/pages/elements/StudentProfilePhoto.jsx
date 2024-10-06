export default function StudentProfilePhoto(props) {
  return (
    <>
      <img
        className="card-img-top"
        src={props?.student?.profilesrc}
        alt="hello there...."
      />
    </>
  );
}
