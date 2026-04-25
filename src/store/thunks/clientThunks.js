import api from "../../api/axios";
import { setRoles } from "../actions/clientActions";

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
      return;
    }

    try {
      const response = await api.get("/roles");

      const roleList = Array.isArray(response.data)
        ? response.data
        : response.data?.roles || [];

      dispatch(setRoles(roleList));
    } catch (error) {
      console.error("Roles alınamadı:", error);
    }
  };
};