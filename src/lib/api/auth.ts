import { apiClient } from "./client";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      fullName: string;
      email: string;
      role: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      lastLoginAt: string;
      lastLoginIP: string;
    };
    accessToken: string;
  };
}

export interface SignUpResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    fullName: string;
    email: string;
  };
}

export const authApi = {
  signIn: async (data: SignInRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/users/login", data);
    return response.data;
  },

  signUp: async (data: SignUpRequest): Promise<SignUpResponse> => {
    const response = await apiClient.post<SignUpResponse>(
      "/users/register",
      data
    );
    return response.data;
  },
};
