import { useState } from "react";
import serverApi from "../api/baseUrl";
import { useLocalStorage } from "./useLocalStorage";
interface UseAuthProps {
  usernameOrEmail: string;
  password: string;
}
export function useAuth() {
  const [token, setToken] = useState("");

  const login = (data: UseAuthProps) => {
    console.log("data2",data);
    
    serverApi.post("klb", data).then((res) => {
      const { setValue } = useLocalStorage("accessToken", res.data.AccessToken);
      setToken(res.data.AccessToken);
    });
  };
  const refresh = () => {};
  return { login, token };
}
