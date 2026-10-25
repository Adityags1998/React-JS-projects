"use client"
import Footer from "./footer"
import Header from "./header"
import React from "react";
import Question from "./question";

const questions = [
  {
    question: "what is the capital of France?",
    answer: "Paris"
  },
  {
    question: "what is the capital of Germany?",
    answer: "Berlin"  
  },
  {
    question: "what is the capital of Italy?",
    answer: "Rome"
  }
]
export default function Quiz() {
  const [questionNo, setquestionNo] = React.useState(0);

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentcount={questionNo + 1} totalcount={questions.length} />
      <Question question={questions[questionNo].question} answer={questions[questionNo].answer} showanswer={false} />
      <Footer />
    </div>
  )
}