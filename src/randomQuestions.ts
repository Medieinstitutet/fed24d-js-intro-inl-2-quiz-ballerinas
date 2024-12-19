// Placeholder until array is created with all attributes.
type Question = {
  id: number;
  question: string;
  played: boolean;
};
//                                   Input: Question Array    Return: Question Array
export function getRandomQuestions(questionsArray: Question[]): Question[] {
  const allPlayed = questionsArray.every(question => question.played); 
  // Checks if all questions are played = true and then returns true if that's the case. 
  // So allPlayed will = true if every question has been played.

  if (allPlayed) {
    // Reset all questions to unplayed
    questionsArray.forEach(question => {
      question.played = false;
    });
  }
  // Takes all question that are not played = true
  const availableQuestions = questionsArray.filter(question => !question.played); 
  // Shuffles the questions so they are random
  const shuffledQuestions = availableQuestions.sort(() => Math.random() - 0.5); 
  // Takes 10 questions from the shuffled array
  const selectedQuestions = shuffledQuestions.slice(0, 10); 
    selectedQuestions.forEach((question) => { 
      // Marks the selected questions as played = true
        question.played = true; 
    });
    
    return selectedQuestions;
}