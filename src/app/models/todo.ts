export class Todo {
  id: number
  content: string
  isDone: boolean


  constructor(id: number, content: string, isDone: boolean) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
  }
}
