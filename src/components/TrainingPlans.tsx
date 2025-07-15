import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleWhatsAppClick, scrollToSection } from '../utils/scrollUtils';

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  description: string;
  videoUrl?: string;
  form_tips?: string[];
}

interface TrainingPlan {
  id: string;
  name: string;
  category: string;
  bodyPart?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  image: string;
  exercises: Exercise[];
  equipment: string[];
  calories: string;
  targetMuscles: string[];
  benefits: string[];
}

const IMAGES = {
  strength: '/images/training/strength-training.jpg',
  hiit: '/images/training/hiit-workout.jpg',
  yoga: '/images/training/yoga-session.jpg',
  crossfit: '/images/training/crossfit-training.jpg',
  bodyweight: '/images/training/calisthenics.jpg',
  chest: '/images/training/chest-workout.jpg',
  back: '/images/training/back-workout.jpg',
  legs: '/images/training/leg-workout.jpg',
  muscleGain: '/images/training/muscle-gain.jpg',
  shoulders: '/images/training/shoulder-workout.jpg',
  arms: '/images/training/arm-workout.jpg',
  abs: '/images/training/abs-workout.jpg',
  functional: '/images/training/functional-training.jpg'
};

const trainingPlans: TrainingPlan[] = [
  {
    id: 'strength-1',
    name: 'Power Building Pro',
    category: 'Strength',
    level: 'Intermediate',
    duration: '8 weeks',
    description: 'Build massive strength and muscle mass with this comprehensive powerlifting-focused program.',
    image: IMAGES.strength,
    calories: '500-700 per session',
    equipment: ['Barbell', 'Power Rack', 'Bench', 'Plates'],
    targetMuscles: ['Chest', 'Back', 'Legs', 'Shoulders'],
    benefits: [
      'Increased overall strength',
      'Muscle mass development',
      'Improved compound lift technique',
      'Enhanced power output'
    ],
    exercises: [
      { name: 'Barbell Squat', sets: 5, reps: '5', description: 'Focus on form and progressive overload' },
      { name: 'Bench Press', sets: 5, reps: '5', description: 'Keep shoulders retracted and feet planted' },
      { name: 'Deadlift', sets: 3, reps: '5', description: 'Maintain neutral spine throughout' },
      { name: 'Military Press', sets: 4, reps: '8', description: 'Press overhead with controlled movement' },
      { name: 'Barbell Row', sets: 4, reps: '8', description: 'Build back and core strength', form_tips: ['Keep back flat', 'Pull to lower chest', 'Control the descent'] },
      { name: 'Pull-Ups', sets: 3, reps: 'Max', description: 'Bodyweight back and arm builder', form_tips: ['Full range of motion', 'Engage lats', 'Avoid swinging'] }
    ]
  },
  {
    id: 'hiit-1',
    name: 'Fat Burn Extreme',
    category: 'HIIT',
    level: 'Advanced',
    duration: '4 weeks',
    description: 'High-intensity interval training designed for maximum fat burn and cardiovascular endurance.',
    image: IMAGES.hiit,
    calories: '400-600 per session',
    equipment: ['Dumbbells', 'Jump Rope', 'Timer'],
    targetMuscles: ['Full Body', 'Core'],
    benefits: [
      'Accelerated fat loss',
      'Improved cardiovascular endurance',
      'Increased metabolic rate',
      'Enhanced agility and coordination'
    ],
    exercises: [
      { name: 'Burpees', sets: 4, reps: '20', description: 'Explosive movement with full body engagement' },
      { name: 'Mountain Climbers', sets: 4, reps: '30 each leg', description: 'Keep core tight and maintain pace' },
      { name: 'Box Jumps', sets: 4, reps: '15', description: 'Land softly and maintain control' },
      { name: 'Battle Ropes', sets: 4, reps: '30 seconds', description: 'Alternate waves with high intensity' },
      { name: 'Jump Rope Sprints', sets: 4, reps: '1 min', description: 'High-speed skipping for cardio', form_tips: ['Stay light on feet', 'Keep elbows in', 'Maintain rhythm'] },
      { name: 'Dumbbell Thrusters', sets: 3, reps: '15', description: 'Full body HIIT finisher', form_tips: ['Squat deep', 'Explode overhead', 'Control descent'] }
    ]
  },
  {
    id: 'yoga-1',
    name: 'Flexibility Master',
    category: 'Yoga',
    level: 'Beginner',
    duration: '6 weeks',
    description: 'Improve flexibility and joint mobility with this yoga-inspired program.',
    image: IMAGES.yoga,
    calories: '200-300 per session',
    equipment: ['Yoga Mat', 'Blocks', 'Straps'],
    targetMuscles: ['Full Body', 'Core', 'Hip Flexors'],
    benefits: [
      'Increased flexibility',
      'Better joint mobility',
      'Improved posture',
      'Reduced stress and tension',
      'Enhanced mind-body connection'
    ],
    exercises: [
      { name: 'Sun Salutation', sets: 3, reps: '1 flow', description: 'Flow through each pose mindfully' },
      { name: 'Warrior Sequence', sets: 2, reps: '1 flow', description: 'Focus on alignment and breathing' },
      { name: 'Hip Opening Series', sets: 2, reps: '30-60s hold', description: 'Hold each pose with proper form' },
      { name: 'Seated Forward Fold', sets: 2, reps: '45s hold', description: 'Stretch hamstrings and lower back', form_tips: ['Keep spine long', 'Reach forward gently'] },
      { name: "Child's Pose", sets: 2, reps: '1 min hold', description: 'Relax and stretch back/hips', form_tips: ['Relax shoulders', 'Breathe deeply'] }
    ]
  },
  {
    id: 'crossfit-1',
    name: 'CrossFit Beast',
    category: 'CrossFit',
    level: 'Advanced',
    duration: '12 weeks',
    description: 'Intense CrossFit program combining strength, cardio, and skill work.',
    image: IMAGES.crossfit,
    calories: '600-800 per session',
    equipment: ['Barbell', 'Kettlebells', 'Rings', 'Rower'],
    targetMuscles: ['Full Body'],
    benefits: [
      'Improved overall fitness',
      'Enhanced work capacity',
      'Better functional strength',
      'Increased endurance',
      'Advanced skill development'
    ],
    exercises: [
      { name: 'Clean and Jerk', sets: 5, reps: '3-3-3-3-3', description: 'Focus on explosive power' },
      { name: 'Muscle Ups', sets: 4, reps: '5-8', description: 'Strict form with full lockout' },
      { name: 'Double Unders', sets: 3, reps: '50', description: 'Maintain rhythm and posture' },
      { name: 'Wall Balls', sets: 4, reps: '20', description: 'Full body power and cardio', form_tips: ['Squat low', 'Explode up', 'Hit target'] },
      { name: 'Rowing Sprints', sets: 4, reps: '250m', description: 'Max effort on rower', form_tips: ['Drive with legs', 'Finish with arms'] }
    ]
  },
  {
    id: 'bodyweight-1',
    name: 'Calisthenics Mastery',
    category: 'Bodyweight',
    level: 'Intermediate',
    duration: '10 weeks',
    description: 'Master your bodyweight with progressive calisthenics training.',
    image: IMAGES.bodyweight,
    calories: '300-500 per session',
    equipment: ['Pull-up Bar', 'Parallel Bars', 'Resistance Bands'],
    targetMuscles: ['Full Body', 'Core', 'Upper Body'],
    benefits: [
      'Improved body control',
      'Increased relative strength',
      'Better mobility and balance',
      'Enhanced body awareness',
      'Progressive skill development'
    ],
    exercises: [
      { name: 'Pull-ups', sets: 4, reps: '8-12', description: 'Full range of motion with controlled descent' },
      { name: 'Handstand Progression', sets: 3, reps: '30s hold', description: 'Wall-assisted to free-standing' },
      { name: 'Pistol Squats', sets: 3, reps: '5 each leg', description: 'Focus on balance and control' },
      { name: 'Dips', sets: 3, reps: '10-15', description: 'Triceps and chest builder', form_tips: ['Keep elbows close', 'Lower fully'] },
      { name: 'Hollow Body Hold', sets: 3, reps: '30s', description: 'Core stability', form_tips: ['Press lower back to floor', 'Point toes'] }
    ]
  },
  {
    id: 'chest-1',
    name: 'Ultimate Chest Builder',
    category: 'Body Part',
    bodyPart: 'Chest',
    level: 'Intermediate',
    duration: '6 weeks',
    description: 'Comprehensive chest development program focusing on upper, middle, and lower chest with progressive overload.',
    image: IMAGES.chest,
    calories: '400-500 per session',
    equipment: ['Barbell', 'Dumbbells', 'Bench', 'Cables'],
    targetMuscles: ['Upper Chest', 'Middle Chest', 'Lower Chest', 'Front Deltoids', 'Triceps'],
    benefits: ['Increased chest mass', 'Better pushing strength', 'Improved posture'],
    exercises: [
      { 
        name: 'Incline Bench Press',
        sets: 4,
        reps: '8-10',
        description: 'Target upper chest development',
        form_tips: ['Maintain slight arch', 'Keep elbows at 45°', 'Full range of motion']
      },
      {
        name: 'Flat Dumbbell Press',
        sets: 4,
        reps: '10-12',
        description: 'Focus on middle chest activation',
        form_tips: ['Control the descent', 'Keep core tight', 'Natural elbow path']
      },
      {
        name: 'Cable Flyes',
        sets: 3,
        reps: '12-15',
        description: 'Isolate chest fibers with a deep stretch',
        form_tips: ['Slight bend in elbows', 'Squeeze at peak contraction']
      },
      {
        name: 'Dips (Chest Lean)',
        sets: 3,
        reps: '10-12',
        description: 'Emphasize lower chest',
        form_tips: ['Lean forward', 'Go deep', 'Avoid locking elbows']
      }
    ]
  },
  {
    id: 'back-1',
    name: 'V-Taper Back Builder',
    category: 'Body Part',
    bodyPart: 'Back',
    level: 'Advanced',
    duration: '8 weeks',
    description: 'Build a wide, thick back with this specialized program targeting all areas of the back musculature.',
    image: IMAGES.back,
    calories: '450-550 per session',
    equipment: ['Pull-up Bar', 'Barbell', 'Dumbbells', 'Cables'],
    targetMuscles: ['Lats', 'Rhomboids', 'Lower Back', 'Traps', 'Rear Deltoids'],
    benefits: ['Wider back', 'Improved posture', 'Better pulling strength'],
    exercises: [
      {
        name: 'Wide-Grip Pull-ups',
        sets: 4,
        reps: '8-12',
        description: 'Primary lat builder',
        form_tips: ['Full stretch at bottom', 'Squeeze at top', 'Control descent']
      },
      {
        name: 'Barbell Bent-Over Row',
        sets: 4,
        reps: '8-10',
        description: 'Build thickness in the mid-back',
        form_tips: ['Flat back', 'Pull to lower chest', 'Pause at top']
      },
      {
        name: 'Seated Cable Row',
        sets: 3,
        reps: '12',
        description: 'Focus on squeezing shoulder blades together',
        form_tips: ['Neutral grip', 'Slow negative']
      }
    ]
  },
  {
    id: 'legs-1',
    name: 'Quad Destroyer',
    category: 'Body Part',
    bodyPart: 'Legs',
    level: 'Advanced',
    duration: '8 weeks',
    description: 'Build massive legs with this high-volume, progressive overload program.',
    image: IMAGES.legs,
    calories: '600-800 per session',
    equipment: ['Squat Rack', 'Leg Press', 'Hack Squat Machine'],
    targetMuscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'],
    benefits: ['Leg mass', 'Explosive power', 'Better stability'],
    exercises: [
      {
        name: 'Back Squats',
        sets: 5,
        reps: '5-8',
        description: 'Primary leg builder',
        form_tips: ['Keep chest up', 'Drive through heels', 'Break parallel']
      },
      {
        name: 'Leg Press',
        sets: 4,
        reps: '10-12',
        description: 'Heavy compound for quad mass',
        form_tips: ['Feet shoulder-width', 'Do not lock knees']
      },
      {
        name: 'Romanian Deadlift',
        sets: 4,
        reps: '8-10',
        description: 'Hamstring and glute focus',
        form_tips: ['Hinge at hips', 'Slight knee bend', 'Feel the stretch']
      }
    ]
  },
  {
    id: 'muscle-gain-1',
    name: 'Mass Monster Program',
    category: 'Muscle Gain',
    level: 'Intermediate',
    duration: '12 weeks',
    description: 'Scientifically designed program for maximum muscle hypertrophy with progressive overload and optimal volume.',
    image: IMAGES.muscleGain,
    calories: '700-900 per session',
    equipment: ['Barbell', 'Dumbbells', 'Cable Machine', 'Smith Machine', 'Bench'],
    targetMuscles: ['Full Body', 'Major Muscle Groups'],
    benefits: [
      'Significant muscle mass gains',
      'Increased strength',
      'Enhanced protein synthesis',
      'Improved body composition',
      'Better muscle definition'
    ],
    exercises: [
      {
        name: 'German Volume Training',
        sets: 10,
        reps: '10',
        description: 'High-volume compound exercises for maximum growth',
        form_tips: ['60-70% of 1RM', 'Rest 90 seconds between sets', 'Focus on time under tension']
      },
      {
        name: 'Progressive Overload Sets',
        sets: 5,
        reps: '8-12',
        description: 'Increasing weights with perfect form',
        form_tips: ['Add weight when you can complete all reps', 'Control eccentric phase', 'Full range of motion']
      },
      {
        name: 'Drop Sets',
        sets: 3,
        reps: '12-10-8',
        description: 'Decreasing weights with no rest',
        form_tips: ['Start heavy', 'Reduce weight by 20-30%', 'Minimal rest between drops']
      },
      {
        name: 'Incline Dumbbell Press',
        sets: 4,
        reps: '10',
        description: 'Upper chest and shoulder focus',
        form_tips: ['Press at 30-45°', 'Control the descent']
      }
    ]
  },
  {
    id: 'shoulder-1',
    name: '3D Shoulder Sculptor',
    category: 'Body Part',
    bodyPart: 'Shoulders',
    level: 'Intermediate',
    duration: '8 weeks',
    description: 'Comprehensive shoulder development targeting all three deltoid heads for balanced, boulder shoulders.',
    image: IMAGES.shoulders,
    calories: '400-500 per session',
    equipment: ['Dumbbells', 'Cables', 'Smith Machine', 'Resistance Bands'],
    targetMuscles: ['Front Deltoids', 'Side Deltoids', 'Rear Deltoids', 'Traps', 'Upper Back'],
    benefits: [
      'Balanced shoulder development',
      'Improved overhead pressing strength',
      'Enhanced shoulder stability',
      'Better posture',
      'Injury prevention'
    ],
    exercises: [
      {
        name: 'Military Press',
        sets: 4,
        reps: '8-10',
        description: 'Strict overhead pressing',
        form_tips: ['Keep core tight', 'Full range of motion', 'Control the descent']
      },
      {
        name: 'Lateral Raise Complex',
        sets: 3,
        reps: '12-15',
        description: 'Side deltoid focus with perfect form',
        form_tips: ['Lead with elbows', 'Slight forward lean', 'Control the movement']
      },
      {
        name: 'Face Pulls',
        sets: 3,
        reps: '15',
        description: 'Rear deltoid and upper back',
        form_tips: ['Pull to forehead', 'Elbows high', 'Squeeze at end']
      }
    ]
  },
  {
    id: 'arm-1',
    name: 'Arms of Steel',
    category: 'Body Part',
    bodyPart: 'Arms',
    level: 'Intermediate',
    duration: '6 weeks',
    description: 'Intensive arm training program focusing on biceps, triceps, and forearms development.',
    image: IMAGES.arms,
    calories: '350-450 per session',
    equipment: ['Dumbbells', 'Barbell', 'Cables', 'Preacher Bench'],
    targetMuscles: ['Biceps', 'Triceps', 'Forearms', 'Brachialis'],
    benefits: [
      'Increased arm size',
      'Better arm definition',
      'Improved grip strength',
      'Enhanced pushing/pulling power'
    ],
    exercises: [
      {
        name: '21s Bicep Curls',
        sets: 3,
        reps: '21',
        description: 'Three ranges of motion in one set',
        form_tips: ['7 bottom half', '7 top half', '7 full range']
      },
      {
        name: 'Tricep Giant Set',
        sets: 3,
        reps: '12 each',
        description: 'Three exercises back to back',
        form_tips: ['Pushdowns', 'Overhead extensions', 'Close-grip pushups']
      },
      {
        name: 'Hammer Curls',
        sets: 3,
        reps: '12',
        description: 'Brachialis and forearm focus',
        form_tips: ['Neutral grip', 'No swinging']
      }
    ]
  },
  {
    id: 'abs-1',
    name: 'Core Commander',
    category: 'Body Part',
    bodyPart: 'Core',
    level: 'Advanced',
    duration: '4 weeks',
    description: 'Advanced core training program for strength, stability, and definition.',
    image: IMAGES.abs,
    calories: '300-400 per session',
    equipment: ['Ab Wheel', 'Medicine Ball', 'Decline Bench', 'Cable Machine'],
    targetMuscles: ['Rectus Abdominis', 'Obliques', 'Transverse Abdominis', 'Lower Back'],
    benefits: [
      'Stronger core',
      'Better ab definition',
      'Improved stability',
      'Enhanced athletic performance',
      'Better posture'
    ],
    exercises: [
      {
        name: 'Weighted Planks',
        sets: 3,
        reps: '60 seconds',
        description: 'Progressive overload planks',
        form_tips: ['Neutral spine', 'Engage glutes', 'Breathe steadily']
      },
      {
        name: 'Cable Woodchoppers',
        sets: 3,
        reps: '15 each side',
        description: 'Rotational core strength',
        form_tips: ['Pivot feet', 'Keep arms straight', 'Control the motion']
      },
      {
        name: 'Hanging Leg Raises',
        sets: 3,
        reps: '12',
        description: 'Lower ab and hip flexor focus',
        form_tips: ['No swinging', 'Raise legs to parallel']
      }
    ]
  },
  {
    id: 'functional-1',
    name: 'Functional Fitness Pro',
    category: 'Functional',
    level: 'Intermediate',
    duration: '8 weeks',
    description: 'Comprehensive functional training program to improve everyday movement patterns and athletic performance.',
    image: IMAGES.functional,
    calories: '350-500 per session',
    equipment: ['Kettlebells', 'Medicine Ball', 'Resistance Bands', 'Bodyweight'],
    targetMuscles: ['Full Body', 'Core', 'Stabilizers'],
    benefits: [
      'Better movement patterns',
      'Injury prevention',
      'Improved balance and coordination',
      'Enhanced athleticism'
    ],
    exercises: [
      {
        name: 'Kettlebell Flow',
        sets: 4,
        reps: '1 minute reps',
        description: 'Continuous movement pattern',
        form_tips: ['Swing to clean', 'Clean to press', 'Press to windmill']
      },
      {
        name: 'Medicine Ball Slams',
        sets: 4,
        reps: '15',
        description: 'Explosive full body power',
        form_tips: ['Use whole body', 'Explode down', 'Absorb impact with knees']
      },
      {
        name: 'Band-Resisted Lateral Walks',
        sets: 3,
        reps: '20 steps',
        description: 'Hip and glute activation',
        form_tips: ['Keep tension on band', 'Stay low']
      }
    ]
  }
];

