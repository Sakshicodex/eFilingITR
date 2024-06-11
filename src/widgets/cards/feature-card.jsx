import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function FeatureCard({ image, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col"
    >
      <Card className="flex-grow rounded-lg shadow-lg shadow-purple-500/10">
        <CardBody className="px-8 text-center flex flex-col items-center">
          <div className="pointer-events-none mb-6 rounded-full overflow-hidden">
            <img src={image} alt={title} className="w-14 h-14 object-cover" />
          </div>
          <Typography variant="h5" className="mb-2" color="blue-gray">
            {title}
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
}

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
