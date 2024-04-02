//import { deleteUser } from "@/app/lib/actions";
//import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async() => {
  //const q = searchParams?.q || "";
  //const page = searchParams?.page || 1;
  const users = await fetchUsers();
  
  console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => ( */}
            {/* <tr key={user.id}> */}
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  francis
                  {/* {user.username} */}
                </div>
              </td>
              <td>john@gmail.com</td>
              <td>13.1.2022</td>
              <td>admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/users/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                  </button>
                </div>
                {/* </div> */}
              </td>
            {/* </tr> */}
          {/* ))} */}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
