import http from '../utils/axios';

export const getAllUsers = () => http(`/v1/users/all`, { method: 'GET' });

export const getUserByContainingString = (string) =>
  http(`/v1/users/search/${string}`, { method: 'GET' });

export const passwordReset = (password) => {
  const data = { password };
  http(`/v1/users/password_reset`, {
    method: 'PUT',
    data,
  });
};

export const changePassword = ({ oldPassword, newPassword }) =>
  http(`/v1/users/password`, {
    method: 'PUT',
    data: {
      oldPassword,
      newPassword,
    },
  });

export const changeUsername = (newUsername) =>
  http(`/v1/users/username/${newUsername}`, { method: 'PUT' });

export const changeHeadImg = ({ headImgUrl }) =>
  http(`/v1/users/headimg`, {
    method: 'PUT',
    data: {
      headImgUrl,
    },
  });

export const changeProfileImg = ({ profileImgUrl }) =>
  http(`/v1/users/profile_img`, {
    method: 'PUT',
    data: {
      profileImgUrl,
    },
  });

export const sendVerificationEmail = (newEmail) =>
  http(`/v1/users/email/${newEmail}`, { method: 'GET' });

export const changeEmail = (newEmail) =>
  http(`/v1/users/email/${newEmail}`, { method: 'PUT' });

export const changeUsersRoles = (usersInfo) => {
  const usersProtoInfo = usersInfo.map((userInfo) => {
    const newUser = {
      id: userInfo.id,
      role: { roleName: userInfo.role },
    };
    return newUser;
  });
  http(`/v1/users/roles`, { method: 'PUT', data: usersProtoInfo });
};
