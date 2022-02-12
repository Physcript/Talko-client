


export interface IUser {
  _id: string,
  name: string,
  email: string,
  uid: string,
  createdAt: Date,
  updatedAt: Date
}

export const defaultUser: IUser = {
  _id: '',
  name: '',
  email: '',
  uid: '',
  createdAt: new Date(),
  updatedAt: new Date()
}
