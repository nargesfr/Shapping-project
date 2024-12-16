import Button from "../../component/Button";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./login.module.scss";
import TextInput from "../../component/TextInput";
import {postData} from "../../routes/services/apiClient"
import {useAuth} from "../../component/hocks/useAuth"
import { useNavigate } from "react-router-dom";



const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate()
  const {setAuth} = useAuth ();
  const onSubmit = async({username, password}) => {
    console.log(errors);
    try{
   const response = await postData("/auth/login",{
    username,
    password,
  });

  setAuth(response);
  reset({username:"",password:""});
  navigate("/");
  console.log("response",response);
} catch (error) {
  console.log(error);
}
};

  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputField}>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextInput {...field} label="Username" error={errors.username?.message} />
            )}
          />
          {errors.username && <div className={styles.errorMessage}>{errors.username?.message}</div>}
        </div>

        <div className={styles.inputField}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextInput {...field} label="Password" type="password" error={errors.password?.message} />
            )}
          />
          {errors.password && <div className={styles.errorMessage}>{errors.password?.message}</div>}
        </div>

        <Button className={styles.submitButton}>Submit</Button>
      </form>
    </div>
  );
};

export default Login;