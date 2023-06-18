import "./multipleAvatars.css";
export default function MultipleAvatars({ users }) {
  return (
    <div className="avatars">
      {users.map((user, index) => {
        return (
          <span key={index} className="avatar">
            <img alt={`user ${index}`} src={user} />
          </span>
        );
      })}
    </div>
  );
}