const categories = ['All', 'Strength', 'HIIT', 'Yoga', 'CrossFit', 'Bodyweight', 'Body Part', 'Muscle Gain', 'Functional'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const bodyParts = ['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'];

const TrainingPlans: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedBodyPart, setSelectedBodyPart] = useState('All');
  const [selectedPlan, setSelectedPlan] = useState<TrainingPlan | null>(null);
  const [showAllPlans, setShowAllPlans] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPlan]);

  const filteredPlans = useMemo(() => {
    return trainingPlans.filter(plan => {
      const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.targetMuscles.some(muscle => muscle.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || plan.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || plan.level === selectedLevel;
      const matchesBodyPart = selectedBodyPart === 'All' || plan.bodyPart === selectedBodyPart;
      return matchesSearch && matchesCategory && matchesLevel && matchesBodyPart;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedBodyPart]);
  const displayedPlans = showAllPlans ? filteredPlans : filteredPlans.slice(0, 6);

  return (
    <section id="training-plans" className="relative py-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/gym-background.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-gray-900/80 to-gray-800/90" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            Training Plans
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover specialized workout programs designed to help you achieve your fitness goals.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  if (category === 'Body Part') {
                    setSelectedBodyPart('All');
                  }
                }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700/50'}`}
              >
                {category}
              </button>
            ))}
          </div>
          {selectedCategory === 'Body Part' && (
            <div className="flex flex-wrap justify-center gap-2">
              {bodyParts.map((part) => (
                <button
                  key={part}
                  onClick={() => setSelectedBodyPart(part)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                    ${selectedBodyPart === part
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700/50'}`}
                >
                  {part}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-effect rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors duration-300">
                  {plan.name}
                </h3>
                <p className="text-gray-200 leading-relaxed mt-2">
                  {plan.description}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                  onClick={() => setSelectedPlan(plan)}
                >
                  Know More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {filteredPlans.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
              onClick={() => setShowAllPlans((prev) => !prev)}
            >
              {showAllPlans ? 'Show Less' : 'Show All Plans'}
            </button>
          </div>
        )}
        <AnimatePresence>
          {selectedPlan && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
              onClick={() => setSelectedPlan(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gray-900 rounded-2xl max-w-4xl w-full h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="absolute top-4 right-4 z-50 bg-gray-800/50 p-2 rounded-full hover:bg-red-500/20 transition-all duration-300 group"
                  aria-label="Close modal"
                >
                  <svg 
                    className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="h-full overflow-y-auto overflow-x-hidden">
                  <div className="relative h-64 md:h-96">
                    <img
                      src={selectedPlan.image}
                      alt={selectedPlan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedPlan.name}</h3>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${selectedPlan.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            selectedPlan.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'}`}
                        >
                          {selectedPlan.level}
                        </span>
                        <span className="text-gray-300">{selectedPlan.duration}</span>
                        <span className="text-gray-300">{selectedPlan.calories} calories</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-8">
                    <div>
                      <p className="text-gray-200 text-lg leading-relaxed">{selectedPlan.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Target Muscles</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {selectedPlan.targetMuscles.map((muscle, idx) => (
                            <li key={idx}>{muscle}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Who is this for?</h4>
                        <p className="text-gray-300">{selectedPlan.level} trainees looking to {selectedPlan.benefits[0]?.toLowerCase() || 'improve their fitness'}.</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Session Duration</h4>
                        <p className="text-gray-300">{selectedPlan.duration}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Calories Burned</h4>
                        <p className="text-gray-300">{selectedPlan.calories}</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold text-white mb-2">Required Equipment</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPlan.equipment.map((item) => (
                            <span
                              key={item}
                              className="px-4 py-2 bg-gray-800/50 rounded-lg text-sm text-gray-300 border border-gray-700"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Exercises</h4>
                      <div className="space-y-4">
                        {selectedPlan.exercises.map((exercise, index) => (
                          <div
                            key={index}
                            className="glass-effect rounded-lg p-6 border border-gray-700 hover:border-red-500/30 transition-all duration-300"
                          >
                            <h5 className="text-lg font-semibold text-white mb-3">{exercise.name}</h5>
                            <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                              <span className="px-3 py-1 bg-red-500/10 rounded-full">{exercise.sets} sets</span>
                              <span className="px-3 py-1 bg-red-500/10 rounded-full">{exercise.reps} reps</span>
                            </div>
                            <p className="text-gray-400 mb-3">{exercise.description}</p>
                            {exercise.form_tips && (
                              <div className="mt-3 bg-gray-800/30 rounded-lg p-4">
                                <h6 className="text-sm font-semibold text-gray-200 mb-2">Form Tips:</h6>
                                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                                  {exercise.form_tips.map((tip, tipIndex) => (
                                    <li key={tipIndex}>{tip}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                      <button
                        className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                        onClick={() => {
                          const message = encodeURIComponent(`Hello sir, I want to book a session for this training plan: ${selectedPlan.name}`);
                          window.open(`https://wa.me/?text=${message}`, '_blank');
                        }}
                      >
                        Book Session
                      </button>
                      <button
                        className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors duration-300"
                        onClick={() => setSelectedPlan(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TrainingPlans; 