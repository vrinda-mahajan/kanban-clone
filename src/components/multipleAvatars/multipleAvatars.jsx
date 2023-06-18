import "./multipleAvatars.css";
export default function MultipleAvatars({ users, reversed,size }) {
  return (
    <div className={`avatars ${reversed ? "avatars-reverse" : ""}`}>
      {users.map((user, index) => {
        return (
          <span
            key={index}
            className={`avatar ${
              reversed
                ? "avatar-reverse avatar-margin-left"
                : "avatar-margin-right"
            } ${size==="small"?"avatar-small":"avatar-medium"}`}
          >
            <img alt={`user ${index}`} src={user} />
          </span>
        );
      })}
    </div>
  );
}
