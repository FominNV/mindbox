export interface ITodoItemProps {
  id: string
  goal: string
  completed: boolean
  callback: VoidFunc<string>
}
