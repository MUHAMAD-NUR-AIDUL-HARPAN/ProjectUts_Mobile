import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const questions = [
  {
    question: "Apa itu React Native?",

    options: ["a. Framework untuk membangun aplikasi web.", "b. Library untuk membangun aplikasi backend.", 
      "c. Framework untuk membangun aplikasi mobile menggunakan JavaScript.", "d. Bahasa pemrograman khusus untuk Android."],
    correctAnswer: 2
  },
  {
    question: "Bahasa pemrograman utama yang digunakan dalam React Native adalah:",
    options: ["a. Python", "b. Swift", "c. Kotlin", "d. JavaScript"],
    correctAnswer: 3
  },
  {
    question: "Komponen mana yang digunakan untuk menampilkan teks dalam React Native?",
    options: ["a. <Text>", "b. <Label>", "c. <Span>", "d. <Paragraph>"],
    correctAnswer: 0
  },

  {
    question: "Apakah fungsi dari komponen <View> dalam React Native?",
    options: ["a. Menampilkan gambar", "b. Menyusun tata letak dan sebagai kontainer untuk komponen lainnya", 
      "c. Menampilkan input teks", "d. Mengganti tampilan aplikasi"],
    correctAnswer: 1
  },
  
  {
    question: "Metode mana yang digunakan untuk mengelola navigasi antar layar pada aplikasi React Native?",
    options: ["a. React Navigation", "b. React Router", 
      "c. React Link", "d. React Native Page"],
    correctAnswer: 0
  },

  {
    question: "Manakah cara yang benar untuk mengupdate state di dalam React Native?",
    options: ["a. this.state = newState", "b. this.setState({ ... })", 
      "c. setState(newState)", "d. this.setState(newState)"],
    correctAnswer: 0
  },
  {
    question: "Bagaimana cara membuat sebuah komponen stateful dalam React Native?",
    options: ["a. Menggunakan function component tanpa state", "b. Menggunakan class component dengan this.state", 
      
      "c. Menggunakan const untuk mendeklarasikan komponen", "d. Menggunakan file .json sebagai komponen"],
    correctAnswer: 1
  },

  {
    question: "Untuk menangani style dalam React Native, developer menggunakan:",
    options: ["a. CSS", "b. StyleSheet", "c. HTML", "d. SCSS"],
    correctAnswer: 1
  },

  {
    question: "Pada lifecycle metode manakah data biasanya di-fetch di React Native?",
    options: ["a. render", "b. componentDidMount", "c. constructor", "d. componentWillUnmount"],
    correctAnswer: 1
  },

  {
    question: "Perintah mana yang digunakan untuk menjalankan aplikasi React Native di emulator?",
    options: ["a. npm start", "b. npm run build", "c. npx react-native run-android", "d. npm install"],
    correctAnswer: 2
  },


  
];

export default function Main() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const scoreCount = () => {
    const valueScore = 100 / questions.length;
    return score * valueScore; 
  }

  return (
    <SafeAreaView style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Skor Anda: {score} dari {questions.length} {"\n"}
            Score anda adalah {scoreCount().toFixed(0)}
          </Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <Text style={styles.restartButtonText}>Mulai Ulang Kuis</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionCount}>
            Pertanyaan {currentQuestion + 1}/{questions.length}
          </Text>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizContainer: {
    backgroundColor: 'white',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionCount: {
    fontSize: 18,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    borderRadius: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});