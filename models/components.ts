export interface AvatarInputType {
  id: string;
  placeholder: string;
  avatar: string;
  label: string;
  cssModule?: string;
}

export interface ButtonType {
  label: string;
  color?: string;
  cssModule?: string;
}

export interface CreatePostType {
  avatarInput: AvatarInputType;
  button: ButtonType;
}
