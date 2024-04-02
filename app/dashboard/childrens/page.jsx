import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/childrens/childrens.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
//import { fetchChildrens } from "@/app/lib/data";
//import { deleteChildren } from "@/app/lib/actions";

const ChildrensPage = () => {
  //const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  // const { count, childrens } = await fetchChildrens(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a child..." />
        <Link href="/dashboard/childrens/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {childrens.map((children) => ( */}
            <tr>
              <td>
                <div className={styles.children}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.childrenImage}
                  />
                  Iphone
                  {/* {children.title} */}
                </div>
              </td>
              <td>Desc</td>
              <td>$999</td>
              <td>13.01.2024</td>
              <td>75</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/childrens/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteChildren}> */}
                    {/* <input type="hidden" name="id" value={children.id} /> */}
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  {/* </form> */}
                </div>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ChildrensPage;
