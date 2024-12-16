import { useState } from "react"; 
import styles from "./textInput.module.scss"; 
import FormErrorMessage from "../../component/formErroreMassage";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const TextInput = ({
  label,
  onChange,
  value = "", // مقدار پیش‌فرض برای جلوگیری از undefined
  className = "", // مقدار پیش‌فرض برای جلوگیری از undefined
  placeholder = "",
  type = "text",
  error,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputWrapper}>
        <input
          type={showPass ? "text" : type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={styles.input}
        />

        {type === "password" && (
          <div
            className={styles.toggleButton}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        )}
      </div>

      {error && <FormErrorMessage error={error || "خطای نامشخص"} />}
    </div>
  );
};

export default TextInput;