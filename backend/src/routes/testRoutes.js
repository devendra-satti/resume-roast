import express from 'express';
import mongoose from 'mongoose';
import Resume from '../models/Resume.js';

const router = express.Router();

// Test database connection
router.get('/db-test', async (req, res) => {
  try {
    const state = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting',
    };
    
    res.json({
      status: 'success',
      message: 'Database test endpoint',
      connectionState: states[state] || 'unknown',
      databaseName: mongoose.connection.name,
      host: mongoose.connection.host,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});

// Test Resume model
router.post('/resume-test', async (req, res) => {
  try {
    const testResume = new Resume({
      fileName: 'test-resume.pdf',
      fileUrl: 'test-url',
      fileSize: 1024,
      content: 'This is a test resume content. Experienced software developer with 5 years in full-stack development.',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      experience: '5 years of software development',
      education: 'BS Computer Science',
    });

    await testResume.save();
    
    res.status(201).json({
      status: 'success',
      message: 'Test resume created successfully',
      data: testResume,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});

// Get all resumes
router.get('/resumes', async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.json({
      status: 'success',
      count: resumes.length,
      data: resumes,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});

export default router;