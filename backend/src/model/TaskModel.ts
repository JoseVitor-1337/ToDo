import mongoose from "../config/database";

interface Task extends mongoose.Document {
  macAddress: string;
  type: number;
  title: string;
  description: string;
  when: string;
  done: boolean;
  created: Date;
}

const TaskSchema = new mongoose.Schema({
  macAddress: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  when: {
    type: Date,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model<Task>("Task", TaskSchema);
