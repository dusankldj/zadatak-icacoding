export interface Summary {
    open: number;
    in_progress: number;
    done: number;
}

export const emptySummary: Summary = { open: 0, in_progress: 0, done: 0 };