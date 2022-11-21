import { ButtonHTMLAttributes, ChangeEvent, ImgHTMLAttributes } from 'react';
import { User, Post } from './responseTypes';

export interface SidebarProps {
  onCloseMenu: () => void;
  isMenuOpen: boolean;
}

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
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface FileInputType {
  text: string;
  icon: JSX.Element;
  value: File | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface DropdownType {
  id: string;
  name: string;
  options: DropdownOptions[];
  value: string | File;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface DropdownOptions {
  value: string;
  text: string;
}

export interface FeedProps {
  dropdownOptions: DropdownOptions[];
}

export interface GameCardProps {
  gameName: string;
  gameImg: string;
  elo: string;
  eloImg: string;
  roleImg: string;
  role: string;
}

export interface UserGeneralInfoProps {
  user: User;
}

export interface PostListProps {
  postList: Post[] | [];
  user: User;
}
