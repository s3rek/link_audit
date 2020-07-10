export class Question {
    id:number;
    category: string;
    question: string;
    options: Array<Object>;

    constructor(data: any) {
      if (data) {
          this.id = data.id;
          this.category = data.category;
          this.question = data.question;
          this.options = [data.optionid, data.option, data.points, data.tip];
      }
  }
}