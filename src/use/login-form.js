import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import router from "../router";

export function useLoginForm(){
    const router = useRouter();
    const store = useStore();
    const { handleSubmit, isSubmitting } = useForm();
    const {
      value: login,
      errorMessage: lError,
      handleBlur: lBlur,
    } = useField(
      "login",
      yup.string().trim().required("Для авторизации необходим логин")
    );
    const {
      value: password,
      errorMessage: pError,
      handleBlur: pBlur,
    } = useField("password", yup.string().trim().required("Введите пароль"));
    const onSubmit = handleSubmit(async (values) => {
       await store.dispatch('auth/login', values)
       router.push('/')
    });
    return {
      login,
      password,
      lError,
      pError,
      lBlur,
      pBlur,
      onSubmit,
      isSubmitting
    }
}