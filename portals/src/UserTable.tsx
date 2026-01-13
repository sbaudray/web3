import { Fragment } from "react/jsx-runtime";

const users = [
  { id: 1, name: "Charles", age: 21 },
  { id: 2, name: "Jean", age: 17 },
  { id: 3, name: "Hubert", age: 29 },
];

export function UserTable() {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Fragment key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>

            {user.age < 18 && (
              <tr>
                <td colSpan={3}>Cet utilisateur est trop jeune.</td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
