import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const config = {
  // Server
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',

  // Database
  mongodbUri: process.env.MONGODB_URI,

  // AI Services
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
  },

  pinecone: {
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
    index: process.env.PINECONE_INDEX || 'resume-roast',
  },

  // File Upload
  upload: {
    maxSize: parseInt(process.env.MAX_FILE_SIZE) || 5242880, // 5MB
    directory: process.env.UPLOAD_DIR || './uploads',
    allowedTypes: ['application/pdf'],
  },

  // CORS
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',

  // JWT
  jwt: {
    secret: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE || '30d',
  },

  // Logging
  logLevel: process.env.LOG_LEVEL || 'info',
};

// Validate required variables
const requiredEnvVars = ['MONGODB_URI'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingVars.forEach(varName => console.error(`   - ${varName}`));
  console.error('Please check your .env file');
  process.exit(1);
}

export default config;