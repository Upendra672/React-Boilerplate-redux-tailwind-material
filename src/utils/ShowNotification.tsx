import toast from "react-hot-toast";

export default function ShowNotification(message: string, type: string) {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
  }
}