import styles from "@/app/ui/login/login.module.css";
//import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* <LoginForm/> */}
      <form action="" className={styles.form}>
          <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;