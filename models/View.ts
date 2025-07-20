import mongoose from 'mongoose'

const ViewSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 }
})

export default mongoose.models.View || mongoose.model('View', ViewSchema)
