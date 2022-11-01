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

// Post Create Modal Types

export interface ModalType {
  header: React.FC;
  main: React.FC;
  footer: React.FC;
}

export interface TextAreaType {
  id: string;
  rows?: number;
  cols?: number;
  placeholder: string;
  label: string;
}

export interface DropdownType {
  id: string;
  name: string;
  options: { value: string; text: string }[];
}
