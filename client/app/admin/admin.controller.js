'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor(User, Auth) {
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}
