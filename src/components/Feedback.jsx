import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useForm } from 'react-hook-form'

const Feedback = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    const feedbackData = { ...data, rating }
    console.log("Feedback submitted:", feedbackData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
      setRating(0)
    }, 3000)
  }

  return (
    <section className="py-32 bg-surface border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Rate your experience</h2>
            <p className="text-gray-400">We value your feedback to improve our services.</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Thank You!</h3>
              <p className="text-gray-400 mt-2">Your feedback has been received.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
              
              {/* Star Rating */}
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1
                  return (
                    <button
                      type="button"
                      key={index}
                      className="focus:outline-none"
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <Star 
                        className={`w-10 h-10 transition-colors duration-200 ${
                          starValue <= (hover || rating) 
                            ? "fill-yellow-500 text-yellow-500" 
                            : "text-gray-600"
                        }`} 
                      />
                    </button>
                  )
                })}
              </div>

              {/* Comment Input */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-400 mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell us what you think..."
                  {...register("comment")}
                />
              </div>

              <button
                type="submit"
                disabled={rating === 0}
                className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Submit Feedback
              </button>

            </form>
          )}

        </motion.div>
      </div>
    </section>
  )
}

export default Feedback
