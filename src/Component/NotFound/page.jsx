import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-[80vh] text-[#333] px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] font-extrabold leading-none"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-4"
      >
        Oops! Page not found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-orange-500 max-w-xl text-center mb-8"
      >
        The page you’re looking for doesn’t exist. It might have been removed, renamed, or did it ever exist? 🤔
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-500 transition-colors text-white px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Go back home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
