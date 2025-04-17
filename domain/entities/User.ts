export interface User {
  user_id: string; // UUID
  email: string;
  password?: string;
  nickname: string;
  onboardingCompleted: boolean;
  temperatureSetting: number;
  profileImage: string;
  provider: 'kakao' | 'email';
}
