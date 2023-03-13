export interface ApiResponse {
  status: number;
  message: string;
  // Add other properties as needed
}
export interface User {
  name:string;

  token:any;
}
export interface ApiResponse {
  status: number;
  token?: string;
  user_id?:any;
  name?:string;
  // other properties
}
