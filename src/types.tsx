export type setRowType = { set: string; reps: string; weight: string };
export type exerciseType = { category: categoryType; exerciseName: string; sets: setRowType[] };
export type categoryType = { id: string; categoryName: string };
