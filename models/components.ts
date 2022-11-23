import { ButtonHTMLAttributes, ChangeEvent, ImgHTMLAttributes } from 'react';
import { User, Post, Game } from './responseTypes';

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
  posts: Post[];
}

export interface GameCardProps {
  userGames: Game[];
}

export interface UserGeneralInfoProps {
  user: User;
  shownComponent: string;
  setShownComponent: React.Dispatch<
    React.SetStateAction<'feed' | 'games' | 'info'>
  >;
}
export interface UserInfoProps {
  user: User;
}

export interface PostListProps {
  postList: Post[] | [];
  //user: User;
}

export interface SidebarProps {
  isMenuOpen: boolean;
  onCloseMenu: () => void;
}
//Feedback types

export interface FeedbackProps {
  status: 'success' | 'error' | 'warning';
  title: string;
  message: string;
  onClose: () => void;
}

export interface FeddbackObject {
  status: 'success' | 'error' | 'warning';
  title: string;
  message: string;
  show: boolean;
}
