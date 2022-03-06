import {Timestamp} from "@google-cloud/firestore";

type IntelType = {
  /** Intel report by */
  reportBy: string
  /** Intel created at */
  createdAt: typeof Timestamp
  /** refers to t1 troops in game */
  t1: number
  /** refers to t1 troops in game */
  t2: number
  /** refers to t1 troops in game */
  t3: number
  /** refers to t1 troops in game */
  t4: number
  /** refers to t1 troops in game */
  t5: number
  /** refers to t1 troops in game */
  t6: number
  /** refers to t1 troops in game */
  t7: number
  /** refers to t1 troops in game */
  t8: number
  /** refers to t1 troops in game */
  t9: number
  /** refers to t1 troops in game */
  t10: number
  /** x location of the troops */
  x: number
  /** y location of the troops */
  y: number
}

export const IntelName = "intels";
export default IntelType;
