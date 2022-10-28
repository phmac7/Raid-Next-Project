export interface AvatarInputType {
  id: string;
  placeholder: string;
  avatar: string;
  label: string;
}

export interface ButtonType {
  label: string;
  color?: string;
}

export interface CreatePostType {
  avatarInput: AvatarInputType;
  button: ButtonType;
}
