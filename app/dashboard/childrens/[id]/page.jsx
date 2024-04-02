//import { updateChildren } from "@/app/lib/actions";
//import { fetchChildren } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/childrens/singleChildren/singleChildren.module.css";
import Image from "next/image";

const SingleChildrenPage = async () => {
  //const { id } = params;
  //const children = await fetchChildren(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        francis
        {/* {children.title} */}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="" />
          <label>Title</label>
          <input type="text" name="title" placeholder="" />
          <label>Price</label>
          <input type="number" name="price" placeholder="" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            // placeholder={children.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            // placeholder={children.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            // placeholder={children.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleChildrenPage;
