import "./multipleAvatars.css";
export default function MultipleAvatars({ users }) {
  return (
    <div class="avatars">
      {users.map((user, index) => {
        return (
          <span class="avatar">
            <img alt={`user ${index}`} src={user} />
          </span>
        );
      })}
    </div>
  );
}
