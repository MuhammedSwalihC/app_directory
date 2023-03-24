import { AppsActions } from "./apps.actions";
import { AppsService } from "../../services/apps.services";

export const Apps = (request) => (dispatch) => {
  dispatch(AppsActions.sendRequest());
  if (request.method === "POST") {
    AppsService[request.module](request.data)
      .then((response) => {
        dispatch(
          AppsActions.objectCreate({
            data: response.data,
            fields: request.fields,
            clearField: request.clearField,
            message: "Successfully Created!",
          })
        );
      })
      .catch((error) =>
        dispatch(
          AppsActions.objectMessage({
            message: error.message,
          })
        )
      );
  } else if (request.method === "LIST") {
    AppsService[request.module](request.data)
      .then((response) =>
        dispatch(
          AppsActions.objectsList({
            data: response.data,
            fields: request.fields,
            clearField: request.clearField,
          })
        )
      )
      .catch((error) =>
        dispatch(
          AppsActions.objectMessage({
            mesage: error.message,
          })
        )
      );
  } else if (request.method === "PUT") {
    AppsService[request.module](request.data, request.id)
      .then((response) =>
        dispatch(
          AppsActions.objectUpdate({
            data: response.data,
            fields: request.fields,
            clearField: request.clearField,
            message: "Successfully Updated",
          })
        )
      )
      .catch((error) =>
        dispatch(
          AppsActions.objectMessage({
            message: error.message,
          })
        )
      );
  } else if (request.method === "PATCH") {
    AppsService[request.module](request.data, request.id)
      .then(
        (response) => null
        // dispatch(
        //   AppsActions.objectUpdate({
        //     data: response.data,
        //     fields: request.fields,
        //     clearField: request.clearField,
        //   })
        // )
      )
      .catch((error) =>
        dispatch(
          AppsActions.objectMessage({
            errorMessage: error.messagel,
          })
        )
      );
  }
};
