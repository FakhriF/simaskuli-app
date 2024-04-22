"use client";
import React from 'react';
import Gradebook from './components/gradebooks';

//mockup
const studentGrades = {
    Mathematics: {
      grade: 85,
      maxGrade: 100,
      quizzes: {
        Quiz1: 90,
        Quiz2: 80,
      }
    },
    Science: {
      grade: 90,
      maxGrade: 100,
      quizzes: {
        Quiz1: 85,
        Quiz2: 95,
      }
    },
    History: {
      grade: 75,
      maxGrade: 100,
      quizzes: {
        Quiz1: 70,
        Quiz2: 80,
      }
    },
  };

export default function GradebookStudentPage(){
    return (
        <div className="App">
            <Gradebook studentGrades={studentGrades} />
        </div>
      );
}