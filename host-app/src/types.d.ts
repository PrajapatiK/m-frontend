declare module 'todo_components/Input' {
  export default function Input(props: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error: boolean; errorMessage: string; placeholder: string }): JSX.Element;
}

declare module 'todo_components/List' {
  export default function List(props: { items: string[] }): JSX.Element;
}

declare module 'todo_components/Button' {
  export default function Button(props: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; label: string }): JSX.Element;
}