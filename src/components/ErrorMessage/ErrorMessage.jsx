import { useSelector } from "react-redux";
import css from "./ErrorMessage.module.css";
import { selectError } from "../../redux/contactSlice";

export default function ErrorMessage() {
  const error = useSelector(selectError);
  return <p>{error}</p>;
}
