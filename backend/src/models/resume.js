import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
    },
    fileName: {
      type: String,
      required: [true, 'File name is required'],
      trim: true,
    },
    fileUrl: {
      type: String,
      required: [true, 'File URL is required'],
    },
    fileSize: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: [true, 'Resume content is required'],
    },
    rawText: {
      type: String,
    },
    skills: {
      type: [String],
      default: [],
    },
    experience: {
      type: String,
      default: '',
    },
    education: {
      type: String,
      default: '',
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    version: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
resumeSchema.index({ userId: 1, createdAt: -1 });
resumeSchema.index({ content: 'text' });

// Virtual field for analysis count
resumeSchema.virtual('analysisCount', {
  ref: 'Analysis',
  localField: '_id',
  foreignField: 'resumeId',
  count: true,
});

// Middleware: Log before saving
resumeSchema.pre('save', function(next) {
  console.log(`📄 Saving resume: ${this.fileName}`);
  next();
});

// Instance method: Get summary
resumeSchema.methods.getSummary = function() {
  return {
    id: this._id,
    fileName: this.fileName,
    contentLength: this.content.length,
    skillCount: this.skills.length,
    createdAt: this.createdAt,
  };
};

// Static method: Find by user
resumeSchema.statics.findByUser = function(userId) {
  return this.find({ userId, isActive: true })
    .sort({ createdAt: -1 })
    .select('fileName content skills createdAt');
};

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;