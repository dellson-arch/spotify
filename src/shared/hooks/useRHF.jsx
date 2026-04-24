import { useForm } from "react-hook-form";

export let useRHF = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isValid},
  } = useForm({
    mode: "onChange",
  });
  return {
    register,
    handleSubmit,
    errors,
    isValid,
    reset
  };
};