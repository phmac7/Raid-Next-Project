import { type } from 'os';
import { ButtonHTMLAttributes, ChangeEvent, ImgHTMLAttributes } from 'react';
import { User } from './responseTypes';

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
  value: File;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface DropdownType {
  id: string;
  name: string;
  options: DropdownOptions;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export type DropdownOptions = {
  value: string;
  text: string;
}[];

export interface GameCardProps {
    gameName: string,
    gameImg:string,
    elo: string,
    eloImg: string,
    roleImg: string,
    role: string,
}

export interface UserTitleProps {
    user:User
}
