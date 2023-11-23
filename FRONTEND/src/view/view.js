import { formNewUser } from "./form-new-user.js";
import { resultView } from "./result-view.js";

const view = {
  render: () => {
    formNewUser.build();
    resultView.build();
  },

  update: (userArray, userToUpdate) => {
    resultView.update(userArray);
    formNewUser.update(userToUpdate);
  },

  updateForm: (userToUpdate) => {
    formNewUser.update(userToUpdate);
  },
};

export { view };
