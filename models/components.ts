import { ButtonHTMLAttributes, ImgHTMLAttributes } from 'react';

export interface AvatarType extends ImgHTMLAttributes<HTMLImageElement> {
  avatar: string;
}

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
  cssModule?: string;
}

export interface CreatePostType {
  avatar: AvatarType;
  button: ButtonType;
}

// Post Create Modal Types

export interface ModalType {
  onCloseModal: () => void;
  header: JSX.Element;
  main: JSX.Element;
  footer: JSX.Element;
  ref: React.ForwardedRef<HTMLDialogElement>;
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
