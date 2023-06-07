import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import UserList from './components/UserList';

//eslint-disable

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const users = await getUsers();
  return (
   // @ts-ignore: Unreachable code error
    <Sidebar>
      <div className="h-full"> <UserList items={users} />{children}</div>
    </Sidebar>
  );
}
