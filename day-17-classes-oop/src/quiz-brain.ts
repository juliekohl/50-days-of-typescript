export class QuizBrain {
    questionNumber: number;
    score: number;
    questionList: any;

    constructor(qList: any) {
        this.questionNumber = 0;
        this.score = 0;
        this.questionList = qList;
    }

    public stillHasQuestions() {
        return this.questionNumber < this.questionList.length;
    }

    public nextQuestion(): void {
        let currentQuestion: any = this.questionList[this.questionNumber];

        this.questionNumber += 1;

        let userAnswer: string = `Q. ${this.questionNumber}: ${currentQuestion.text} (True/False): `;

        this.checkAnswer(userAnswer, currentQuestion.answer);
    }

    public checkAnswer(userAnswer: string, correctAnswer: string): void {
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            this.score += 1;
            console.log("You got it right!");
        } else {
            console.log("That's wrong.");
        }
        console.log(`The correct answer was: ${correctAnswer}.`);
        console.log(`Your current score is: ${this.score}/${this.questionNumber}`);
        console.log("\n");
    }
}
