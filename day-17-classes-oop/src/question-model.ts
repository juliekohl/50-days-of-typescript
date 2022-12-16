export class QuestionModel {
    text: string;
    answer: string;

    constructor(qText: string = '', qAnswer: string = '') {
        this.text = qText;
        this.answer = qAnswer;
    }
}
