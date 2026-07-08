# ResumeRoast - AI-Powered Career Coach & Resume Optimizer

## Project Overview
A full-stack MERN application that uses Google Gemini AI to analyze resumes against job descriptions and provide actionable feedback for optimization.

## Target Users
- Job seekers wanting to optimize their resumes
- Career coaches looking to provide better guidance
- Professionals preparing for career transitions

## Core Features

### 1. Resume Management
- Upload PDF resumes using Multer
- Parse PDF content using pdf-parse
- Extract and display resume content
- Store resume metadata in MongoDB

### 2. Job Description Input
- Paste or upload job descriptions
- Extract key requirements and keywords

### 3. AI-Powered Analysis (Gemini)
- Resume Roast: Overall resume critique
- ATS Score: Compatibility score (0-100)
- Missing Keywords: Keywords from JD not in resume
- Gap Analysis: Skills/experience gaps
- Bullet Impactifier: Improve bullet points with metrics
- Skill Bridge: Suggest courses/skills to fill gaps

### 4. Mock Interview
- Generate interview questions based on resume gaps

### 5. Advanced Features
- Pinecone integration for RAG (Retrieval-Augmented Generation)
- Resume and JD embeddings for semantic search
- Analysis history tracking

## Technical Stack

### Frontend
- React 18
- Tailwind CSS
- React Router v6
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM

### AI & Vector Database
- Google Gemini API (Gemini Pro)
- Pinecone (Vector Database)

### File Handling
- Multer (file upload)
- pdf-parse (PDF parsing)

### Development Tools
- dotenv (environment variables)
- Nodemon (auto-restart)
- Git & GitHub

## Data Models

### Resume
```javascript
{
  userId: ObjectId,
  fileName: String,
  fileUrl: String,
  content: String,
  skills: [String],
  experience: String,
  education: String,
  createdAt: Date
}