export interface Props {
  message: string;
}

export interface PropsChildren extends Props {
  children: React.ReactNode;
}

export interface PropsClassName extends PropsChildren {
  className: string;
}
