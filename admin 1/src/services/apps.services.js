import { admin } from "../api/apiClient";
import { requestHeaders } from "./requestHeaders";

export const AppsService = {
  registerPost: async (data = null) =>
    await admin.post("register_super_admin", data, { headers: requestHeaders() }),
  loginPost: async (data = null) =>
    await admin.post("login/", data, { headers: requestHeaders() }),
  userPost: async (data = null) =>
    await admin.post("auth/module_admin", data, { headers: requestHeaders() }),
  addMember: async (data = null) =>
    await admin.post("auth/add_team_member", data, {
      headers: requestHeaders(),
    }),
  rolesPost: async (data = null) =>
    await admin.post("auth/roles", data, { headers: requestHeaders() }),
  teamPost: async (data = null) =>
    await admin.post("auth/team", data, { headers: requestHeaders() }),
  permissionsPost: async (data = null) =>
    await admin.post("auth/permissions", data, { headers: requestHeaders() }),
  listItems: async (data = null) =>
    await admin.post(`auth/list_of_items`, data, { headers: requestHeaders() }),
    teachersList: async (data = null) =>
    await admin.get(`teachers/`, data, { headers: requestHeaders() }),
  departmentPost: async (data = null) =>
    await admin.post("teachers/", data, { headers: requestHeaders() }),
  departmentPatch: async (data = null, id) =>
    await admin.patch("teachers/" + "/" + id, data, {
      headers: requestHeaders(),
    }),
  menuPost: async (data = null) =>
    await admin.post("auth/menu", data, { headers: requestHeaders() }),
  menuPatch: async (data = null, id) =>
    await admin.patch("auth/menu_modify" + "/" + id, data, {
      headers: requestHeaders(),
    }),
};
