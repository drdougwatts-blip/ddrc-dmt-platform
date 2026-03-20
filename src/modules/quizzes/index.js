import O1_1 from './O1_1'
import O1_2 from './O1_2'
import O1_3 from './O1_3'
import O1_4 from './O1_4'
import O2_1 from './O2_1'
import O2_2 from './O2_2'
import O2_3 from './O2_3'
import O3_1 from './O3_1'
import O3_2 from './O3_2'
import O3_3 from './O3_3'
import O3_4 from './O3_4'
import RM1 from './RM1'
import RM4 from './RM4'
import RM5 from './RM5'
import RM6 from './RM6'
import RM7 from './RM7'

const quizzes = {
  O1_1,
  O1_2,
  O1_3,
  O1_4,
  O2_1,
  O2_2,
  O2_3,
  O3_1,
  O3_2,
  O3_3,
  O3_4,
  RM1,
  RM4,
  RM5,
  RM6,
  RM7,
}

// Shared modules use the same quiz
quizzes.RM2 = O2_3
quizzes.RM3 = O3_3

export function getModuleQuiz(moduleId) {
  return quizzes[moduleId] || null
}

export default quizzes
